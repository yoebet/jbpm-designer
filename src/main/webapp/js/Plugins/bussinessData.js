if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();

ORYX.Plugins.BussinessDataLoader = Clazz.extend({
    
    construct: function(facade){
		ORYX.Log.debug("construct BussinessDataLoader");
        this.facade = facade;
	
		this.bussinessDataCache={};
		
		var basePath = ORYX.CONFIG.KOALA_CORE_BASE+'ws/';
		this.resourcePaths = {
			actors: basePath + 'businessResourceService/businessResourceApplication/getCustomerUser',
			actorsByBussiness: basePath + 'businessResourceService/businessResourceApplication/getUsersByBussiness',
			groups: basePath + 'businessResourceService/businessResourceApplication/getCustomerGroups',
			groupsByBussiness: basePath + 'businessResourceService/businessResourceApplication/getGroupsByBussiness',
			business: basePath + 'businessResourceService/businessResourceApplication/getBusinessBySid',
			businessTree: basePath + 'businessResourceService/businessResourceApplication/getBusinessTreeBySid',
			busFields: basePath + 'businessResourceService/businessResourceApplication/getFieldsByBid',
			publishedProcesses: basePath + 'businessResourceService/businessResourceApplication/getPublishedProcesses',
			vardefs: basePath + 'koalaJbpmVariableService/koalaJbpmVariableApplication/getProcessPackageGlobalVariable'
		};
		this.systemId = ORYX.BusinessSystemID;
		
		ORYX.BussinessDataLoader=this;
		var bdl=this, L=ORYX.Log;
		try{bdl.loadVardefs();}catch(e){L.debug("loadVardefs failed",e);}
		try{bdl.loadBussinessRes();}catch(e){L.debug("loadBussinessRes failed",e);}
		try{bdl.setupActorsDataStore();}catch(e){L.debug("setupActorsDataStore failed",e);}
		try{bdl.setupGroupsDataStore();}catch(e){L.debug("setupGroupsDataStore failed",e);}
	},
	
	/** 办理人 */
	setupActorsDataStore: function(){

		if(this.bussinessDataCache['Actors']){
			return this.bussinessDataCache['Actors'];
		}
		
		var actorsProxy = new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.actors
		});

		var ActorsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "data",
				id: "id"
			}, ActorsDef);
		var dataSource = new Ext.data.Store({
			proxy: actorsProxy,
			baseParams : {
				sid : this.systemId
			},
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache['Actors']=dataSource;
		return dataSource;
	},
	
	/** 办理人（按表单） */
	loadActorsDataStore: function(businessFormId){

		var key='ActorsByBusinessForm'+businessFormId;
		if(this.bussinessDataCache[key]){
			return this.bussinessDataCache[key];
		}
		
		var actorsProxy;

		if(businessFormId){
			actorsProxy = new Ext.data.ScriptTagProxy({
					url: this.resourcePaths.actorsByBussiness
			});
		}else{
			actorsProxy = new Ext.data.MemoryProxy();
		}

		var ActorsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "data",
				id: "id"
			}, ActorsDef);
		var dataSource = new Ext.data.Store({
			proxy: actorsProxy,
			baseParams : {
				sid : this.systemId,
				bid : businessFormId
			},
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache[key]=dataSource;
		return dataSource;
	},

	/** 用户组 */
	setupGroupsDataStore: function(){

		if(this.bussinessDataCache['Groups']){
			return this.bussinessDataCache['Groups'];
		}
		var groupsProxy = new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.groups
		});
		var GroupsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "data",
				id: "id"
			}, GroupsDef);
		var dataSource = new Ext.data.Store({
			proxy: groupsProxy,
			baseParams : {
				sid : this.systemId
			},
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache['Groups']=dataSource;
	},

	/** 用户组（按表单） */
	loadGroupsDataStore: function(businessFormId){

		var key='GroupsByBusinessForm'+businessFormId;
		if(this.bussinessDataCache[key]){
			return dataSource=this.bussinessDataCache[key];
		}
		
		var groupsProxy;

		if(businessFormId){
			groupsProxy = new Ext.data.ScriptTagProxy({
					url: this.resourcePaths.groupsByBussiness
			});
		}else{
			groupsProxy = new Ext.data.MemoryProxy();
		}
		
		var GroupsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "data",
				id: "id"
			}, GroupsDef);
		var dataSource = new Ext.data.Store({
			proxy: groupsProxy,
			baseParams : {
				sid : this.systemId,
				bid : businessFormId
			},
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache[key]=dataSource;
		return dataSource;
	},

	/** 业务资源 */
	loadBussinessRes: function(){

		if(this.bussinessDataCache['BussinessRes']){
			return this.bussinessDataCache['BussinessRes'];
		}
		
		var VarDef = Ext.data.Record.create([
				{name: 'id'}, {name: 'name', mapping:'resourceName'}, {name: 'icon'}
			]);
		var dataSource = new Ext.data.Store({
			proxy: new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.business
			}),
			baseParams : {
				sid : this.systemId
			},
			reader : new Ext.data.JsonReader({
				root : "data",
				id : "id"
			},
			VarDef)
		});
		dataSource.load();
		this.bussinessDataCache['BussinessRes']=dataSource;
		return dataSource;
	},

	/** 业务资源树 */
	loadBussinessResTree: function(){

		if(this.bussinessDataCache['BussinessResTree']){
			return this.bussinessDataCache['BussinessResTree'];
		}
		
		var VarDef = Ext.data.Record.create([
				{name: 'id'}, {name: 'name', mapping:'resourceName'}, 
				{name: 'parentId'}, {name: 'isLeaf'}
			]);
		var dataSource = new Ext.data.Store({
			proxy: new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.businessTree
			}),
			baseParams : {
				sid : this.systemId
			},
			reader : new Ext.data.JsonReader({
				root : "data",
				id : "id"
			},
			VarDef)
		});
		dataSource.load();
		this.bussinessDataCache['BussinessResTree']=dataSource;
		return dataSource;
	},

	/** 业务资源字段 */
	loadBussinessResFields: function(resId){
		
		var resFields=this.bussinessDataCache['resFields'];
		if(!resFields){
			resFields=this.bussinessDataCache['resFields']={};
		}else{
			if(resFields[resId]){
				return resFields[resId];
			}
		}
		
		var dataSource = new Ext.data.Store({
			proxy: new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.busFields
			}),
			baseParams : {
				bid : resId
			},
			reader : new Ext.data.JsonReader({
					root : "data",
					id : "name"
				}, 
				Ext.data.Record.create([
					{name:'name'},
					{name:'type', mapping:'dataType'},
					{name:'descr', mapping:'description'}
				])
			)
		});

		dataSource.load();
		
		resFields[resId]=dataSource;
		return dataSource;
	},

	/** 变量定义 */
	loadVardefs: function(){

		if(this.bussinessDataCache['Vardefs']){
			return this.bussinessDataCache['Vardefs'];
		}
		
		var fields=[
				{name: 'key'},
				{name: 'type'},
				{name: 'scope'},
				{name: 'descr', mapping:'description'},
				{name: 'value'}
			];
		
		var processJSON = ORYX.EDITOR.getSerializedJSON().evalJSON();
		var packageName = jsonPath(processJSON, "$.properties.package");
		var processName = jsonPath(processJSON, "$.properties.name");
		
		var dataSource = new Ext.data.Store({
			proxy: new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.vardefs
			}),
			baseParams : {
				sid : this.systemId,
				packageName : packageName,
				processDefineName : packageName + "." + processName
			},
			reader : new Ext.data.JsonReader({
					root : "data",
					id : "id"
				}, 
				Ext.data.Record.create(fields)
			)
		});

		dataSource.load();
		
		this.bussinessDataCache['Vardefs']=dataSource;
		return dataSource;
	},
	
	/** 已发布流程 */
	loadPublishedProcesses: function(){

		if(this.bussinessDataCache['PublishedProcesses']){
			return this.bussinessDataCache['PublishedProcesses'];
		}
		
        var CallElementDef = Ext.data.Record.create([{
            name: 'name'
        }, {
        	name: 'version'
        }, {
            name: 'imgsrc'
        }]);
    	
    	var dataSource = new Ext.data.Store({
			proxy: new Ext.data.ScriptTagProxy({
				url: this.resourcePaths.publishedProcesses
			}),
			baseParams : {
				sid : this.systemId
			},
            reader: new Ext.data.JsonReader({
                root: "data"
            }, CallElementDef)
        });
    	dataSource.load();
		
		this.bussinessDataCache['PublishedProcesses']=dataSource;
		return dataSource;
	}
});

ORYX.getBussinessDataLoader=function(){
	if(!ORYX.BussinessDataLoader){
		ORYX.BussinessDataLoader=new ORYX.Plugins.BussinessDataLoader();
	}
	return ORYX.BussinessDataLoader;
}
