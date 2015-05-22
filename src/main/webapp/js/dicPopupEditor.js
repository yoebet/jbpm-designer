
Ext.form.DicPopupEditor = Ext.extend(Ext.form.TriggerField, {
	triggerClass : 'x-form-dictionary-trigger',
    //readOnly: true,
	dataSource: [],
	dataSourceCallback: null,
    value: '',
    valueSeparator: ',',
    displaySeparator: ', ',
    valueField: 'id',
    displayField: 'name',

    initComponent: function() {
        Ext.form.DicPopupEditor.superclass.initComponent.call(this);
    },

	/*
    setValue: function(value, text) {
		this.text="";
		if(value && value.length > 0) {
			var texta=[];
			var ids = value.split(this.valueSeparator);
			var triggerField=this;
			this.dataSource.each(function(record){
				if(ids.indexOf(record.get(triggerField.valueField))>=0){
					texta.push(record.get(triggerField.displayField));
				}
			})
			this.text=texta.join(this.displaySeparator);
		}
        Ext.form.DicPopupEditor.superclass.setValue.call(this, value);
    },
	
    getText: function() {
		return this.text;
	},*/
	
	onTriggerClick : function(){

		if(this.disabled){
			return;
		}
		
		if(this.dataSourceCallback){
			this.dataSource=this.dataSourceCallback();
			if(!this.dataSource){
				return;
			}
		}
		
		var triggerField=this;
		
		this.selectionModel=new Ext.grid.CheckboxSelectionModel({singleSelect:false});
		
		var igrid = new Ext.grid.GridPanel({
			store: this.dataSource,
			cm: this.columnModel,
			sm: this.selectionModel,
			viewConfig: {
				forceFit:true
			},
			autoHeight:true,
			frame:false,
			border:false,
			iconCls:'icon-grid'
		});
		
		var dialog = new Ext.Window({
			layout		: 'anchor',
			autoCreate	: true,
			title		: this.windowTitle,
			height		: 250,
			width		: 300,
			modal		: true,
			collapsible	: false,
			fixedcenter	: true,
			shadow		: true,
			resizable   : true,
			proxyDrag	: true,
			autoScroll  : true,
			items		:[igrid],
			listeners	:{
				hide: function(){
					this.fireEvent('dialogClosed', this.value);
					dialog.destroy();
				}.bind(this)
			},
			buttons		: [{
				text: ORYX.I18N.PropertyWindow.ok,
				handler: function(){
					igrid.stopEditing();
					igrid.getView().refresh();
					var outvalue='';
					var selModel=igrid.getSelectionModel();
					var records=selModel.getSelections();
					if(records){
						var ids=records.collect(function(record){
							return record.get(triggerField.valueField);
						})
						outvalue=ids.join(triggerField.valueSeparator);
					}
					this.setValue(outvalue);
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
		
		if(this.value && this.value.length > 0) {
			var current_records=[];
			var ids = this.value.split(this.valueSeparator);
			this.dataSource.each(function(record){
				if(ids.indexOf(record.get(triggerField.valueField))>=0){
					current_records.push(record);
				}
			});
			var selModel=igrid.getSelectionModel();
			selModel.selectRecords(current_records,false);
		}
	}
});
