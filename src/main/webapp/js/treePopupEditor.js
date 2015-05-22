
Ext.form.TreePopupEditor = Ext.extend(Ext.form.TriggerField, {
	triggerClass : 'x-form-dictionary-trigger',
    //readOnly: true,
	dataSource: [],
    value: '',
    valueField: 'id',
    displayField: 'name',
	parentField: 'parentId',
	isLeafField: 'isLeaf',
	allowNonLeaf: false,
	nonLeafTip: '请选择叶子节点',

    initComponent: function() {
        Ext.form.TreePopupEditor.superclass.initComponent.call(this);
    },

	onTriggerClick : function(){

		if(this.disabled){
			return;
		}
		
		var triggerField=this;

		this.rootNode = new Ext.tree.TreeNode({
			
		});
		
		var treePanel;
		treePanel= new Ext.tree.TreePanel({
            //cls:'',
			loader: new Ext.tree.TreeLoader(),
			root: this.rootNode,
			autoScroll:true,
			rootVisible: false,
			lines: false,
			anchors: '0, -30',
            tbar: [{
					text: '全部展开',
					handler : function(){
						treePanel.expandAll();
					}
				},{
					text: '全部收起',
					handler : function(){
						treePanel.collapseAll();
					}
				}]
		});
		
		treePanel.on("dblclick", function(){
				var selModel=treePanel.getSelectionModel();
				var node=selModel.getSelectedNode();
				if(node){
					if(!this.allowNonLeaf && !node.isLeaf()){
						return false;
					}
					this.setValue(node.attributes[this.valueField]);
				}
				dialog.hide();
			}.bind(this), this);
		
		var dialog = new Ext.Window({
			layout		: 'anchor',
			autoCreate	: true,
			title		: this.windowTitle,
			height		: 250,
			width		: 350,
			y			: ORYX.CONFIG.EXT_WINDOW_Y,
			modal		: true,
			collapsible	: false,
			fixedcenter	: true,
			shadow		: true,
			resizable   : true,
			proxyDrag	: true,
			autoScroll  : true,
			items		:[treePanel],
			listeners	:{
				hide: function(){
					this.fireEvent('dialogClosed', this.value);
					dialog.destroy();
				}.bind(this)
			},
			buttons		: [{
				text: ORYX.I18N.PropertyWindow.ok,
				handler: function(){
					var selModel=treePanel.getSelectionModel();
					var node=selModel.getSelectedNode();
					if(node){
						if(!this.allowNonLeaf && !node.isLeaf()){
							alert(this.nonLeafTip);
							return false;
						}
						this.setValue(node.attributes[this.valueField]);
					}
					dialog.hide();
				}.bind(this)
			}, {
				text: ORYX.I18N.PropertyWindow.cancel,
				handler: function(){
					//this.setValue(this.value);
					dialog.hide();
				}.bind(this)
			}]
		});

		dialog.show();
		
		
		var buildTree=function(){
			
			var nodesMap={};
			
			this.dataSource.each(function(record) {
				var nodeData = record.data;
				var id=nodeData[this.valueField];
				var isLeaf=nodeData[this.isLeafField];
				
				nodesMap[id]=new Ext.tree.TreeNode({
					//id: nodeData[this.valueField],
					text: nodeData[this.displayField],
					leaf: isLeaf===true||isLeaf==='true',
					//expanded:true,
					//iconCls:'',
					cls:''
				});
				
				nodesMap[id].attributes=nodeData;
			}.bind(this));
			
			var nodesPaentMap={};
			
			this.dataSource.each(function(record) {
				var nodeData = record.data;
				var id=nodeData[this.valueField];
				var parentId=nodeData[this.parentField];
				
				if(parentId){
					var parentNode=nodesMap[parentId];
					if(parentNode){
						nodesPaentMap[id]=parentNode;
					}
				}
				
			}.bind(this));
			
		
			var nodeToSelect;
			
			this.dataSource.each(function(record) {
				var nodeData = record.data;
				var id=nodeData[this.valueField];
				
				var node=nodesMap[id];
				var parentNode=nodesPaentMap[id]||this.rootNode;
				
				parentNode.appendChild(node);
				
				if(this.value && node.isLeaf() && nodeData[this.valueField]==this.value){
					nodeToSelect=node;
				}
			}.bind(this));
			
			if(nodeToSelect) {
				nodeToSelect.ensureVisible();
				nodeToSelect.select();
			}
		};
		
		if(this.dataSource){
			if(this.dataSource.getCount()>0){
				buildTree.call(this);
			}else{
				this.dataSource.on('load', buildTree.bind(this));
			}
		}
	}
});