/**
 * @author nicolas.peters
 * 
 * Contains all strings for the default language (en-us).
 * Version 1 - 08/29/08
 */
if(!ORYX) var ORYX = {};

if(!ORYX.I18N) ORYX.I18N = {};

ORYX.I18N.Language = "zh_cn"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!ORYX.I18N.Oryx) ORYX.I18N.Oryx = {};

ORYX.I18N.Oryx.title		= ORYX.TITLE;
ORYX.I18N.Oryx.noBackendDefined	= "注意！\n没有定义后端。\n请求的模型不能被加载。尝试加载配置的插件";
//ORYX.I18N.Oryx.pleaseWait 	= "Please wait while loading...";
ORYX.I18N.Oryx.pleaseWait  = '<img src="/designer/images/jbpm_logo.png" align="middle"/><b>设计器正在加载. 请稍候...</b>';
ORYX.I18N.Oryx.notLoggedOn = "没有登录";
ORYX.I18N.Oryx.editorOpenTimeout = "可能是浏览器还没有开始初始化。请检查您是否已启用了弹出窗口阻止程序，并禁用它或允许弹出窗口";
ORYX.I18N.Oryx.CouldNotLoadDesigner='不能加载流程设计器';

if(!ORYX.I18N.AddDocker) ORYX.I18N.AddDocker = {};

ORYX.I18N.AddDocker.group = "元素";
ORYX.I18N.AddDocker.add = "添加元素";
ORYX.I18N.AddDocker.addDesc = "通过点击它，添加一个元素到画布，";
ORYX.I18N.AddDocker.del = "删除元素";
ORYX.I18N.AddDocker.delDesc = "删除元素";

if(!ORYX.I18N.ShapeConnector) ORYX.I18N.ShapeConnector = {};

ORYX.I18N.ShapeConnector.group = "连线";
ORYX.I18N.ShapeConnector.add = "连线";
ORYX.I18N.ShapeConnector.addDesc = "按所需顺序标记将它们连接多个节点";

if(!ORYX.I18N.SSExtensionLoader) ORYX.I18N.SSExtensionLoader = {};

ORYX.I18N.SSExtensionLoader.group = "设置模板";
ORYX.I18N.SSExtensionLoader.add = "设置模板扩展属性";
ORYX.I18N.SSExtensionLoader.addDesc = "设置模板扩展属性";
ORYX.I18N.SSExtensionLoader.loading = "加载模板扩展属性";
ORYX.I18N.SSExtensionLoader.noExt = "没有可用的扩展或所有可用的扩展已经加载.";
ORYX.I18N.SSExtensionLoader.failed1 = "加载模板扩展属性配置失败。不是一个有效的配置文件。";
ORYX.I18N.SSExtensionLoader.failed2 = "加载模板扩展属性配置失败。该请求返回一个错误。";
ORYX.I18N.SSExtensionLoader.panelTitle = "设置模板扩展属性";
ORYX.I18N.SSExtensionLoader.panelText = "选择要加载的扩展模板.";

if(!ORYX.I18N.AdHocCC) ORYX.I18N.AdHocCC = {};

ORYX.I18N.AdHocCC.group = "指定设置";
ORYX.I18N.AdHocCC.compl = "编辑完成条件";
ORYX.I18N.AdHocCC.complDesc = "编辑完成条";
ORYX.I18N.AdHocCC.notOne = "不是一个元素选择的！";
ORYX.I18N.AdHocCC.nodAdHocCC = "选定的元素没有指定完成情况";
ORYX.I18N.AdHocCC.selectTask = "选择一个任务...";
ORYX.I18N.AdHocCC.selectState = "选择一个状态...";
ORYX.I18N.AdHocCC.addExp = "添加表达式";
ORYX.I18N.AdHocCC.selectDataField = "选择一个数据字段...";
ORYX.I18N.AdHocCC.enterEqual = "输入必须等于一个值...";
ORYX.I18N.AdHocCC.and = "与";
ORYX.I18N.AdHocCC.or = "或";
ORYX.I18N.AdHocCC.not = "非";
ORYX.I18N.AdHocCC.clearCC = "清除完成情况";
ORYX.I18N.AdHocCC.editCC = "清除完成情况";
ORYX.I18N.AdHocCC.addExecState = "添加执行状态的表达: ";
ORYX.I18N.AdHocCC.addDataExp = "添加数据表达: ";
ORYX.I18N.AdHocCC.addLogOp = "添加逻辑运算符: ";
ORYX.I18N.AdHocCC.curCond = "当前完成情况: ";

if(!ORYX.I18N.AMLSupport) ORYX.I18N.AMLSupport = {};

ORYX.I18N.AMLSupport.group = "事件过程链图";
ORYX.I18N.AMLSupport.imp = "导入AML文件";
ORYX.I18N.AMLSupport.impDesc = "导入一个 Aris 7 AML 文件";
ORYX.I18N.AMLSupport.failed = "导入 AML 文件失败. 请检查, 所选的文件是一个不是一个有效的 AML 文件. 错误消息: ";
ORYX.I18N.AMLSupport.failed2 = "导入 AML 文件失败: ";
ORYX.I18N.AMLSupport.noRights = "你没有权限导入多个 EPC-图 (需登录).";
ORYX.I18N.AMLSupport.panelText = "选择一个 AML (.xml) 文件导入它.";
ORYX.I18N.AMLSupport.file = "文件";
ORYX.I18N.AMLSupport.importBtn = "导入 AML-File";
ORYX.I18N.AMLSupport.get = "得到图...";
ORYX.I18N.AMLSupport.close = "关闭";
ORYX.I18N.AMLSupport.title = "标题";
ORYX.I18N.AMLSupport.selectDiagrams = "选择一个你想导入的图. <br/> 如果一个模型被选择, 它将被导入到当前编辑器, 如果选择的多于一个模型, 这些模型将会直接存入存储库中.";
ORYX.I18N.AMLSupport.impText = "导入";
ORYX.I18N.AMLSupport.impProgress = "导入中...";
ORYX.I18N.AMLSupport.cancel = "取消";
ORYX.I18N.AMLSupport.name = "名称";
ORYX.I18N.AMLSupport.allImported = "所有导入的图.";
ORYX.I18N.AMLSupport.ok = "确定";

if(!ORYX.I18N.Arrangement) ORYX.I18N.Arrangement = {};

ORYX.I18N.Arrangement.groupZ = "Z-Order";
ORYX.I18N.Arrangement.btf = "置前";
ORYX.I18N.Arrangement.btfDesc = "置前";
ORYX.I18N.Arrangement.btb = "置后";
ORYX.I18N.Arrangement.btbDesc = "置后";
ORYX.I18N.Arrangement.bf = "向前";
ORYX.I18N.Arrangement.bfDesc = "向前";
ORYX.I18N.Arrangement.bb = "向后";
ORYX.I18N.Arrangement.bbDesc = "向后";
ORYX.I18N.Arrangement.groupA = "校准";
ORYX.I18N.Arrangement.ab = "底部对齐";
ORYX.I18N.Arrangement.abDesc = "居下";
ORYX.I18N.Arrangement.am = "中部对齐";
ORYX.I18N.Arrangement.amDesc = "垂直居中";
ORYX.I18N.Arrangement.at = "顶部对齐";
ORYX.I18N.Arrangement.atDesc = "居上";
ORYX.I18N.Arrangement.al = "左边对齐";
ORYX.I18N.Arrangement.alDesc = "居左";
ORYX.I18N.Arrangement.ac = "中间对齐";
ORYX.I18N.Arrangement.acDesc = "居中";
ORYX.I18N.Arrangement.ar = "右边对齐";
ORYX.I18N.Arrangement.arDesc = "居右";
ORYX.I18N.Arrangement.as = "校准相同大小";
ORYX.I18N.Arrangement.asDesc = "相同大小";

if(!ORYX.I18N.BPELSupport) ORYX.I18N.BPELSupport = {};

ORYX.I18N.BPELSupport.group = "BPEL";
ORYX.I18N.BPELSupport.exp = "导出 BPEL";
ORYX.I18N.BPELSupport.expDesc = "导出一个图为 BPEL";
ORYX.I18N.BPELSupport.imp = "导入 BPEL";
ORYX.I18N.BPELSupport.impDesc = "导入一个 BPEL 文件";
ORYX.I18N.BPELSupport.selectFile = "选择一个 BPEL 文件导入";
ORYX.I18N.BPELSupport.file = "文件";
ORYX.I18N.BPELSupport.impPanel = "导入 BPEL 文件";
ORYX.I18N.BPELSupport.impBtn = "导入";
ORYX.I18N.BPELSupport.content = "内容";
ORYX.I18N.BPELSupport.close = "关闭";
ORYX.I18N.BPELSupport.error = "错误";
ORYX.I18N.BPELSupport.progressImp = "导入...";
ORYX.I18N.BPELSupport.progressExp = "导出...";
ORYX.I18N.BPELSupport.impFailed = "导入时发生一个错误! <br/>请检查错误消息: <br/><br/>";

if(!ORYX.I18N.BPELLayout) ORYX.I18N.BPELLayout = {};

ORYX.I18N.BPELLayout.group = "BPEL布局";
ORYX.I18N.BPELLayout.disable = "禁用布局";
ORYX.I18N.BPELLayout.disDesc = "禁用自动布局插件";
ORYX.I18N.BPELLayout.enable = "可用的布局";
ORYX.I18N.BPELLayout.enDesc = "可用的自动布局插件";

if(!ORYX.I18N.BPEL4Chor2BPELSupport) ORYX.I18N.BPEL4Chor2BPELSupport = {};

ORYX.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4Chor2BPELSupport.exp = "导出 BPEL";
ORYX.I18N.BPEL4Chor2BPELSupport.expDesc = "导出图为 BPEL";

if(!ORYX.I18N.BPEL4ChorSupport) ORYX.I18N.BPEL4ChorSupport = {};

ORYX.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.exp = "导出 BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.expDesc = "导出图为 BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.imp = "导入 BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.impDesc = "导入一个 BPEL4Chor 文件";
ORYX.I18N.BPEL4ChorSupport.gen = "BPEL4Chor 生成器";
ORYX.I18N.BPEL4ChorSupport.genDesc = "生成一些 BPEL4Chor 属性值如果他们已知的(例如. 发送消息连接)";
ORYX.I18N.BPEL4ChorSupport.selectFile = "选择一个 BPEL4Chor 文件导入它";
ORYX.I18N.BPEL4ChorSupport.file = "文件";
ORYX.I18N.BPEL4ChorSupport.impPanel = "导入 BPEL4Chor 文件";
ORYX.I18N.BPEL4ChorSupport.impBtn = "导入";
ORYX.I18N.BPEL4ChorSupport.content = "内容";
ORYX.I18N.BPEL4ChorSupport.close = "关闭";
ORYX.I18N.BPEL4ChorSupport.error = "错误";
ORYX.I18N.BPEL4ChorSupport.progressImp = "导入...";
ORYX.I18N.BPEL4ChorSupport.progressExp = "导出...";
ORYX.I18N.BPEL4ChorSupport.impFailed = "导入时发生一个错误! <br/>请检查错误消息: <br/><br/>";

if(!ORYX.I18N.Bpel4ChorTransformation) ORYX.I18N.Bpel4ChorTransformation = {};

ORYX.I18N.Bpel4ChorTransformation.group = "导出";
ORYX.I18N.Bpel4ChorTransformation.exportBPEL = "导出 BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportBPELDesc = "导出图为 BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDL = "导出 XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDLDesc = "导出图为 XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.warning = "警告";
ORYX.I18N.Bpel4ChorTransformation.wrongValue = '更改的名称必须有值“1”以避免错误在转换BPEL4Chor时';
ORYX.I18N.Bpel4ChorTransformation.loopNone = '转换成BPEL4Chor时接收任务的循环类型必须是"None"';
ORYX.I18N.Bpel4ChorTransformation.error = "错误";
ORYX.I18N.Bpel4ChorTransformation.noSource = "id为2的第一个没有源对象.";
ORYX.I18N.Bpel4ChorTransformation.noTarget = "id为2的第一个没有目标对象.";
ORYX.I18N.Bpel4ChorTransformation.transCall = "在转换调用期间出现一个错误. 1:2";
ORYX.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "导出为 XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "导出为 BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.noGen = "转换输入不能被生成: 1\n2\n";

ORYX.I18N.BPMN2PNConverter = {
  name: "转换 Petri 网",
  desc: "转换 BPMN 图到 Petri 网络",
  group: "导出",
  error: "错误",
  errors: {
    server: "不能导入 BPNM 图.",
    noRights: "你没有读取模型的权限?",
    notSaved: "模型必须保存和重新使用Petri网传出!"
  },
  progress: {
      status: "状态",
      importingModel: "导入 BPMN 模型",
      fetchingModel: "提取",
      convertingModel: "转换",
      renderingModel: "渲染"
  }
}

if(!ORYX.I18N.TransformationDownloadDialog) ORYX.I18N.TransformationDownloadDialog = {};

ORYX.I18N.TransformationDownloadDialog.error = "错误";
ORYX.I18N.TransformationDownloadDialog.noResult = "转换服务器没有返回结果.";
ORYX.I18N.TransformationDownloadDialog.errorParsing = "分析视图时发生错误.";
ORYX.I18N.TransformationDownloadDialog.transResult = "转换结果";
ORYX.I18N.TransformationDownloadDialog.showFile = "显示结果文件";
ORYX.I18N.TransformationDownloadDialog.downloadFile = "下载结果文件";
ORYX.I18N.TransformationDownloadDialog.downloadAll = "下载所有结果文件";

if(!ORYX.I18N.DesynchronizabilityOverlay) ORYX.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
ORYX.I18N.DesynchronizabilityOverlay.group = "覆盖";
ORYX.I18N.DesynchronizabilityOverlay.name = "同步检查";
ORYX.I18N.DesynchronizabilityOverlay.desc = "同步 检查";
ORYX.I18N.DesynchronizabilityOverlay.sync = "站点可同步.";
ORYX.I18N.DesynchronizabilityOverlay.error = "站点有一个语法错误.";
ORYX.I18N.DesynchronizabilityOverlay.invalid = "服务器响应无效.";

if(!ORYX.I18N.Edit) ORYX.I18N.Edit = {};

ORYX.I18N.Edit.group = "编辑";
ORYX.I18N.Edit.cut = "剪切";
ORYX.I18N.Edit.cutDesc = "剪切到设计粘贴板";
ORYX.I18N.Edit.copy = "复制";
ORYX.I18N.Edit.copyDesc = "复制到设计粘贴板";
ORYX.I18N.Edit.paste = "粘贴";
ORYX.I18N.Edit.pasteDesc = "把设计粘贴到画布上";
ORYX.I18N.Edit.del = "删除";
ORYX.I18N.Edit.delDesc = "删除所有选中的图形";

if(!ORYX.I18N.EPCSupport) ORYX.I18N.EPCSupport = {};

ORYX.I18N.EPCSupport.group = "EPC";
ORYX.I18N.EPCSupport.exp = "导出 EPC";
ORYX.I18N.EPCSupport.expDesc = "导出 EPML图表";
ORYX.I18N.EPCSupport.imp = "导入 EPC";
ORYX.I18N.EPCSupport.impDesc = "导入 EPML 文件";
ORYX.I18N.EPCSupport.progressExp = "导出模型";
ORYX.I18N.EPCSupport.selectFile = "选择一个EPML (.empl) 文件导入.";
ORYX.I18N.EPCSupport.file = "文件";
ORYX.I18N.EPCSupport.impPanel = "导入 EPML 文件";
ORYX.I18N.EPCSupport.impBtn = "导入";
ORYX.I18N.EPCSupport.close = "关闭";
ORYX.I18N.EPCSupport.error = "错误";
ORYX.I18N.EPCSupport.progressImp = "导入中...";

if(!ORYX.I18N.ERDFSupport) ORYX.I18N.ERDFSupport = {};

ORYX.I18N.ERDFSupport.exp = "导出ERDF";
ORYX.I18N.ERDFSupport.expDesc = "导出ERDF";
ORYX.I18N.ERDFSupport.imp = "导入ERDF";
ORYX.I18N.ERDFSupport.impDesc = "导入ERDF";
ORYX.I18N.ERDFSupport.impFailed = "导入ERDF请求失败.";
ORYX.I18N.ERDFSupport.impFailed2 = "导入时发生错误! <br/>请检查错误信息: <br/><br/>";
ORYX.I18N.ERDFSupport.error = "错误";
ORYX.I18N.ERDFSupport.noCanvas = "xml 文件不包含 Oryx画布节点 !";
ORYX.I18N.ERDFSupport.noSS = "Oryx画布节点没有包含定义的模板!";
ORYX.I18N.ERDFSupport.wrongSS = "输入的模板和当前的编辑器不匹配!";
ORYX.I18N.ERDFSupport.selectFile = "选择一个ERDF (.xml) 文件或者输入ERDF导入!";
ORYX.I18N.ERDFSupport.file = "文件";
ORYX.I18N.ERDFSupport.impERDF = "导入 ERDF";
ORYX.I18N.ERDFSupport.impBtn = "导入";
ORYX.I18N.ERDFSupport.impProgress = "导入中...";
ORYX.I18N.ERDFSupport.close = "关闭";
ORYX.I18N.ERDFSupport.deprTitle = "确定导出eRDF?";
ORYX.I18N.ERDFSupport.deprText = "不建议导出eRDF因为下一版本的Oryx编辑器将停止对eRDF的支持 . 如果有可能, 导出JSON模板. 继续导出?";

if(!ORYX.I18N.jPDLSupport) ORYX.I18N.jPDLSupport = {};

ORYX.I18N.jPDLSupport.group = "导出";
ORYX.I18N.jPDLSupport.exp = "导出jPDL";
ORYX.I18N.jPDLSupport.expDesc = "导出jPDL";
ORYX.I18N.jPDLSupport.imp = "从 jPDL导入";
ORYX.I18N.jPDLSupport.impDesc = "迁移jPDL文件 为 BPMN2";
ORYX.I18N.jPDLSupport.impFailedReq = "迁移 jPDL请求失败.";
//ORYX.I18N.jPDLSupport.impFailedJson = "Transformation of jPDL failed.";
ORYX.I18N.jPDLSupport.impFailedJsonAbort = "迁移中止.";
ORYX.I18N.jPDLSupport.loadSseQuestionTitle = "jBPM 模板需要被加载"; 
ORYX.I18N.jPDLSupport.loadSseQuestionBody = "为了迁移jPDL, 模板必须已经被加载完成. 继续处理?";
ORYX.I18N.jPDLSupport.expFailedReq = "导出模型请求失败.";
ORYX.I18N.jPDLSupport.expFailedXml = "导出jPDL 失败. 导出报告: ";
ORYX.I18N.jPDLSupport.error = "Error";
ORYX.I18N.jPDLSupport.selectFile = "1. 选择一个jPDL processdefinition.xml 文件 (或输入一个)";
ORYX.I18N.jPDLSupport.selectGpdFile = "2. 选择一个 jPDL gpd.xml file (或输入一个)";
ORYX.I18N.jPDLSupport.file = "定义文件";
ORYX.I18N.jPDLSupport.gpdfile = "GPD文件"
ORYX.I18N.jPDLSupport.impJPDL = "迁移为 BPMN2";
ORYX.I18N.jPDLSupport.impBtn = "迁移";
ORYX.I18N.jPDLSupport.impProgress = "迁移中...";
ORYX.I18N.jPDLSupport.close = "关闭";

if(!ORYX.I18N.FromBPMN2Support) ORYX.I18N.FromBPMN2Support = {};
ORYX.I18N.FromBPMN2Support.selectFile = "选择一个BPMN2文件或BPMN2格式文件导入它!";
ORYX.I18N.FromBPMN2Support.file = "文件";
ORYX.I18N.FromBPMN2Support.impBPMN2 = "导入 BPMN2";
ORYX.I18N.FromBPMN2Support.impBtn = "导入";
ORYX.I18N.FromBPMN2Support.impProgress = "导入中...";
ORYX.I18N.FromBPMN2Support.close = "关闭";

if(!ORYX.I18N.FromJSONSupport) ORYX.I18N.FromJSONSupport = {};
ORYX.I18N.FromJSONSupport.selectFile = "选择一个JSON文件或JSON格式文件导入它!";
ORYX.I18N.FromJSONSupport.file = "文件";
ORYX.I18N.FromJSONSupport.impBPMN2 = "导入 JSON";
ORYX.I18N.FromJSONSupport.impBtn = "导入";
ORYX.I18N.FromJSONSupport.impProgress = "导入中...";
ORYX.I18N.FromJSONSupport.close = "关闭";

if(!ORYX.I18N.Bpmn2Bpel) ORYX.I18N.Bpmn2Bpel = {};

ORYX.I18N.Bpmn2Bpel.group = "执行 BPMN";
ORYX.I18N.Bpmn2Bpel.show = "显示的 BPEL";
ORYX.I18N.Bpmn2Bpel.download = "下载改变的 BPEL";
ORYX.I18N.Bpmn2Bpel.deploy = "部署改变的 BPEL";
ORYX.I18N.Bpmn2Bpel.showDesc = "转换BPMN到BPEL并在一个新窗口显示了结果.";
ORYX.I18N.Bpmn2Bpel.downloadDesc = "转换BPMN到BPEL并提供下载结果.";
ORYX.I18N.Bpmn2Bpel.deployDesc = "转换BPMN到BPEL和部署业务流程BPEL-Engine Apache ODE";
ORYX.I18N.Bpmn2Bpel.transfFailed = "请求转换到BPEL失败了.";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "Apache ODE URL";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "部署流程";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "取消";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "请向Apache ODE BPEL-Engine输入的URL， 例如: http://myserver:8080/ode";


if(!ORYX.I18N.Save) ORYX.I18N.Save = {};

ORYX.I18N.Save.group = "文件";
ORYX.I18N.Save.save = "保存";
ORYX.I18N.Save.autosave = "自动保存";
ORYX.I18N.Save.saveDesc = "保存";
ORYX.I18N.Save.autosaveDesc = "自动保存";
ORYX.I18N.Save.autosaveDesc_on = "自动保存 (on)";
ORYX.I18N.Save.autosaveDesc_off = "自动保存 (off)";
ORYX.I18N.Save.saveAs = "保存为...";
ORYX.I18N.Save.saveAsDesc = "保存为...";
ORYX.I18N.Save.unsavedData = "有未保存的数据,请你离开之前保存,否则您的更改会丢失!";
ORYX.I18N.Save.newProcess = "新流程";
ORYX.I18N.Save.saveAsTitle = "保存为...";
ORYX.I18N.Save.saveBtn = "保存";
ORYX.I18N.Save.close = "关闭";
ORYX.I18N.Save.savedAs = "保存为";
ORYX.I18N.Save.saved = "已保存!";
ORYX.I18N.Save.failed = "保存失败.";
ORYX.I18N.Save.noRights = "你没有权限保存更改.";
ORYX.I18N.Save.saving = "存储";
ORYX.I18N.Save.saveAsHint = "流程图存储到：";
ORYX.I18N.Save.showParsingErrorsTitle = "不能执行操作";
ORYX.I18N.Save.showParsingErrors = "请在保存前验证你的流程";

if(!ORYX.I18N.File) ORYX.I18N.File = {};

ORYX.I18N.File.group = "文件";
ORYX.I18N.File.print = "打印";
ORYX.I18N.File.printDesc = "打印当前模型";
ORYX.I18N.File.pdf = "导出为 PDF";
ORYX.I18N.File.pdfDesc = "导出为 PDF";
ORYX.I18N.File.info = "信息";
ORYX.I18N.File.infoDesc = "信息";
ORYX.I18N.File.genPDF = "生成 PDF";
ORYX.I18N.File.genPDFFailed = "生成 PDF 失败.";
ORYX.I18N.File.printTitle = "打印";
ORYX.I18N.File.printMsg = "我们当前的打印功能体验阶段，建议使用PDF导出打印报表，继续打印吗?";

if(!ORYX.I18N.Grouping) ORYX.I18N.Grouping = {};

ORYX.I18N.Grouping.grouping = "分组";
ORYX.I18N.Grouping.group = "组";
ORYX.I18N.Grouping.groupDesc = "组织所有所选的形状";
ORYX.I18N.Grouping.ungroup = "取消组";
ORYX.I18N.Grouping.ungroupDesc = "删除所有选定的组形状";

if(!ORYX.I18N.IBPMN2BPMN) ORYX.I18N.IBPMN2BPMN = {};

ORYX.I18N.IBPMN2BPMN.group ="导出";
ORYX.I18N.IBPMN2BPMN.name ="IBPMN 2 BPMN 映射";
ORYX.I18N.IBPMN2BPMN.desc ="IBPMN转换为BPMN";

if(!ORYX.I18N.Loading) ORYX.I18N.Loading = {};

ORYX.I18N.Loading.waiting ="请稍后...";

if(!ORYX.I18N.Pnmlexport) ORYX.I18N.Pnmlexport = {};

ORYX.I18N.Pnmlexport.group ="导出";
ORYX.I18N.Pnmlexport.name ="BPMN to PNML";
ORYX.I18N.Pnmlexport.desc ="导出可执行的 PNML， 进行部署";

if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};

ORYX.I18N.PropertyWindow.name = "名称";
ORYX.I18N.PropertyWindow.value = "值";
ORYX.I18N.PropertyWindow.selected = "选择";
ORYX.I18N.PropertyWindow.clickIcon = "点击图标";
ORYX.I18N.PropertyWindow.add = "添加";
ORYX.I18N.PropertyWindow.rem = "移除";
ORYX.I18N.PropertyWindow.complex = "编辑一个复杂类型";
ORYX.I18N.PropertyWindow.text = "编辑一个text类型";
ORYX.I18N.PropertyWindow.ok = "确定";
ORYX.I18N.PropertyWindow.cancel = "取消";
ORYX.I18N.PropertyWindow.dateFormat = "m/d/y";

if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};

ORYX.I18N.ShapeMenuPlugin.drag = "拖拽";
ORYX.I18N.ShapeMenuPlugin.clickDrag = "点击和拖拽";
ORYX.I18N.ShapeMenuPlugin.morphMsg = "改变形状";

if(!ORYX.I18N.SimplePnmlexport) ORYX.I18N.SimplePnmlexport = {};

ORYX.I18N.SimplePnmlexport.group = "导出";
ORYX.I18N.SimplePnmlexport.name = "导出到 PNML";
ORYX.I18N.SimplePnmlexport.desc = "导出到 PNML";

if(!ORYX.I18N.StepThroughPlugin) ORYX.I18N.StepThroughPlugin = {};

ORYX.I18N.StepThroughPlugin.group = "单步调试";
ORYX.I18N.StepThroughPlugin.stepThrough = "单步调试";
ORYX.I18N.StepThroughPlugin.stepThroughDesc = "单步调试你的模型";
ORYX.I18N.StepThroughPlugin.undo = "撤销";
ORYX.I18N.StepThroughPlugin.undoDesc = "撤消一步";
ORYX.I18N.StepThroughPlugin.error = "不能单步调试 this diagram.";
ORYX.I18N.StepThroughPlugin.executing = "执行中";

if(!ORYX.I18N.SyntaxChecker) ORYX.I18N.SyntaxChecker = {};

ORYX.I18N.SyntaxChecker.group = "验证系统";
ORYX.I18N.SyntaxChecker.name = "验证流程";
ORYX.I18N.SyntaxChecker.desc = "验证流程";
ORYX.I18N.SyntaxChecker.noErrors = "没有验证错误.";
ORYX.I18N.SyntaxChecker.invalid = "服务器不可用.";
ORYX.I18N.SyntaxChecker.checkingMessage = "验证中 ...";

if(!ORYX.I18N.Undo) ORYX.I18N.Undo = {};

ORYX.I18N.Undo.group = "撤销";
ORYX.I18N.Undo.undo = "撤销";
ORYX.I18N.Undo.undoDesc = "撤销最后一个动作";
ORYX.I18N.Undo.redo = "恢复";
ORYX.I18N.Undo.redoDesc = "恢复最后一个动作";

if(!ORYX.I18N.Validator) ORYX.I18N.Validator = {};
ORYX.I18N.Validator.checking = "校验";

if(!ORYX.I18N.View) ORYX.I18N.View = {};

ORYX.I18N.View.group = "变焦";
ORYX.I18N.View.zoomIn = "放大";
ORYX.I18N.View.zoomInDesc = "放大模型";
ORYX.I18N.View.zoomOut = "缩小";
ORYX.I18N.View.zoomOutDesc = "缩小模型";
ORYX.I18N.View.zoomStandard = "标准大小";
ORYX.I18N.View.zoomStandardDesc = "缩放到标准大小";
ORYX.I18N.View.zoomFitToModel = "自适应缩放";
ORYX.I18N.View.zoomFitToModelDesc = "缩放以适应模型尺寸";
ORYX.I18N.View.showInPopout = "弹出";
ORYX.I18N.View.showInPopoutDesc = "在弹出窗口中显示";
ORYX.I18N.View.convertToPDF = "PDF";
ORYX.I18N.View.convertToPDFDesc = "转换为 PDF";
ORYX.I18N.View.convertToPNG = "PNG";
ORYX.I18N.View.convertToPNGDesc = "转换为 PNG";
ORYX.I18N.View.generateTaskForms = "生成任务表单模板";
ORYX.I18N.View.generateTaskFormsDesc = "生成任务表单模板";
ORYX.I18N.View.showInfo = "信息";
ORYX.I18N.View.showInfoDesc = "信息";
ORYX.I18N.View.jbpmgroup = "jBPM";
ORYX.I18N.View.migratejPDL = "迁移 jPDL 3.2 到 BPMN2";
ORYX.I18N.View.migratejPDLDesc = "迁移 jPDL 3.2 到 BPMN2";
ORYX.I18N.View.viewDiff = "视图差异";
ORYX.I18N.View.viewDiffDesc = "查看流程的不同版本之间的差异";
ORYX.I18N.View.viewDiffLoadingVersions = "加载流程版本...";
ORYX.I18N.View.connectServiceRepo = "连接到jBPM服务存储库";
ORYX.I18N.View.connectServiceRepoDesc = "连接到jBPM服务存储库";
ORYX.I18N.View.connectServiceRepoDataTitle = "服务存储库连接";
ORYX.I18N.View.connectServiceRepoConnecting = "连接到服务存储库...";
ORYX.I18N.View.installingRepoItem = "从服务存储库安装资产...";
ORYX.I18N.View.shareProcess = "分享流程";
ORYX.I18N.View.shareProcessDesc = "分享你的流程";
ORYX.I18N.View.infogroup = "信息组";
ORYX.I18N.View.designerVersion = "jbpm设计器版本：";


if(!ORYX.I18N.XFormsSerialization) ORYX.I18N.XFormsSerialization = {};

ORYX.I18N.XFormsSerialization.group = "XForms 序列化";
ORYX.I18N.XFormsSerialization.exportXForms = "XForms 导出";
ORYX.I18N.XFormsSerialization.exportXFormsDesc = "导出 XForms+XHTML 标记";
ORYX.I18N.XFormsSerialization.importXForms = "XForms 导入";
ORYX.I18N.XFormsSerialization.importXFormsDesc = "导入 XForms+XHTML 标记";
ORYX.I18N.XFormsSerialization.noClientXFormsSupport = "不支持 XForms";
ORYX.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>你的浏览器不支持 XForms. 请安装 <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> 火狐.</h2>";
ORYX.I18N.XFormsSerialization.ok = "确定";
ORYX.I18N.XFormsSerialization.selectFile = "选择一个 XHTML (.xhtml) 文件 或 XForms+XHTML 标记类型导入它!";
ORYX.I18N.XFormsSerialization.selectCss = "请插入css文件的url";
ORYX.I18N.XFormsSerialization.file = "文件";
ORYX.I18N.XFormsSerialization.impFailed = "请求导入的文档失败.";
ORYX.I18N.XFormsSerialization.impTitle = "导入 XForms+XHTML 文档";
ORYX.I18N.XFormsSerialization.expTitle = "导出 XForms+XHTML 文档";
ORYX.I18N.XFormsSerialization.impButton = "导入";
ORYX.I18N.XFormsSerialization.impProgress = "导入中...";
ORYX.I18N.XFormsSerialization.close = "关闭";


if(!ORYX.I18N.TreeGraphSupport) ORYX.I18N.TreeGraphSupport = {};

ORYX.I18N.TreeGraphSupport.syntaxCheckName = "语法检测器";
ORYX.I18N.TreeGraphSupport.group = "树图的支持";
ORYX.I18N.TreeGraphSupport.syntaxCheckDesc = "检查语法树图的结构";

if(!ORYX.I18N.QueryEvaluator) ORYX.I18N.QueryEvaluator = {};

ORYX.I18N.QueryEvaluator.name = "查询评估员";
ORYX.I18N.QueryEvaluator.group = "核实";
ORYX.I18N.QueryEvaluator.desc = "核实查询";
ORYX.I18N.QueryEvaluator.noResult = "查询导致不匹配.";
ORYX.I18N.QueryEvaluator.invalidResponse = "服务无响应.";

// if(!ORYX.I18N.QueryResultHighlighter) ORYX.I18N.QueryResultHighlighter = {};
// 
// ORYX.I18N.QueryResultHighlighter.name = "Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

ORYX.I18N.PropertyWindow.title = "属性";

if(!ORYX.I18N.ShapeRepository) ORYX.I18N.ShapeRepository = {};
ORYX.I18N.ShapeRepository.title = "jBPM元素";

if(!ORYX.I18N.Shapes) ORYX.I18N.Shapes = {};
ORYX.I18N.Shapes.ProcessImage = "流程图片";
ORYX.I18N.Shapes.UnableToFindProcessImage= "未找到流程图片";
ORYX.I18N.Shapes.NoCallableElementSpecified= "未指定子流程";
ORYX.I18N.Shapes.UnableToShowProcessImage = "不能显示流程图片";
ORYX.I18N.Shapes.ErrorResolvingProcesImage = "不能解析流程图片";
ORYX.I18N.Shapes.ErrorResolvingProcesInfo = "解析流程信息出错";
ORYX.I18N.Shapes.CannotFoundOtherProces = "未找到其他流程";

ORYX.I18N.Save.dialogDesciption = "请输入一个名称、描述和评论.";
ORYX.I18N.Save.dialogLabelTitle = "标题";
ORYX.I18N.Save.dialogLabelDesc = "描述";
ORYX.I18N.Save.dialogLabelType = "类型";
ORYX.I18N.Save.dialogLabelComment = "修改评论";

ORYX.I18N.Validator.name = "BPMN 验证器";
ORYX.I18N.Validator.description = "BPMN的验证";

ORYX.I18N.SSExtensionLoader.labelImport = "导入";
ORYX.I18N.SSExtensionLoader.labelCancel = "取消";

Ext.MessageBox.buttonText.yes = "是";
Ext.MessageBox.buttonText.no = "否";
Ext.MessageBox.buttonText.cancel = "取消";
Ext.MessageBox.buttonText.ok = "确定";


/** New Language Properties: 28.01.2009 */
if(!ORYX.I18N.BPMN2XPDL) ORYX.I18N.BPMN2XPDL = {};
ORYX.I18N.BPMN2XPDL.group = "导出";
ORYX.I18N.BPMN2XPDL.xpdlExport = "导出为 XPDL";
ORYX.I18N.BPMN2XPDL.xpdlImport = "导入 XPDL";
ORYX.I18N.BPMN2XPDL.importGroup = "导入";
ORYX.I18N.BPMN2XPDL.selectFile = "选择一个 XPDL (.xml) 文件或 XPDL类型导入它!";
ORYX.I18N.BPMN2XPDL.file = "文件";
ORYX.I18N.BPMN2XPDL.impXPDL = "导入 XPDL";
ORYX.I18N.BPMN2XPDL.impBtn = "导入";
ORYX.I18N.BPMN2XPDL.impProgress = "导入中...";
ORYX.I18N.BPMN2XPDL.close = "关闭";

/** Resource Perspective Additions: 24 March 2009 */
if(!ORYX.I18N.ResourcesSoDAdd) ORYX.I18N.ResourcesSoDAdd = {};

ORYX.I18N.ResourcesSoDAdd.name = "显示职责分离约束";
ORYX.I18N.ResourcesSoDAdd.group = "资源透视图";
ORYX.I18N.ResourcesSoDAdd.desc = "为选择的任务定义一个职责分离约束";

if(!ORYX.I18N.ResourcesSoDShow) ORYX.I18N.ResourcesSoDShow = {};

ORYX.I18N.ResourcesSoDShow.name = "显示职责分离约束";
ORYX.I18N.ResourcesSoDShow.group = "资源透视图";
ORYX.I18N.ResourcesSoDShow.desc = "显示所选任务的职责分离约束";

if(!ORYX.I18N.ResourcesBoDAdd) ORYX.I18N.ResourcesBoDAdd = {};

ORYX.I18N.ResourcesBoDAdd.name = "定义一个绑定的职责约束";
ORYX.I18N.ResourcesBoDAdd.group = "资源透视图";
ORYX.I18N.ResourcesBoDAdd.desc = "为选择的任务定义一个绑定的职责约束";

if(!ORYX.I18N.ResourcesBoDShow) ORYX.I18N.ResourcesBoDShow = {};

ORYX.I18N.ResourcesBoDShow.name = "显示一个绑定的职责约束";
ORYX.I18N.ResourcesBoDShow.group = "资源透视图";
ORYX.I18N.ResourcesBoDShow.desc = "显示选定任务的一个绑定的职责约束";

if(!ORYX.I18N.ResourceAssignment) ORYX.I18N.ResourceAssignment = {};

ORYX.I18N.ResourceAssignment.name = "资源分配";
ORYX.I18N.ResourceAssignment.group = "资源透视图";
ORYX.I18N.ResourceAssignment.desc = "将资源分配给所选的任务";

if(!ORYX.I18N.ClearSodBodHighlights) ORYX.I18N.ClearSodBodHighlights = {};

ORYX.I18N.ClearSodBodHighlights.name = "清除高亮和覆盖层";
ORYX.I18N.ClearSodBodHighlights.group = "资源透视图";
ORYX.I18N.ClearSodBodHighlights.desc = "删除所有职责分离和绑定高亮/覆盖层";


if(!ORYX.I18N.Perspective) ORYX.I18N.Perspective = {};
ORYX.I18N.Perspective.no = "没有视角"
ORYX.I18N.Perspective.noTip = "卸载当前视角"


/** New Language Properties: 21.04.2009 */
ORYX.I18N.JSONSupport = {
    imp: {
        name: "从JSON中导入",
        desc: "从JSON中导入模型",
        group: "导出",
        selectFile: "选择一个JSON (.json) 文件或者输入JSON导入!",
        file: "文件",
        btnImp: "导入",
        btnClose: "关闭",
        progress: "导入中 ...",
        syntaxError: "语法 错误"
    },
    exp: {
        name: "导出JSON",
        desc: "导出当前模型保存为JSON",
        group: "导出"
    }
};

ORYX.I18N.TBPMSupport = {
		imp: {
        name: "导入 PNG/JPEG",
        desc: "导入 一个模型从PBM相册",
        group: "导出",
        selectFile: "选择一个图片(.png/.jpeg)文件!",
        file: "文件",
        btnImp: "导入",
        btnClose: "关闭",
        progress: "导入中 ...",
        syntaxError: "语法错误",
        impFailed: "导入文件请求失败.",
        confirm: "确认导入高亮显示的图形!"
    }
};

/** New Language Properties: 08.05.2009 */
if(!ORYX.I18N.BPMN2XHTML) ORYX.I18N.BPMN2XHTML = {};
ORYX.I18N.BPMN2XHTML.group = "导出";
ORYX.I18N.BPMN2XHTML.XHTMLExport = "导出 XHTML文件";

/** New Language Properties: 09.05.2009 */
if(!ORYX.I18N.JSONImport) ORYX.I18N.JSONImport = {};

ORYX.I18N.JSONImport.title = "JSON 导入";
ORYX.I18N.JSONImport.wrongSS = "导入的模板文件 ({0})和加载的模板文件 ({1})不匹配.";
ORYX.I18N.JSONImport.invalidJSON = "无效的JSON导入.";

if(!ORYX.I18N.Feedback) ORYX.I18N.Feedback = {};

ORYX.I18N.Feedback.name = "反馈";
ORYX.I18N.Feedback.desc = "反馈方式!";
ORYX.I18N.Feedback.pTitle = "反馈方式!";
ORYX.I18N.Feedback.pName = "姓名";
ORYX.I18N.Feedback.pEmail = "电子邮箱";
ORYX.I18N.Feedback.pSubject = "主题";
ORYX.I18N.Feedback.pMsg = "描述/消息";
ORYX.I18N.Feedback.pEmpty = "* 请提供尽可能详细的信息以便我们能理解你的要求.\n* 问题报告, 请列出问题重现的步骤，并描述你期望的输出.";
ORYX.I18N.Feedback.pAttach = "附加 最新 模型";
ORYX.I18N.Feedback.pAttachDesc = "这个信息可以帮助调试.如果你的模型包含一些敏感的数据, 清除敏感数据或者取消提交.";
ORYX.I18N.Feedback.pBrowser = "你的浏览器环境信息";
ORYX.I18N.Feedback.pBrowserDesc = "此信息已从您的浏览器自动检测，它可以帮助解决遇到的浏览器特定行为的错误.";
ORYX.I18N.Feedback.submit = "发送消息";
ORYX.I18N.Feedback.sending = "发送消息中 ...";
ORYX.I18N.Feedback.success = "成功";
ORYX.I18N.Feedback.successMsg = "感谢你的反馈!";
ORYX.I18N.Feedback.failure = "失败";
ORYX.I18N.Feedback.failureMsg = "很不幸, 消息没有成功发送. 这是我们的错误! 请再次尝试 或者通过 http://code.google.com/p/oryx-editor/联系我们";


ORYX.I18N.Feedback.name = "反馈";
ORYX.I18N.Feedback.failure = "失败";
ORYX.I18N.Feedback.failureMsg = "很不幸, 消息没有成功发送. 这是我们的错误! 请再次尝试 或者通过 http://code.google.com/p/oryx-editor/联系我们";
ORYX.I18N.Feedback.submit = "发送消息";

ORYX.I18N.Feedback.emailDesc = "你的电子邮件地址?";
ORYX.I18N.Feedback.titleDesc = "简要描述消息标题";
ORYX.I18N.Feedback.descriptionDesc = "描述一下你的想法，疑问或问题."
ORYX.I18N.Feedback.info = '<p>Oryx 是一个研究平台 为了支持科学家们在业务流程管理领域，超越一个灵活的，可扩展的工具来验证研究的论文，并进行实.</p><p>We are happy to provide you with the <a href="http://bpt.hpi.uni-potsdam.de/Oryx/ReleaseNotes" target="_blank"> latest technology and advancements</a> of our platform. <a href="http://bpt.hpi.uni-potsdam.de/Oryx/DeveloperNetwork" target="_blank">We</a> work hard to provide you with a reliable system, even though you may experience small hiccups from time to time.</p><p>If you have ideas how to improve Oryx, have a question related to the platform, or want to report a problem: <strong>Please, let us know. Here.</strong></p>'; // general info will be shown, if no subject specific info is given
// list subjects in reverse order of appearance!
ORYX.I18N.Feedback.subjects = [
    {
    	id: "question",   // ansi-compatible name
    	name: "Question", // natural name
    	description: "在此处提问! \n 请给我们尽可能多的信息，因为在我们可以给出一个答案之前,我们不需要更多的问题来烦你.", // default text for the description text input field
    	info: "" // optional field to give more info
    },
    {
    	id: "problem",   // ansi-compatible name
    	name: "Problem", // natural name
    	description: "非常抱歉给您造成不便. 请对我们的问题的反馈，我们会尽力替你解决. 请对问题进行尽可能详细描述", // default text for the description text input field
    	info: "" // optional field to give more info
    },
    {
    	id: "idea",   // ansi-compatible name
    	name: "Idea", // natural name
    	description: "在此分享您的想法和观点！", // default text for the description text input field
    	info: "" // optional field to give more info
    }
];

/** New Language Properties: 11.05.2009 */
if(!ORYX.I18N.BPMN2DTRPXMI) ORYX.I18N.BPMN2DTRPXMI = {};
ORYX.I18N.BPMN2DTRPXMI.group = "导出";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExport = "导出XMI (Design Thinking)";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "将当前模型导出 XMI(需要模板设置扩展'BPMN子集设计思想')";

/** New Language Properties: 14.05.2009 */
if(!ORYX.I18N.RDFExport) ORYX.I18N.RDFExport = {};
ORYX.I18N.RDFExport.group = "导出";
ORYX.I18N.RDFExport.rdfExport = "导出RDF";
ORYX.I18N.RDFExport.rdfExportDescription = "导出当前模型为XML为资源描述框架定义序列化 (RDF)";

/** New Language Properties: 15.05.2009*/
if(!ORYX.I18N.SyntaxChecker.BPMN) ORYX.I18N.SyntaxChecker.BPMN={};
ORYX.I18N.SyntaxChecker.BPMN_NO_SOURCE = "边界必须有一个源.";
ORYX.I18N.SyntaxChecker.BPMN_NO_TARGET = "边界必须有一个目标.";
ORYX.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "源和目标节点必须连接在同一个流程上.";
ORYX.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "源和目标节点必须包含在不同的池.";
ORYX.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "一个流对象必须包含在一个过程 .";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "结束事件必须有一个输入顺序流 .";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "开始事件必须有一个输出顺序流 .";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "启动事件不能有输入顺序流.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "附加的中间事件不能有输入顺序流.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "附加的中间事件必须只有一个输出顺序流.";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "结束事件不能有输出顺序流.";
ORYX.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "基于事件的网关不能跟着网关或过程 .";
ORYX.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "节点类型是不允许的 .";

if(!ORYX.I18N.SyntaxChecker.IBPMN) ORYX.I18N.SyntaxChecker.IBPMN={};
ORYX.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "相互作用必须有一个发送器和接收器的角色集 ";
ORYX.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "该节点必须有输入顺序流.";
ORYX.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "该节点必须有输出顺序流.";

if(!ORYX.I18N.SyntaxChecker.InteractionNet) ORYX.I18N.SyntaxChecker.InteractionNet={};
ORYX.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "发送者没有设置";
ORYX.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "接收者没有设置";
ORYX.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "消息类型没有设置";
ORYX.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "角色没有设置";

if(!ORYX.I18N.SyntaxChecker.EPC) ORYX.I18N.SyntaxChecker.EPC={};
ORYX.I18N.SyntaxChecker.EPC_NO_SOURCE = "每个边界必须有一个源 .";
ORYX.I18N.SyntaxChecker.EPC_NO_TARGET = "每个边界必须有一个目标.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "节点必须连接在边界.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "节点必须连接多个边界 .";
ORYX.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "节点连接了过多的边界.";
ORYX.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "节点不正确的连接.";
ORYX.I18N.SyntaxChecker.EPC_MANY_STARTS = "这里必须只有一个开始事件.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "分支后不能有函数方法 OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "分支后不能有接口 OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION =  "函数后不能定义函数.";
ORYX.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT =  "事件后不能定义事件.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION =  "函数后不能定义接口.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI =  "接口后不能定义函数.";

if(!ORYX.I18N.SyntaxChecker.PetriNet) ORYX.I18N.SyntaxChecker.PetriNet={};
ORYX.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "不是二分图";
ORYX.I18N.SyntaxChecker.PetriNet_NO_LABEL = "标签没有设置标记转换";
ORYX.I18N.SyntaxChecker.PetriNet_NO_ID = "节点没有设置ID";
ORYX.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "两个流之间的关系具有相同的源和目标";
ORYX.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "节点没有设置流程关系";

/** New Language Properties: 02.06.2009*/
ORYX.I18N.Edge = "边界";
ORYX.I18N.Node = "节点";

/** New Language Properties: 03.06.2009*/
ORYX.I18N.SyntaxChecker.notice = "移动鼠标到一个红十字图标查看错误消息.";

ORYX.I18N.Validator.result = "校验结果";
ORYX.I18N.Validator.noErrors = "没有发现校验错误.";
ORYX.I18N.Validator.bpmnDeadlockTitle = "死锁";
ORYX.I18N.Validator.bpmnDeadlock = "这个节点将导致死锁。在某些情况下，不是所有的传入分支被激活.";
ORYX.I18N.Validator.bpmnUnsafeTitle = "缺乏同步";
ORYX.I18N.Validator.bpmnUnsafe = "该模型缺乏同步。标记的元素是从多个输入分支被激活.";
ORYX.I18N.Validator.bpmnLeadsToNoEndTitle = "校验结果";
ORYX.I18N.Validator.bpmnLeadsToNoEnd = "这个过程将永远无法达到的最终状态.";

ORYX.I18N.Validator.syntaxErrorsTitle = "语法错误";
ORYX.I18N.Validator.syntaxErrorsMsg = "无法验证的过程因为它包含语法错误.";
	
ORYX.I18N.Validator.error = "校验失败";
ORYX.I18N.Validator.errorDesc = '抱歉, 过程校验失败. 如果你通过"发送反馈" 功能发送给我们你的过程模型 ， 它会帮助我们识别问题,';

ORYX.I18N.Validator.epcIsSound = "<p><b>EPC是合理的, 没有发现问题!</b></p>";
ORYX.I18N.Validator.epcNotSound = "<p><b>EPC<i>不</i> 合理!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!ORYX.I18N.RESIZE) ORYX.I18N.RESIZE = {};
ORYX.I18N.RESIZE.tipGrow = "增加画布的大小:";
ORYX.I18N.RESIZE.tipShrink = "减小画布的大小:";
ORYX.I18N.RESIZE.N = "上";
ORYX.I18N.RESIZE.W = "左";
ORYX.I18N.RESIZE.S ="下";
ORYX.I18N.RESIZE.E ="右";
/** New Language Properties: 14.08.2009*/
if(!ORYX.I18N.PluginLoad) ORYX.I18N.PluginLoad = {};
ORYX.I18N.PluginLoad.AddPluginButtonName = "添加插件";
ORYX.I18N.PluginLoad.AddPluginButtonDesc = "动态添加额外的插件";
ORYX.I18N.PluginLoad.loadErrorTitle="加载错误";
ORYX.I18N.PluginLoad.loadErrorDesc = "不能加载插件. \n 错误:\n";
ORYX.I18N.PluginLoad.WindowTitle ="添加额外的插件";

ORYX.I18N.PluginLoad.NOTUSEINSTENCILSET = "在这stencilset不允许!";
ORYX.I18N.PluginLoad.REQUIRESTENCILSET = "需要另外一个 Stencilset!";
ORYX.I18N.PluginLoad.NOTFOUND = "没有发现pluginname!"
ORYX.I18N.PluginLoad.YETACTIVATED = "插件也被激活!"

/** New Language Properties: 15.07.2009*/
if(!ORYX.I18N.Layouting) ORYX.I18N.Layouting ={};
ORYX.I18N.Layouting.doing = "布局中...";

/** New Language Properties: 18.08.2009*/
ORYX.I18N.SyntaxChecker.MULT_ERRORS = "多个错误";

/** New Language Properties: 08.09.2009*/
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "基本属性";
ORYX.I18N.PropertyWindow.moreProps = "扩展属性";
ORYX.I18N.PropertyWindow.simulationProps = "模拟";

/** New Language Properties: 17.09.2009*/
if(!ORYX.I18N.Bpmn2_0Serialization) ORYX.I18N.Bpmn2_0Serialization = {};
ORYX.I18N.Bpmn2_0Serialization.show = "展示 BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.showDesc = "展示 最新的BPMN 2.0 DI XML ";
ORYX.I18N.Bpmn2_0Serialization.download = "下载 BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.downloadDesc = "下载 最新的 BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.serialFailed = "生成BPMN 2.0 DI XML序列时发生错误.";
ORYX.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!ORYX.I18N.SyntaxChecker.BPMN2) ORYX.I18N.SyntaxChecker.BPMN2 = {};

ORYX.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "数据输入必须没有任何输入的数据组合.";
ORYX.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "数据输出必须没有任何输出数据组合.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "基于事件的网关的目标只有一个输入顺序流.";

/** New Language Properties 02.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "基于事件的网关必须有两个或两个以上的输出顺序流.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "如果配置使用消息中间事件，就不能接受任务，反之亦然.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "只有以下事件触发器是有效的：消息，信号，定时器，多条件.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "网关事件的输出序列流必须没有条件的表达式.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "网关不能满足实例化过程的条件。请使用一个启动事件或初始化属性.";

/** New Language Properties 05.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "网关必须有多个输入和输出的顺序流.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "网关必须拥有多个输入顺序流但是不能有多个输出顺序流.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "网关不能有多个输入顺序流，但必须有多个输出顺序流.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "网关必须至少有一个输出顺序流的.";
ORYX.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "接收用于网关事件的配置任务必须没有任何附加的中间事件.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "一个事件不能有任何输入或输出流.";

/** New Language Properties 13.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "消息流的边缘至少有一侧被连接.";

/** New Language Properties 19.10.2009 */
ORYX.I18N.Bpmn2_0Serialization['import'] = "从BPMN 2.0 DI XML导入";
ORYX.I18N.Bpmn2_0Serialization.importDesc = "从文件或者 XML字符串中导入一个 BPMN 2.0 模型 ";
ORYX.I18N.Bpmn2_0Serialization.selectFile = "选择一个 (*.bpmn) 文件 或者输入 BPMN 2.0 DI XML导入!";
ORYX.I18N.Bpmn2_0Serialization.file = "文件:";
ORYX.I18N.Bpmn2_0Serialization.name = "从 BPMN 2.0 DI XML导入";
ORYX.I18N.Bpmn2_0Serialization.btnImp = "导入";
ORYX.I18N.Bpmn2_0Serialization.progress = "正在导入 BPMN 2.0 DI XML ...";
ORYX.I18N.Bpmn2_0Serialization.btnClose = "关闭";
ORYX.I18N.Bpmn2_0Serialization.error = "导入 BPMN 2.0 DI XML时发生错误";

/** New Language Properties 24.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "一个 Choreography 活动 可能只有一个启动消息.";
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "此处不允许定义信息流.";

/** New Language Properties 27.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "没有实例化的基于事件的网关至少有一个进入顺序流.";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "一个 Choreography 活动 必须有一个参与者 (white).";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "一个 Choreography 活动 不能超过一个参与者 (white)."

ORYX.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "会话必须连接到至少两个参与者.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "消息流的源必须是一个参与者.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "消息流的目标必须是一个参与者.";
ORYX.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "会话关系必须连接一个通信或子节点与参与者对话.";

/** New Language Properties 30.12.2009 */
ORYX.I18N.Bpmn2_0Serialization.xpdlShow = "展示 XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlShowDesc = "展示BPMN 2.0 XML标准的  XPDL 2.2 (by XSLT)";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownload = "下载 XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "下载 BPMN 2.0 标准的XPDL 2.2 XML  (by XSLT)";


if(!ORYX.I18N.cpntoolsSupport) ORYX.I18N.cpntoolsSupport = {};

ORYX.I18N.cpntoolsSupport.serverConnectionFailed = "连接失败.";
ORYX.I18N.cpntoolsSupport.importTask = "选择一个 CPN 文件 (.cpn) 或者输入 CPN XML导入!";
ORYX.I18N.cpntoolsSupport.File = "文件:";
ORYX.I18N.cpntoolsSupport.cpn = "CPN";
ORYX.I18N.cpntoolsSupport.title = "CPN Oryx";
ORYX.I18N.cpntoolsSupport.importLable = "导入";
ORYX.I18N.cpntoolsSupport.close = "关闭";
ORYX.I18N.cpntoolsSupport.wrongCPNFile = "没有选择正确的 CPN - 文件.";
ORYX.I18N.cpntoolsSupport.noPageSelection = "没有选中的页面.";
ORYX.I18N.cpntoolsSupport.group = "导出";
ORYX.I18N.cpntoolsSupport.importProgress = "导入中 ...";
ORYX.I18N.cpntoolsSupport.exportProgress = "导出中 ...";
ORYX.I18N.cpntoolsSupport.exportDescription = "导出到CPN";
ORYX.I18N.cpntoolsSupport.importDescription = "从CPN导入";

if(!ORYX.I18N.BPMN2YAWLMapper) ORYX.I18N.BPMN2YAWLMapper = {};

ORYX.I18N.BPMN2YAWLMapper.group = "导出";
ORYX.I18N.BPMN2YAWLMapper.name = 'YAWL 导出';
ORYX.I18N.BPMN2YAWLMapper.desc = '把图映射到YAWL并导出, 请确保“BPMN子集映射到YAWL”已经加载';

if(!ORYX.I18N.PropertyWindow.Task) ORYX.I18N.PropertyWindow.Task = {};
ORYX.I18N.PropertyWindow.Task.selectActorsTitle='选择参与者';
ORYX.I18N.PropertyWindow.Task.selectGroupsTitle='选择角色';

if(!ORYX.I18N.PropertyWindow.Editor) ORYX.I18N.PropertyWindow.Editor = {};
ORYX.I18N.PropertyWindow.Editor.TypeString="字符串";
ORYX.I18N.PropertyWindow.Editor.TypeInteger="整数";
ORYX.I18N.PropertyWindow.Editor.TypeFloat="浮点数";
ORYX.I18N.PropertyWindow.Editor.TypeBoolean="布尔";
ORYX.I18N.PropertyWindow.Editor.TypeObject="对象";
ORYX.I18N.PropertyWindow.Editor.NameHeader="名称";
ORYX.I18N.PropertyWindow.Editor.UserNameHeader="姓名";
ORYX.I18N.PropertyWindow.Editor.DescriptionHeader="说明";
ORYX.I18N.PropertyWindow.Editor.TypeHeader="类型";
ORYX.I18N.PropertyWindow.Editor.ForVariableDefinitions="变量定义";
ORYX.I18N.PropertyWindow.Editor.AddVariable="增加变量";
ORYX.I18N.PropertyWindow.Editor.ForDataInput="数据输入";
ORYX.I18N.PropertyWindow.Editor.AddDataInput="增加数据输入";
ORYX.I18N.PropertyWindow.Editor.ForDataOutput="数据输出";
ORYX.I18N.PropertyWindow.Editor.AddDataOutput="增加数据输出";
ORYX.I18N.PropertyWindow.Editor.ForGlobals="全局变量";
ORYX.I18N.PropertyWindow.Editor.AddGlobals="增加全局变量";
ORYX.I18N.PropertyWindow.Editor.Users="办理者";
ORYX.I18N.PropertyWindow.Editor.Groups="角色";
ORYX.I18N.PropertyWindow.Editor.ExpiresAt="过期于";
ORYX.I18N.PropertyWindow.Editor.Type="类型";
ORYX.I18N.PropertyWindow.Editor.Import="导入";
ORYX.I18N.PropertyWindow.Editor.AddImport="增加导入";
ORYX.I18N.PropertyWindow.Editor.Action="动作";
ORYX.I18N.PropertyWindow.Editor.AddAction="增加动作";
ORYX.I18N.PropertyWindow.Editor.DataType="数据类型";
ORYX.I18N.PropertyWindow.Editor.FromObject="来源对象";
ORYX.I18N.PropertyWindow.Editor.ToObject="目标对象";
ORYX.I18N.PropertyWindow.Editor.ToValue="字面值";
ORYX.I18N.PropertyWindow.Editor.AssignmentType="赋值类型";
ORYX.I18N.PropertyWindow.Editor.Name="名称";
ORYX.I18N.PropertyWindow.Editor.StandardType="标准类型";
ORYX.I18N.PropertyWindow.Editor.CustomType="定制类型";
ORYX.I18N.PropertyWindow.Editor.ProcessId="流程Id";
ORYX.I18N.PropertyWindow.Editor.PackageName="包名";
ORYX.I18N.PropertyWindow.Editor.ProcessImage="流程图片";
ORYX.I18N.PropertyWindow.Editor.AddAction="增加动作";
ORYX.I18N.PropertyWindow.Editor.isEqualTo="等于";
ORYX.I18N.PropertyWindow.Editor.isMappedTo="映射";
ORYX.I18N.PropertyWindow.Editor.CustomEditor="定制编辑器";
ORYX.I18N.PropertyWindow.Editor.ForNotifications="通知";
ORYX.I18N.PropertyWindow.Editor.ForReassignments="重新指派";
ORYX.I18N.PropertyWindow.Editor.ForImports="导入";
ORYX.I18N.PropertyWindow.Editor.ForActions="动作";
ORYX.I18N.PropertyWindow.Editor.ForAssignments="输入输出关联";
ORYX.I18N.PropertyWindow.Editor.ForInputAssignments="输入关联（变量=>输入）";
ORYX.I18N.PropertyWindow.Editor.ForOutputAssignments="输出关联（输出=>变量）";
ORYX.I18N.PropertyWindow.Editor.MappingVariables="映射同名变量";
ORYX.I18N.PropertyWindow.Editor.ForExpression="表达式编辑器 - 按 Ctrl-Z 激活自动完成";
ORYX.I18N.PropertyWindow.Editor.ProcessImageNotAvailable="流程图片不可用";
ORYX.I18N.PropertyWindow.Editor.SelectProcessId="请选择一个流程";
ORYX.I18N.PropertyWindow.Editor.ForCalledElements="调用元素";
ORYX.I18N.PropertyWindow.Editor.Save="保存";
ORYX.I18N.PropertyWindow.Editor.From="来自";
ORYX.I18N.PropertyWindow.Editor.To="到";
ORYX.I18N.PropertyWindow.Editor.ToUsers="到用户";
ORYX.I18N.PropertyWindow.Editor.ToGroups="到组";
ORYX.I18N.PropertyWindow.Editor.ReplyTo="回复";
ORYX.I18N.PropertyWindow.Editor.Subject="主题";
ORYX.I18N.PropertyWindow.Editor.Body="消息内容";
ORYX.I18N.PropertyWindow.Editor.EnterNotificationBody="输入通知内容";
ORYX.I18N.PropertyWindow.Editor.AddNotification="增加通知";
ORYX.I18N.PropertyWindow.Editor.AddReassignment="增加重新指派";
ORYX.I18N.PropertyWindow.Editor.AddAssignment="增加赋值";
ORYX.I18N.PropertyWindow.Editor.DataTitle_VariableDefinitions="** 变量定义 **";
ORYX.I18N.PropertyWindow.Editor.DataTitle_DataInputs="** 数据输入 **";
ORYX.I18N.PropertyWindow.Editor.DataTitle_DataOutputs="** 数据输出 **";
ORYX.I18N.PropertyWindow.Editor.OnlySingleEntryAllowed="仅允许单个输入项";
ORYX.I18N.PropertyWindow.Editor.SelectBussinessFields="从业务表单字段中选择";
ORYX.I18N.PropertyWindow.Editor.BussinessFormNotSelected="业务表单未选择";
ORYX.I18N.PropertyWindow.Editor.BussinessForm="业务表单：";
ORYX.I18N.PropertyWindow.Editor.LoadVardefs="加载预定义的变量";
ORYX.I18N.PropertyWindow.Editor.NoVardefs="没有预定义的变量";
ORYX.I18N.PropertyWindow.Editor.ClearVardefs="清空";
ORYX.I18N.PropertyWindow.Editor.VardefSource="来源";
ORYX.I18N.PropertyWindow.Editor.VardefDescription="说明";
ORYX.I18N.PropertyWindow.Editor.VardefValue="当前取值（仅供参考）";
ORYX.I18N.PropertyWindow.Editor.JAConditionTitle="会签通过条件";
ORYX.I18N.PropertyWindow.Editor.JAConditionPercent="按比例";
ORYX.I18N.PropertyWindow.Editor.JAConditionUsercount="按人数";
ORYX.I18N.PropertyWindow.Editor.JAConditionPercentMaxText="比例不能大于100";
ORYX.I18N.PropertyWindow.Editor.JAConditionUsercountU="人";
ORYX.I18N.PropertyWindow.Editor.LoadProcessesMask="正在加载流程信息...";

ORYX.I18N.View.ProcessModelling = "流程建模";
ORYX.I18N.View.SimulationInfo = "模拟信息";
ORYX.I18N.View.SimulationResults = "模拟结果";
ORYX.I18N.View.SimulationGraphs = "模拟结果图";
ORYX.I18N.View.Properties = "属性";
ORYX.I18N.View.ChangePerspective = "jBPM元素";
ORYX.I18N.View.ProcessInformation = "流程信息";
ORYX.I18N.View.FullScreenMode="全屏显示（按ESC退出）";
ORYX.I18N.View.ImportFromBPMN2="从已有的BPMN2导入";

if(!ORYX.I18N.Diagram) ORYX.I18N.Diagram = {};
ORYX.I18N.Diagram.UserTask="用户任务";
ORYX.I18N.Diagram.SendTask="发送任务";
ORYX.I18N.Diagram.ReceiveTask="接收任务";
ORYX.I18N.Diagram.ManualTask="手工任务";
ORYX.I18N.Diagram.ServiceTask="服务任务";
ORYX.I18N.Diagram.BusinessRuleTask="业务规则";
ORYX.I18N.Diagram.ScriptTask="脚本任务";
ORYX.I18N.Diagram.AddToProcessDictionary="加入流程字典";
ORYX.I18N.Diagram.EditTaskForm="编辑任务表单";
ORYX.I18N.Diagram.ViewNodeSource="查看节点定义";
ORYX.I18N.Diagram.ViewNodeSource_Close="关闭";
