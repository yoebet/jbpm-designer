if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();

ORYX.Plugins.BussinessDataMockLoader = Clazz.extend({
    
    construct: function(facade){
		ORYX.Log.debug("construct BussinessDataMockLoader");
        this.facade = facade;
		
		this.bussinessDataCache={};
	},
	
	/** 办理人 */
	setupActorsDataStore: function(){

		if(this.bussinessDataCache['Actors']){
			return dataSource=this.bussinessDataCache['Actors'];
		}
		
		var ActorsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "root",
				id: "id"
			}, ActorsDef);
		
		var udata={
			root:[
				{id:'liubaoxi', name: '刘宝玺'},
				{id:'wangxiwei', name: '王熙伟'},
				{id:'zhaoxudong', name: '赵旭东'},
				{id:'wushexu', name: '吴滠栩'},
				{id:'lujinxinag', name: '路金香'}
			]
		};
		var actorsProxy = new Ext.data.MemoryProxy(udata);

		var dataSource = new Ext.data.Store({
			proxy: actorsProxy,
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
			return dataSource=this.bussinessDataCache[key];
		}
		
		var ActorsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "root",
				id: "id"
			}, ActorsDef);
		
		var udata={};
		if(businessFormId=='s1_01'||businessFormId=='xt_02'){
			udata.root=[
				{id:'liubaoxi', name: '刘宝玺'},
				{id:'wangxiwei', name: '王熙伟'}
			];
		}else{
			udata.root=[
				{id:'zhaoxudong', name: '赵旭东'},
				{id:'wushexu', name: '吴滠栩'},
				{id:'lujinxinag', name: '路金香'}
			];
		}
		
		var actorsProxy;
		if(businessFormId){
			actorsProxy = new Ext.data.MemoryProxy(udata);
		}else{
			actorsProxy = new Ext.data.MemoryProxy();
		}

		var dataSource = new Ext.data.Store({
			proxy: actorsProxy,
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache[key]=dataSource;
		return dataSource;
	},

	/** 用户组 */
	setupGroupsDataStore: function(){

		if(this.bussinessDataCache['Groups']){
			return dataSource=this.bussinessDataCache['Groups'];
		}
		
		var GroupsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "root",
				id: "id"
			}, GroupsDef);
		
		var udata={
			root:[
				{id:'jwcw', name: '计划财务'},
				{id:'xxkj', name: '信息科技'},
				{id:'xtxm', name: '信托项目'},
				{id:'gsyw', name: '公司业务'}
			]
		};
		var groupsProxy = new Ext.data.MemoryProxy(udata);

		var dataSource = new Ext.data.Store({
			proxy: groupsProxy,
			reader: jreader
		});
		dataSource.load();
		
		this.bussinessDataCache['Groups']=dataSource;
		return dataSource;
	},

	/** 用户组（按表单） */
	loadGroupsDataStore: function(businessFormId){

		var key='GroupsByBusinessForm'+businessFormId;
		if(this.bussinessDataCache[key]){
			return dataSource=this.bussinessDataCache[key];
		}
		
		var GroupsDef = Ext.data.Record.create([
			{name:'id'},
			{name:'name'}
		]);
		
		var jreader=new Ext.data.JsonReader({
				root: "root",
				id: "id"
			}, GroupsDef);
		
		var udata={ };
		if(businessFormId=='s1_01'||businessFormId=='xt_02'){
			udata.root=[
				{id:'xtxm', name: '信托项目'},
				{id:'gsyw', name: '公司业务'}
			];
		}else{
			udata.root=[
				{id:'jwcw', name: '计划财务'},
				{id:'xxkj', name: '信息科技'}
			];
		}
		var groupsProxy;
		if(businessFormId){
			groupsProxy = new Ext.data.MemoryProxy(udata);
		}else{
			groupsProxy = new Ext.data.MemoryProxy();
		}

		var dataSource = new Ext.data.Store({
			proxy: groupsProxy,
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
		
		var udata={
			root:[
				{id:'s1_01', name: '提交材料'},
				{id:'xt_02', name: '信用调查'},
				{id:'jn_02', name: '额度确认'},
				{id:'js_01', name: '经理审批'},
				{id:'zf_01', name: '主管复核'}
			]
		};
		
		var options=udata.root.collect(function(res) {
			return [res.id, res.name, res.icon];
		});

		var dataSource = new Ext.data.SimpleStore({
			fields: [{name: 'id'},
					 {name: 'name'},
					 {name: 'icon'}
					 ],
					 data : options
		});

		this.bussinessDataCache['BussinessRes']=dataSource;
		return dataSource;
	},

	/** 业务资源树 */
	loadBussinessResTree: function(){

		if(this.bussinessDataCache['BussinessResTree']){
			return this.bussinessDataCache['BussinessResTree'];
		}
		
		var udata={
			root:[
				{id:'lr', name: '录入'},
				{id:'s1_01', name: '提交材料', parentId: 'lr', isLeaf: true},
				{id:'xt_02', name: '信用调查', parentId: 'lr', isLeaf: true},
				{id:'sp', name: '审批'},
				{id:'js_01', name: '经理审批', parentId: 'sp', isLeaf: true},
				{id:'zf_01', name: '主管复核', parentId: 'sp', isLeaf: true}
			]
		};
		
		var options=udata.root.collect(function(res) {
			return [res.id, res.name, res.parentId, res.isLeaf];
		});

		var dataSource = new Ext.data.SimpleStore({
			fields: [{name: 'id'},
					 {name: 'name'},
					 {name: 'parentId'},
					 {name: 'isLeaf'}
					 ],
					 data : options
		});

		this.bussinessDataCache['BussinessResTree']=dataSource;
		return dataSource;
	},

	/** 业务资源字段 */
	loadBussinessResFields: function(resId){
		var resFields=this.bussinessDataCache['resFields'];
		if(!resFields){
			resFields=this.bussinessDataCache['resFields']={};
		}else if(resFields[resId]){
			return resFields[resId];
		}
		
		var resFieldsData={
			s1_01: [
				{name:'actorName',type:'String'},
				{name:'approved',type:'Boolean'},
				{name:'rank',type:'Integer'}
				],
			xt_02: [
				{name:'appName',type:'String'},
				{name:'zsCount',type:'Integer'},
				{name:'xxx2',type:'Integer'},
				{name:'wsx',type:'Boolean'}
				],
			js_01: [
				{name:'group',type:'String'},
				{name:'rl',type:'Integer'},
				{name:'wy',type:'Integer'}
				]
		};
		
		var fields=resFieldsData[resId]||resFieldsData['js_01'];
		
		var dataSource = new Ext.data.Store({
			proxy: new Ext.data.MemoryProxy(fields),
			reader : new Ext.data.JsonReader({
					id : "name"
				}, 
				Ext.data.Record.create([
					 {name:'name'},
					 {name:'type'},
					 {name:'descr'}
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
		
		var udata={
			root: [
				['wy','Integer','global','',1],
				['group','String','global','分组','jhcw'],
				['approved','Boolean','package x','批准',true],
				['zsCount','Integer','package x.y','zs count',20],
				['actorName','String','process z@x.y','','mzddsb'],
				['rank','Integer','process z_v2.0@x.y','','0']
			]
		};

		var dataSource = new Ext.data.SimpleStore({
			fields: [{name: 'key'},
					 {name: 'type'},
					 {name: 'scope'},
					 {name: 'descr'},
					 {name: 'value'}
					],
					data : udata.root
		});
		
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
    	
    	var calldefsProxy = new Ext.data.MemoryProxy({
            root: [
				{
					name:'yy.s1',
					version:'1'
				},{
					name:'yy.spl',
					version:'2'
				},{
					name:'yy.con',
					version:'1'
				}
			]
        });
    	
    	var dataSource = new Ext.data.Store({
    		autoDestroy: true,
            reader: new Ext.data.JsonReader({
                root: "root"
            }, CallElementDef),
            proxy: calldefsProxy,
            sorters: [{
                property: 'name',
                direction:'ASC'
            }]
        });
    	dataSource.load();
		
		this.bussinessDataCache['PublishedProcesses']=dataSource;
		return dataSource;
	}
	
});


ORYX.getBussinessDataLoader=function(){
	if(!ORYX.BussinessDataLoader){
		ORYX.BussinessDataLoader=new ORYX.Plugins.BussinessDataMockLoader();
	}
	return ORYX.BussinessDataLoader;
}
