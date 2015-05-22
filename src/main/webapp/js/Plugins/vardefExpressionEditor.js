if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();

//ConditionExpressionEditor and VardefEditor

ORYX.Plugins.VardefExpressionEditor = Clazz.extend({
    
    construct: function(facade){
        this.facade = facade;
		var VE=ORYX.Plugins.VardefExpressionEditor;
        ORYX.FieldEditors["condition_expression"] = new VE.CEEditorFactory();
        ORYX.FieldEditors["vardef2"] = new VE.VardefEditorFactory();
        ORYX.FieldEditors["dataassignment2"] = new VE.DataAssignmentEditorFactory();
        ORYX.FieldEditors["input_dataassignment"] = new VE.InputDataAssignmentEditorFactory();
        ORYX.FieldEditors["output_dataassignment"] = new VE.OutputDataAssignmentEditorFactory();
    }
});


ORYX.Plugins.VardefExpressionEditor.CEEditorFactory = Clazz.extend({

    construct: function(){
    },
	
    init: function(){
		ORYX.Log.debug("init ConditionExpressionEditor");
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        var tf = new Ext.form.PathExpressionField({
				allowBlank: pair.optional(),
				dataSource:this.dataSource,
				grid:this.grid,
				row:index,
				facade:this.facade,
				autoCreate : false,
				propertyWindow: this
        });
		tf.on('dialogClosed', this.dialogClosed2, {scope:this, row:index, col:1, field:tf});
		
		return new Ext.Editor(tf);
    }
});

Ext.form.PathExpressionField = Ext.extend(Ext.form.TriggerField,  {
	onTriggerClick : function(){
		if(this.disabled){
            return;
        }
		
		var typesData = {
			"String": ORYX.I18N.PropertyWindow.Editor.TypeString,
			"Integer": ORYX.I18N.PropertyWindow.Editor.TypeInteger,
			"Float": ORYX.I18N.PropertyWindow.Editor.TypeFloat,
			"Boolean": ORYX.I18N.PropertyWindow.Editor.TypeBoolean,
			"Object": ORYX.I18N.PropertyWindow.Editor.TypeObject
		};
	
		var processJSON = ORYX.EDITOR.getSerializedJSON();
        var processVars = jsonPath(processJSON.evalJSON(), "$.properties.vardefs");
        var vardefNames = new Array();
        if(processVars) {
        	processVars.forEach(function(item){
            	if(item.length == 0) {
					return;
				}
				var vardefArray = item.split(",");
				for(var i = 0 ; i < vardefArray.length; i++){
					var vardef = vardefArray[i].split(':');
					var name=vardef[0];
					var type=vardef[1];
					var typeName=typesData[type] || type;
					vardef.push(typeName);
					vardefNames.push(vardef);
				}
			});
		}
		
		var vardefStore = new Ext.data.SimpleStore({
		    fields: ['name', 'type', 'typeName'],
		    data : vardefNames
		});
		
		var vardefCombo = new Ext.form.ComboBox({
		    store: vardefStore,
		    displayField:'name',
		    valueField:'name',
			tpl: '<tpl for="."><div class="x-combo-list-item">{[values["name"]+" "+values["typeName"]]}</div></tpl>',
		    typeAhead: true,
		    mode: 'local',
		    triggerAction: 'all',
		    value : '',
		    selectOnFocus:true,
			style:'width:170px;'
		});
		
		var compareTypes = [
			['==','='],
			['>','>'],
			['<','<'],
			['>=','>='],
			['<=','<='],
			['!=','!='],
			['contains','包含'],
			['startsWith','开始于'],
			['endsWith','结束于']
			//not contains|startsWith|endsWith
		];
		
		var compareTypeStore = new Ext.data.SimpleStore({
		    fields: ['value', 'display'],
		    data : compareTypes
		});
		var compareTypeCombo = new Ext.form.ComboBox({
		    store: compareTypeStore,
		    displayField : 'display',
			valueField : 'value',
			tpl: '<tpl for="."><div class="x-combo-list-item">{[fm.htmlEncode(values["display"])]}</div></tpl>',
		    typeAhead: true,
		    mode: 'local',
		    triggerAction: 'all',
		    value:'',
		    selectOnFocus:true,
			style:'width:170px;'
		});
		
		var compareValueField=new Ext.form.TextField({style:'width:170px;'});
		
		
		var dialog;
		
		function commitExpression(){
			var varName = vardefCombo.getValue();
			if(varName == ''){
				Ext.MessageBox.alert('提示', '变量不允许为空！');
				return;
			}
			var vardef=$A(vardefNames).find(function(e){return e[0]==varName});
			if(!vardef){
				Ext.MessageBox.alert('提示', '变量'+varName+'未定义！');
				return;
			}
			var varType=vardef[1];
			
			var compareType = compareTypeCombo.getValue();
			if(compareType == '' && varType != 'Boolean'){
				Ext.MessageBox.alert('提示', '运算符不允许为空！');
				return;
			}
			var compareValue = compareValueField.getValue();
			if(compareValue == '' && varType != 'Boolean'){
				Ext.MessageBox.alert('提示', '变量/值不允许为空！');
				compareValueField.focus();
				return;
			}
			
			//var oldValue=this.getValue();
			
			var expressionLanguage="java";
			this.dataSource.findBy(function(record){
				var found=record.get('gridProperties').propId=='oryx-conditionexpressionlanguage';
				if(found)expressionLanguage=record.get('value');
				return found;
			});
			
			var compareVardef=$A(vardefNames).find(function(e){return e[0]==compareValue});
			
			var pCompareValue=compareValue;
			if(!compareVardef){
				if(varType=='String' && (!compareValue.startsWith('"') && !compareValue.endsWith('"'))){
					pCompareValue='"'+compareValue+'"';
				}
			}
			
			var exprName;
			if(varName=='APPR_RESULT'){
				if(compareType=='==' && compareValue=='1'){
					exprName='通过';
				}else{
					exprName='不通过';
				}
			}
			
			var expressionInter;
			if(varType == 'Boolean' && compareValue == ''){
				if(compareType == '' || compareType=='=='){
					expressionInter=varName;
					exprName='is '+expressionInter;
				}else if(compareType=='!='){
					expressionInter='!'+varName;
					exprName='not '+varName;
				}
			}else if((compareType.indexOf('=')>=0
					|| compareType.indexOf('>')>=0
					|| compareType.indexOf('<')>=0)
					&& expressionLanguage == 'java' && varType == 'String'){
				if(compareType=='==' || compareType=='!='){
					expressionInter=varName+'.equals('+pCompareValue+')';
					if(compareType=='!='){
						expressionInter='!'+expressionInter;
					}
				}else{
					expressionInter=varName+'.compareTo('+pCompareValue+')'+compareType+'0';
				}
			}else if(
					compareType=='startsWith'
					|| compareType=='endsWith'
					|| (compareType=='contains' && expressionLanguage != 'mvel')){
				expressionInter = //'('+varName+'==null)? null : ' + 
					varName + '.' +  compareType + '(' + pCompareValue+')';
			}else{
				expressionInter = varName + ' ' +  compareType + ' ' + pCompareValue;
			}
			
			var expressionValue=expressionInter;
			if(expressionLanguage == 'java'){
				expressionValue = 'return ' + expressionInter + ';';
			}
			this.setValue(expressionValue);
			
			if(!exprName){
				exprName=compareType + ' ' + pCompareValue;
			}
			
			var nameRecordIndex=this.dataSource.findBy(function(record){
				return record.get('gridProperties').propId=='oryx-name';
			});
			if(exprName && nameRecordIndex!=-1){
				var nameRecord=this.dataSource.getAt(nameRecordIndex);
				this.dataSource.getAt(nameRecordIndex).set('value', exprName);
				this.propertyWindow.afterEdit({
						grid:this.grid, 
						record:nameRecord, 
						value: exprName
					});
			}
			
			dialog.hide();
		}
		
		var cpanel=new Ext.Panel({
			layout	: 'table',
			layoutConfig:{columns:2},
			items: [
				{html: '变量', style:'margin:4px;'},
				vardefCombo,
				{html: '运算', style:'margin:4px;'},
				compareTypeCombo,
				{html: '变量/值', style:'margin:4px;'},
				compareValueField
			],
			tbar: [
				{
					text: '（审批）通过',
					handler : function(){
						vardefCombo.setValue('APPR_RESULT');
						compareTypeCombo.setValue('==');
						compareValueField.setValue('1');
						commitExpression.call(this);
						dialog.hide();
					}.bind(this)
				},
				{
					text: '（审批）不通过',
					handler : function(){
						vardefCombo.setValue('APPR_RESULT');
						compareTypeCombo.setValue('!=');
						compareValueField.setValue('1');
						commitExpression.call(this);
						dialog.hide();
					}.bind(this)
				}
			]
		});
		
		dialog = new Ext.Window({ 
			layout		: 'anchor',
			autoCreate	: true,
			title		: "分支条件",
			height		: 200,
			width		: 300,
			y			: ORYX.CONFIG.EXT_WINDOW_Y,
			modal		: true,
			collapsible	: false,
			fixedcenter	: true,
			shadow		: true,
			resizable   : true,
			proxyDrag	: true,
			autoScroll  : true,
			items: [ cpanel ],
			keys:[{
				key	: 27,
				fn	: function(){
						dialog.hide();
				}.bind(this)
			}],
			listeners	:{
				hide: function(){
					this.fireEvent('dialogClosed', this.value);
					dialog.destroy();
				}.bind(this)				
			},
			buttons		: [{
                text: ORYX.I18N.PropertyWindow.ok,
                handler: commitExpression.bind(this)
            }, {
                text: ORYX.I18N.PropertyWindow.cancel,
                handler: function(){
					this.setValue(this.value);
                	dialog.hide();
                }.bind(this)
            }]
		});	
		dialog.show();
		
        var varName = '';
        var ct = '';
        var cv = '';
		var tv=this.value;
        if(tv.length > 0){
			if(tv.endsWith(';')){
				tv=tv.substring(0,tv.length-1);
			}
			if(tv.startsWith('return ')){
				tv=tv.substring('return '.length);
			}
			var match=tv.match(/!?(\w+)\.(\w+)\(("?\w+"?)\)/);
			if(match){
				varName = match[1];
				if(match[2]=='equals'){
					if(tv.startsWith('!')){
						ct='!=';
					}else{
						ct='==';
					}
				}else{
					ct = match[2];
				}
				cv = match[3];
			}else{
				match=tv.match(/!?(\w+)\.compareTo\((\w+)\)([<=>]+)0/);
				if(match){
					varName = match[1];
					cv = match[2];
					ct = match[3];
				}else {
					var valueArray = tv.split(' ');
					varName = valueArray[0];
					if(valueArray.length>1){
						ct = valueArray[1];
						if(valueArray.length>2){
							cv = valueArray[2];
						}
					}
				}
			}
			if(cv && cv.startsWith('"') && cv.endsWith('"')){
				cv=cv.substring(1,cv.length-1);
			}
        }
		vardefCombo.setValue(varName);
		compareTypeCombo.setValue(ct);
        compareValueField.setValue(cv);
		
		this.grid.stopEditing();
	}
});


/* VardefEditor */

Ext.form.ExtendedVardefField = Ext.extend(Ext.form.TriggerField,  {

    windowTitle : ORYX.I18N.PropertyWindow.Editor.ForVariableDefinitions,
    addButtonLabel : ORYX.I18N.PropertyWindow.Editor.AddVariable,
    single : false,
	tbarConfigCallback : null,
	predefinedVardefs : null,
	
	_typesData: [
		["String", ORYX.I18N.PropertyWindow.Editor.TypeString],
    	["Integer", ORYX.I18N.PropertyWindow.Editor.TypeInteger],
    	["Float", ORYX.I18N.PropertyWindow.Editor.TypeFloat],
    	["Boolean", ORYX.I18N.PropertyWindow.Editor.TypeBoolean],
    	["Object", ORYX.I18N.PropertyWindow.Editor.TypeObject]
	],
	
	renderer: function(value, p, record) {
		
		var title = record.get(p.id);
		if(title){
			title = Ext.util.Format.htmlEncode(title);
			p.cellAttr = 'title="' + title + '"';
		}
		
		return Ext.util.Format.htmlEncode(value);
	},
    
    onTriggerClick : function(){

        if(this.disabled){
            return;
        }
		
    	var VarDef = this.VarDef = Ext.data.Record.create([
			{name: 'name'},
			{name: 'stype'},
			{name: 'ctype'},
			{name: 'scope'},
			{name: 'descr'},
			{name: 'value'}
		]);

    	var vardefsProxy = new Ext.data.MemoryProxy({
            root: []
        });

    	var vardefs = new Ext.data.Store({
    		autoDestroy: true,
            reader: new Ext.data.JsonReader({
                root: "root"
            }, VarDef),
            proxy: vardefsProxy,
            sorters: [{
                property: 'name',
                direction:'ASC'
            }]
        });
    	vardefs.load();

    	if(this.value.length > 0) {
			
			this.predefinedVardefs=ORYX.getBussinessDataLoader().loadVardefs();
			var pvardefs=this.predefinedVardefs;
			function findVardef(name){
				if(!pvardefs){
					return null;
				}
				return pvardefs.query('key', name).items[0];
			}
			
    		var valueParts = this.value.split(",");
    		for(var i=0; i < valueParts.length; i++) {
    			var nextPart = valueParts[i];
    			if(nextPart.indexOf(":") > 0) {
    				var innerParts = nextPart.split(":");
					var name=innerParts[0],scope='',descr='',value='';
					var predefinedVardef=findVardef(name);
					if(predefinedVardef){
						scope=predefinedVardef.get('scope');
						descr=predefinedVardef.get('descr');
						value=predefinedVardef.get('value');
					}
    				if(innerParts[1] == "String" || innerParts[1] == "Integer" || innerParts[1] == "Boolean" || innerParts[1] == "Float") {
    					vardefs.add(new VarDef({
                            name: name,
                            stype: innerParts[1],
                            ctype: '',
							scope: scope,
							descr: descr,
							value: value
                        }));
    				} else {
    					if(innerParts[1] != "Object") {
    						vardefs.add(new VarDef({
                                name: name,
                                stype: 'Object',
                                ctype: innerParts[1],
								scope: scope,
								descr: descr,
								value: value
                            }));
    					} else {
    						vardefs.add(new VarDef({
                                name: name,
                                stype: innerParts[1],
                                ctype: '',
								scope: scope,
								descr: descr,
								value: value
                            }));
    					}
    				}
    			} else {
					var name=nextPart,scope='',descr='',value='';
					var predefinedVardef=findVardef(name);
					if(predefinedVardef){
						scope=predefinedVardef.get('scope');
						value=predefinedVardef.get('value');
					}
    				vardefs.add(new VarDef({
                        name: name,
                        stype: '',
                        ctype: '',
						scope: scope,
						descr: descr,
						value: value
                    }));
    			}
    		}

    	}

    	var itemDeleter = new Extensive.grid.ItemDeleter();

    	var gridId = Ext.id();
    	Ext.form.VTypes["inputNameVal"] = /^[a-z0-9 \-\.\_]*$/i;
        Ext.form.VTypes["inputNameText"] = 'Invalid name';
        Ext.form.VTypes["inputName"] = function(v){
        	return Ext.form.VTypes["inputNameVal"].test(v);
        };
		
		var columnModel=new Ext.grid.ColumnModel([new Ext.grid.RowNumberer(), {
            	id: 'name',
                header: ORYX.I18N.PropertyWindow.Editor.Name,
                width: 100,
                dataIndex: 'name',
                editor: new Ext.form.TextField({ allowBlank: true, vtype: 'inputName', regex: /^[a-z0-9 \-\.\_]*$/i }),
                renderer: Ext.util.Format.htmlEncode
            }, {
            	id: 'stype',
                header: ORYX.I18N.PropertyWindow.Editor.StandardType,
                width: 80,
                dataIndex: 'stype',
                editor: new Ext.form.ComboBox({
                	id: 'typeCombo',
                	valueField:'name',
                	displayField:'value',
                	labelStyle:'display:none',
                	submitValue : true,
                	typeAhead: false,
                	queryMode: 'local',
                	mode: 'local',
					triggerAction: 'all',
					selectOnFocus:true,
					hideTrigger: false,
					forceSelection: false,
					selectOnFocus:true,
					autoSelect:false,
					store: new Ext.data.SimpleStore({
				        fields: [
				                  'name',
				                  'value'
				                ],
				        data: this._typesData
				    })
                }),
				renderer: function(type){
					var types=this._typesData;
					for(var i=0;i<types.length;i++){
						if(types[i][0]===type){
							return types[i][1];
						}
					}
					return type;
				}.bind(this)
            },{
            	id: 'scope',
                header: ORYX.I18N.PropertyWindow.Editor.VardefSource,
                width: 80,
                dataIndex: 'scope',
                renderer: this.renderer.bind(this)
            },{
            	id: 'descr',
                header: ORYX.I18N.PropertyWindow.Editor.VardefDescription,
                width: 140,
                dataIndex: 'descr',
                renderer: this.renderer.bind(this)
            },{
            	id: 'value',
                header: ORYX.I18N.PropertyWindow.Editor.VardefValue,
                width: 160,
                dataIndex: 'value',
                renderer: this.renderer.bind(this)
            }, itemDeleter]
		);
		
    	var grid = this.vardefsGrid = new Ext.grid.EditorGridPanel({
            autoScroll: true,
            autoHeight: true,
            store: vardefs,
            id: gridId,
            stripeRows: true,
			autoExpandColumn: "value",
            cm: columnModel,
    		selModel: itemDeleter,
            autoHeight: true,
            tbar: function buildGridTbar(){
					var addButton={
							text: this.addButtonLabel,
							handler : function(){
								if(this.single && vardefs.getCount() > 0) {
									Ext.Msg.alert(ORYX.I18N.PropertyWindow.Editor.OnlySingleEntryAllowed);
								} else {
									vardefs.add(new VarDef({
										name: '',
										stype: 'String',
										ctype: '',
										scope: '',
										descr: '',
										value: ''
									}));
									grid.fireEvent('cellclick', grid, vardefs.getCount()-1, 1, null);
								}
							}.bind(this)
						};
					
					var tbarConfig=[addButton];
					if(this.tbarConfigCallback && typeof this.tbarConfigCallback === 'function'){
						tbarConfig=this.tbarConfigCallback();
						tbarConfig.unshift(addButton);
					}
					return tbarConfig;
				}.call(this),
            clicksToEdit: 1
        });
		
		var dialog = new Ext.Window({
			layout		: 'anchor',
			autoCreate	: true,
			title		: this.windowTitle,
			height		: 300,
			width		: 640,
			y			: ORYX.CONFIG.EXT_WINDOW_Y,
			modal		: true,
			collapsible	: false,
			fixedcenter	: true,
			shadow		: true,
			resizable   : true,
			proxyDrag	: true,
			autoScroll  : true,
			keys:[{
				key	: 27,
				fn	: function(){
						dialog.hide()
				}.bind(this)
			}],
			items		:[grid],
			listeners	:{
				hide: function(){
					this.fireEvent('dialogClosed', this.value);
					//this.focus.defer(10, this);
					dialog.destroy();
				}.bind(this)
			},
			buttons		: [{
                text: ORYX.I18N.PropertyWindow.ok,
                handler: function(){
                	var outValue = "";
                	grid.stopEditing();
                	grid.getView().refresh();
                	vardefs.data.each(function() {
                		if(this.data['name'].length > 0) {
                			if(this.data['stype'].length > 0) {
                				if(this.data['stype'] == "Object" && this.data['ctype'].length > 0) {
                					outValue += this.data['name'] + ":" + this.data['ctype'] + ",";
                				} else {
                					outValue += this.data['name'] + ":" + this.data['stype'] + ",";
                				}
                			} else if(this.data['ctype'].length > 0) {
                				outValue += this.data['name'] + ":" + this.data['ctype'] + ",";
                			} else {
                				outValue += this.data['name'] + ",";
                			}
                		}
                    });
                	if(outValue.length > 0) {
                		outValue = outValue.slice(0, -1);
                	}
					this.setValue(outValue);
					this.dataSource.getAt(this.row).set('value', outValue);
					this.dataSource.commitChanges();

					dialog.hide();
                }.bind(this)
            }, {
                text: ORYX.I18N.PropertyWindow.cancel,
                handler: function(){
					this.setValue(this.value);
                	dialog.hide();
                }.bind(this)
            }]
		});

		dialog.show();
		grid.render();

		this.grid.stopEditing();
		grid.focus( false, 100 );
	},

	buildNameTypeTooltip : function(tf,key){
		return function(){
			var recordIndex=this.dataSource.findBy(function(record){
				return record.get('gridProperties').propId==key;
			});
			if(recordIndex==-1)return null;
			var targetRecord=this.dataSource.getAt(recordIndex);
			var value=targetRecord.get('value');
			if(value && value.length > 0) {
				var valueSeparator=tf.valueSeparator||',';
				value=value.replace(/\:/g,' ');
				var parts = value.split(valueSeparator);
				return parts.join('&#10;');
			}else{
				return null;
			}
		}.bind(this);
	}
	
});

Ext.form.VardefEditor = Ext.extend(Ext.form.ExtendedVardefField,  {
	 tbarConfigCallback : function(){
		return [{
			text: ORYX.I18N.PropertyWindow.Editor.LoadVardefs,
			handler : function(){
				var vardefDataStore=this.vardefsGrid.store;
				if(!this.predefinedVardefs){
					this.predefinedVardefs=ORYX.getBussinessDataLoader().loadVardefs();
				}
				var vardefs=this.predefinedVardefs;
				if(vardefs){
					function putVardefs() {
						vardefs.each(function (record) {
							var key = record.get('key');
							var idx = vardefDataStore.findBy(function (r) {
									return r.get('name') == key;
								});
							if (idx == -1) {
								vardefDataStore.add(new this.VarDef({
										name : key,
										stype : record.get('type'),
										ctype : '',
										scope : record.get('scope'),
										descr : record.get('descr'),
										value : record.get('value')
									}));
							}
						}.bind(this));
					}
					if(vardefs.getCount()>0){
						putVardefs.call(this);
					}else{
						vardefs.on('load', putVardefs.bind(this));
					}
				}else{
					Ext.Msg.alert('',ORYX.I18N.PropertyWindow.Editor.NoVardefs);
					return;
				}
			}.bind(this)
		},{
			text: ORYX.I18N.PropertyWindow.Editor.ClearVardefs,
			handler : function(){
				this.vardefsGrid.store.removeAll();
			}.bind(this)
		}];
	}
});

ORYX.Plugins.VardefExpressionEditor.VardefEditorFactory = Clazz.extend({
    construct: function(){
    },
    init: function(){
		ORYX.Log.debug("init VardefEditor");
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        var tf = new Ext.form.VardefEditor({
				allowBlank: pair.optional(),
				dataSource:this.dataSource,
				grid:this.grid,
				row:index,
				facade:this.facade,
				autoCreate : false
        });
		tf.on('dialogClosed', this.dialogClosed2, {scope:this, row:index, col:1, field:tf});
		
		var editor=new Ext.Editor(tf)
		editor.valueTooltip=tf.buildNameTypeTooltip(tf,key);
		
		return editor;
    }
});


/* NameMappingDataAssignment */

Ext.form.NameMappingDataAssignmentField = Ext.extend(Ext.form.ComplexDataAssignmenField, {
	 tbarConfigCallback : function(){
		
		return [{
			text: '映射同名（变量 => 输入）',
			handler : function(){
				var vnm=this.varNamesMap;
				this.assignByName.call(this,vnm.processVars,vnm.dataInputs);
			}.bind(this)
		},
		{
			text: '映射同名（输出 => 变量）',
			handler : function(){
				var vnm=this.varNamesMap;
				this.assignByName.call(this,vnm.dataOutputs,vnm.processVars);
			}.bind(this)
		}];
    }
});

ORYX.Plugins.VardefExpressionEditor.DataAssignmentEditorFactory = Clazz.extend({

    construct: function(){
    },
	
    init: function(){
		ORYX.Log.debug("init DataAssignmentEditor");
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        var tf = new Ext.form.NameMappingDataAssignmentField({
				allowBlank: pair.optional(),
				dataSource:this.dataSource,
				grid:this.grid,
				row:index,
				facade:this.facade,
				autoCreate : false
        });
		tf.on('dialogClosed', this.dialogClosed2, {scope:this, row:index, col:1, field:tf});
		
		var editor=new Ext.Editor(tf)
		editor.valueTooltip=tf.buildAssignmentTooltip(tf,key);
		
		return editor;
    }
});

/* */

Ext.form.InputDataAssignmentField = Ext.extend(Ext.form.ComplexDataAssignmenField, {
	windowTitle: ORYX.I18N.PropertyWindow.Editor.ForInputAssignments,
	assignTarget: 'input',
	
	tbarConfigCallback : function(){
		
		return [{
			text: ORYX.I18N.PropertyWindow.Editor.MappingVariables,
			handler : function(){
				var vnm=this.varNamesMap;
				this.assignByName.call(this,vnm.processVars,vnm.dataInputs);
			}.bind(this)
		}];
    }
});

ORYX.Plugins.VardefExpressionEditor.InputDataAssignmentEditorFactory = Clazz.extend({

    construct: function(){
    },
	
    init: function(){
		ORYX.Log.debug("init InputDataAssignmentEditor");
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        var tf = new Ext.form.InputDataAssignmentField({
				allowBlank: pair.optional(),
				dataSource:this.dataSource,
				grid:this.grid,
				row:index,
				facade:this.facade,
				autoCreate : false
        });
		tf.on('dialogClosed', this.dialogClosed2, {scope:this, row:index, col:1, field:tf});
		
		var editor=new Ext.Editor(tf)
		editor.valueTooltip=tf.buildAssignmentTooltip(tf,key);
		
		return editor;
    }
});

/* */

Ext.form.OutputDataAssignmentField = Ext.extend(Ext.form.ComplexDataAssignmenField, {
	windowTitle: ORYX.I18N.PropertyWindow.Editor.ForOutputAssignments,
	assignTarget: 'output',
	
	tbarConfigCallback : function(){
		
		return [{
			text: ORYX.I18N.PropertyWindow.Editor.MappingVariables,
			handler : function(){
				var vnm=this.varNamesMap;
				this.assignByName.call(this,vnm.dataOutputs,vnm.processVars);
			}.bind(this)
		}];
    }
});

ORYX.Plugins.VardefExpressionEditor.OutputDataAssignmentEditorFactory = Clazz.extend({

    construct: function(){
    },
	
    init: function(){
		ORYX.Log.debug("init OutputDataAssignmentEditor");
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        var tf = new Ext.form.OutputDataAssignmentField({
				allowBlank: pair.optional(),
				dataSource:this.dataSource,
				grid:this.grid,
				row:index,
				facade:this.facade,
				autoCreate : false
        });
		tf.on('dialogClosed', this.dialogClosed2, {scope:this, row:index, col:1, field:tf});
		
		var editor=new Ext.Editor(tf)
		editor.valueTooltip=tf.buildAssignmentTooltip(tf,key);
		
		return editor;
    }
});
