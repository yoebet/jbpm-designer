package org.jbpm.designer.bpmn2.validation;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.bpmn2.*;
import org.eclipse.bpmn2.Process;
import org.eclipse.emf.ecore.util.FeatureMap;
import org.jboss.drools.CostParameters;
import org.jboss.drools.DecimalParameterType;
import org.jboss.drools.DroolsPackage;
import org.jboss.drools.ElementParametersType;
import org.jboss.drools.FloatingParameterType;
import org.jboss.drools.ProcessAnalysisDataType;
import org.jboss.drools.ResourceParameters;
import org.jboss.drools.Scenario;
import org.jboss.drools.impl.DroolsFactoryImpl;
import org.jbpm.designer.web.profile.IDiagramProfile;
import org.jbpm.designer.web.server.ServletUtil;
import org.json.JSONObject;


public class BPMN2SyntaxChecker implements SyntaxChecker {
	protected Map<String, List<String>> errors = new HashMap<String, List<String>>();
	private String json;
	private String preprocessingData;
	private IDiagramProfile profile;
	private String defaultResourceId = "";
	private String uuid;
	
	public BPMN2SyntaxChecker(String json, String preprocessingData, IDiagramProfile profile, String uuid) {
		this.json = json;
		this.preprocessingData = preprocessingData;
		this.profile = profile;
		this.uuid = uuid;
	}
	
	public void checkSyntax() {
		DroolsFactoryImpl.init();
		
		Definitions def = profile.createMarshaller().getDefinitions(json, preprocessingData);
		List<RootElement> rootElements =  def.getRootElements();
		Scenario defaultScenario = getDefaultScenario(def);
		
        for(RootElement root : rootElements) {
        	if(root instanceof Process) {
        		Process process = (Process) root;
        		if(process.getFlowElements() != null && process.getFlowElements().size() > 0) {
        			defaultResourceId = process.getFlowElements().get(0).getId();
        		}
        		
        		if(isEmpty(process.getId())) {
        			addError(defaultResourceId, "流程没有id.");
        		} else {
        			if(!SyntaxCheckerUtils.isNCName(process.getId())) {
        				addError(defaultResourceId, "不可用的流程id. 查看 http://www.w3.org/TR/REC-xml-names/#NT-NCName 获取更多信息.");
        			} else {
        				String[] packageAssetInfo = ServletUtil.findPackageAndAssetInfo(uuid, profile);
		        		String processImageName = process.getId() + "-image";
		        		if(!ServletUtil.assetExistsInGuvnor(packageAssetInfo[0], processImageName, profile)) {
		        			addError(defaultResourceId, "获取不到流程图片.");
		        		}
        			}
        		}
        		
        		String pname = null;
        		Iterator<FeatureMap.Entry> iter = process.getAnyAttribute().iterator();
        		boolean foundPackageName = false;
                while(iter.hasNext()) {
                    FeatureMap.Entry entry = iter.next();
                    if(entry.getEStructuralFeature().getName().equals("packageName")) {
                    	foundPackageName = true;
                        pname = (String) entry.getValue();
                        if(isEmpty(pname)) {
                        	addError(defaultResourceId, "流程没有包名.");
                        }
                    }
                }
                if(!foundPackageName) {
                	addError(defaultResourceId, "流程没有包名.");
                } else {
                	if(!isEmpty(pname)) {
                		String[] packageAssetInfo = ServletUtil.findPackageAndAssetInfo(uuid, profile);
                		String guvnorPackageName = packageAssetInfo[0];
                		if(!guvnorPackageName.equals(pname)) {
                			addError(defaultResourceId, "流程包名不可用.");
                		}
                	}
                }
                
                if(isEmpty(process.getName())) {
        			addError(defaultResourceId, "流程没有名称.");
        		}
                
                boolean foundStartEvent = false;
                boolean foundEndEvent = false;
        		List<FlowElement> flowElements =  process.getFlowElements();
        		for(FlowElement fe : flowElements) {
        			if(fe instanceof StartEvent) {
        				foundStartEvent = true;
        			}
        			if(fe instanceof EndEvent) {
        				foundEndEvent = true;
        			}
        		}
        		if(!foundStartEvent && !isAdHocProcess(process)) {
        			addError(defaultResourceId, "流程没有开始节点.");
        		}
        		if(!foundEndEvent && !isAdHocProcess(process)) {
        			addError(defaultResourceId, "流程没有结束节点.");
        		}
        		
        		checkFlowElements(process, process, defaultScenario);
        	}
        }
	}
	
	private void checkFlowElements(FlowElementsContainer container, Process process, Scenario defaultScenario) {
		
		for(FlowElement fe : container.getFlowElements()) {
			if(fe instanceof StartEvent) {
				StartEvent se = (StartEvent) fe;
				if(se.getOutgoing() == null || se.getOutgoing().size() < 1) {
					addError(se, "开始节点没有向外连接");
				}
			} else if (fe instanceof EndEvent) {
				EndEvent ee = (EndEvent) fe;
				if(ee.getIncoming() == null || ee.getIncoming().size() < 1) {
					addError(ee, "结束节点没有进入连接");
				}
			} else {
				if(fe instanceof FlowNode) {
					FlowNode fn = (FlowNode) fe;
					if((fn.getOutgoing() == null || fn.getOutgoing().size() < 1) && !isAdHocProcess(process)) {
    					addError(fn, "节点没有向外连接");
    				}
                    if(!(fn instanceof BoundaryEvent)) {
                        if((fn.getIncoming() == null || fn.getIncoming().size() < 1) && !isAdHocProcess(process)) {
                            addError(fn, "节点没有进入连接");
                        }
                    }
				}
			}
			
			if(fe instanceof BusinessRuleTask) {
				BusinessRuleTask bt = (BusinessRuleTask) fe;
				Iterator<FeatureMap.Entry> biter = bt.getAnyAttribute().iterator();
				boolean foundRuleflowGroup = false;
	            while(biter.hasNext()) {
	                FeatureMap.Entry entry = biter.next();
	                if(entry.getEStructuralFeature().getName().equals("ruleFlowGroup")) {
	                	foundRuleflowGroup = true;
	                	String ruleflowGroup = (String) entry.getValue();
	                	if(isEmpty(ruleflowGroup)) {
	                		addError(bt, "业务规则任务没有规则流组.");
	                	}
	                }
	            }
	            if(!foundRuleflowGroup) {
	            	addError(bt, "业务规则任务没有规则流组.");
	            }
			}
			
			if(fe instanceof ScriptTask) {
				ScriptTask st = (ScriptTask) fe;
				if(isEmpty(st.getScript())) {
					addError(st, "脚本任务没有脚本语句.");
				}
				if(isEmpty(st.getScriptFormat())) {
					addError(st, "脚本任务没有脚本格式.");
				}
			}
			
			if(fe instanceof SendTask) {
				SendTask st = (SendTask) fe;
				if(st.getMessageRef() == null) {
					addError(st, "发送任务没有消息.");
				}
			}

            if(fe instanceof ServiceTask) {
                ServiceTask st = (ServiceTask) fe;
                if(st.getOperationRef() == null) {
                    addError(st, "服务任务没有操作.");
                }
            }
			
			if(fe instanceof UserTask) {
				UserTask ut = (UserTask) fe;
				String taskName = null;
				Iterator<FeatureMap.Entry> utiter = ut.getAnyAttribute().iterator();
				boolean foundTaskName = false;
		        while(utiter.hasNext()) {
		            FeatureMap.Entry entry = utiter.next();
		            if(entry.getEStructuralFeature().getName().equals("taskName")) {
		            	foundTaskName = true;
		            	taskName = (String) entry.getValue();
		            	if(isEmpty(taskName)) {
		            		addError(ut, "用户任务没有任务名称.");
		            	}
		            }
		        }
		        if(!foundTaskName) {
		        	addError(ut, "用户任务没有任务名称.");
		        } 
//		        else {
//		        	if(taskName != null) {
//		        		String[] packageAssetInfo = ServletUtil.findPackageAndAssetInfo(uuid, profile);
//		        		String taskFormName = taskName + "-taskform";
//		        		if(!ServletUtil.assetExistsInGuvnor(packageAssetInfo[0], taskFormName, profile)) {
//		        			addError(ut, "用户任务没有表单定义.");
//		        		}
//		        	} 
//		        }
		        
		        // simulation validation
		        if(defaultScenario != null && defaultScenario.getElementParameters() != null) {
		        	for(ElementParametersType eleType : defaultScenario.getElementParameters()) {
		        		if(eleType.getElementId().equals(ut.getId())) {
		        			if(eleType.getResourceParameters() != null) {
	        					ResourceParameters resourceParams = eleType.getResourceParameters();
	        					if(resourceParams.getQuantity() != null) {
	        						FloatingParameterType quantityVal = (FloatingParameterType) resourceParams.getQuantity().getParameterValue().get(0);
	        						double val = quantityVal.getValue();
	        						if(val < 0) {
	        							addError(ut, "职员必须是可用的.");
	        						}
	        					}
	        				}
		        		}
		        	}
		        }
		    }
			
			if(fe instanceof Task) {
				Task ta = (Task) fe;
				
				// simulation validation
				if(defaultScenario != null && defaultScenario.getElementParameters() != null) {
					for(ElementParametersType eleType : defaultScenario.getElementParameters()) {
						if(eleType.getElementId().equals(ta.getId())) {
	        				if(eleType.getCostParameters() != null) {
	        					CostParameters costParams = eleType.getCostParameters();
	        					if(costParams.getUnitCost() != null) {
	        						DecimalParameterType unitCostVal = (DecimalParameterType) costParams.getUnitCost().getParameterValue().get(0);
	        						BigDecimal val = unitCostVal.getValue();
	        						if(val.doubleValue() < 0) {
	        							addError(ta, "每个时间单位必须是可用的.");
	        						}
	        					}
	        				}
	        				if(eleType.getResourceParameters() != null) {
	        					ResourceParameters resourceParams = eleType.getResourceParameters();
	        					if(resourceParams.getWorkinghours() != null) {
	        						FloatingParameterType workingHoursVal = (FloatingParameterType) resourceParams.getWorkinghours().getParameterValue().get(0);
	        						if(workingHoursVal.getValue() < 0) {
	        							addError(ta, "工作时间必须大于0.");
	        						}
	        					}
	        				}
	        			}
					}
				}
			}
			
			if(fe instanceof CatchEvent) {
				CatchEvent event = (CatchEvent) fe;
				List<EventDefinition> eventdefs = event.getEventDefinitions();
				for(EventDefinition ed : eventdefs) {
    				if(ed instanceof TimerEventDefinition) {
    	                TimerEventDefinition ted = (TimerEventDefinition) ed;
    	                boolean gotTimerDef = (ted.getTimeDate() != null || ted.getTimeDuration() != null || ted.getTimeCycle() != null);
    	                if(!gotTimerDef) {
    	                	addError(event, "异常信息:没有设置日期时间.");
	    	                addError(event, "异常信息:没有设置持续时间.");
	    	                addError(event, "异常信息:没有设置时间周期.");
    	                }
    	            } else if( ed instanceof SignalEventDefinition) {
    	                if(((SignalEventDefinition) ed).getSignalRef() == null) {
    	                	addError(event, "异常信息:没有设置信号参数.");
    	                }
    	            } else if( ed instanceof ErrorEventDefinition) {
    	                if(((ErrorEventDefinition) ed).getErrorRef() == null || ((ErrorEventDefinition) ed).getErrorRef().getErrorCode() == null) {
    	                	addError(event, "异常信息:没有设置错误条件.");
    	                }
    	            } else if( ed instanceof ConditionalEventDefinition ) {
    	                FormalExpression conditionalExp = (FormalExpression) ((ConditionalEventDefinition) ed).getCondition();
    	                if(conditionalExp.getBody() == null) {
    	                	addError(event, "异常信息:没有设置条件表达式.");
    	                }
    	            } else if( ed instanceof EscalationEventDefinition ) {
    	                if(((EscalationEventDefinition) ed).getEscalationRef() == null) {
    	                	addError(event, "异常信息:没有设置 escalationref.");
    	                }
    	            } else if( ed instanceof MessageEventDefinition) {
    	                if(((MessageEventDefinition) ed).getMessageRef() == null) {
    	                    addError(event, "异常信息:没有设置 messageref.");
    	                }
    	            }  else if( ed instanceof CompensateEventDefinition) {
    	                if(((CompensateEventDefinition) ed).getActivityRef() == null) {
    	                	addError(event, "异常信息:没有设置 activityref.");
    	                }
    	            } 
				}
			}
			
			if(fe instanceof ThrowEvent) {
				ThrowEvent event = (ThrowEvent) fe;
				List<EventDefinition> eventdefs = event.getEventDefinitions();
		        for(EventDefinition ed : eventdefs) {
		            if(ed instanceof TimerEventDefinition) {
		                TimerEventDefinition ted = (TimerEventDefinition) ed;
		                if(ted.getTimeDate() == null) {
		                	addError(event, "抛出异常:没有设置日期时间.");
		                }
		                if(ted.getTimeDuration() == null) {
		                	addError(event, "抛出异常:没有设置持续时间.");
		                }
		                if(ted.getTimeCycle() != null) {
		                	addError(event, "抛出异常:没有设置时间周期.");
		                }
		            } else if( ed instanceof SignalEventDefinition) {
		                if(((SignalEventDefinition) ed).getSignalRef() == null) {
		                	addError(event, "抛出异常:没有设置信号参数.");
		                }
		            } else if( ed instanceof ErrorEventDefinition) {
		                if(((ErrorEventDefinition) ed).getErrorRef() == null || ((ErrorEventDefinition) ed).getErrorRef().getErrorCode() == null) {
		                	addError(event, "爆出异常:没有设置错误条件.");
		                }
		            } else if( ed instanceof ConditionalEventDefinition ) {
		                FormalExpression conditionalExp = (FormalExpression) ((ConditionalEventDefinition) ed).getCondition();
		                if(conditionalExp.getBody() == null) {
		                	addError(event, "抛出异常:没有设置条件表达式.");
		                }
		            } else if( ed instanceof EscalationEventDefinition ) {
		                if(((EscalationEventDefinition) ed).getEscalationRef() == null) {
		                	addError(event, "抛出异常:没有设置 conditional escalationref.");
		                }
		            } else if( ed instanceof MessageEventDefinition) {
		                if(((MessageEventDefinition) ed).getMessageRef() == null) {
		                	addError(event, "抛出异常:没有设置 conditional messageref.");
		                }
		            }  else if( ed instanceof CompensateEventDefinition) {
		                if(((CompensateEventDefinition) ed).getActivityRef() == null) {
		                	addError(event, "抛出异常:没有设置 conditional activityref.");
		                }
		            }  
		        }
			}
			
			if(fe instanceof SequenceFlow) {
				SequenceFlow sf = (SequenceFlow) fe;
				if(sf.getSourceRef() == null) {
					addError((SequenceFlow) fe, "一边必须设置一个源节点.");
				}
				if(sf.getTargetRef() == null) {
					addError((SequenceFlow) fe, "一边必须设置一个目标节点.");
				}
			}
			
			if(fe instanceof Gateway) {
				Gateway gw = (Gateway) fe;
				if(gw.getGatewayDirection() == null || gw.getGatewayDirection().getValue() == GatewayDirection.UNSPECIFIED.getValue()) {
					addError((Gateway) fe, "网关没有指定一个有效的方向.");
				}
				if(gw instanceof ExclusiveGateway) {
					if(gw.getGatewayDirection().getValue() != GatewayDirection.DIVERGING.getValue() && gw.getGatewayDirection().getValue() != GatewayDirection.CONVERGING.getValue()) {
						addError((Gateway) fe, "互斥网关方向不可用. 应该是 '合并' 或 '分支'.");
					}
				}
				if(gw instanceof EventBasedGateway) {
					if(gw.getGatewayDirection().getValue() != GatewayDirection.DIVERGING.getValue()) {
						addError((Gateway) fe, "事件网关方向不可用. 应该是 '分支'.");
					}
				}
				if(gw instanceof ParallelGateway) {
					if(gw.getGatewayDirection().getValue() != GatewayDirection.DIVERGING.getValue() && gw.getGatewayDirection().getValue() != GatewayDirection.CONVERGING.getValue()) {
						addError((Gateway) fe, "并行网关方向不可用. 应该是 '合并' 或 '分支'.");
					}
				}
				if(gw instanceof InclusiveGateway) {
					if(gw.getGatewayDirection().getValue() != GatewayDirection.DIVERGING.getValue()) {
						addError((Gateway) fe, "包容型网关方向不可用. 应该是 '分支'.");
					}
				}
				if(gw instanceof ComplexGateway) {
					if(gw.getGatewayDirection().getValue() != GatewayDirection.DIVERGING.getValue() && gw.getGatewayDirection().getValue() != GatewayDirection.CONVERGING.getValue()) {
						addError((Gateway) fe, "复合型网关方向不可用. 应该是 '合并' 或 '分支'.");
					}
				}
				// simulation validation
				if(!(gw instanceof ParallelGateway)) {
					List<SequenceFlow> outgoingGwSequenceFlows = gw.getOutgoing();
					if(outgoingGwSequenceFlows != null && outgoingGwSequenceFlows.size() > 0) {
						double sum = 0;
						for(SequenceFlow sf : outgoingGwSequenceFlows) {
					        	if(defaultScenario.getElementParameters() != null) {
					        		for(ElementParametersType eleType : defaultScenario.getElementParameters()) {
					        			if(eleType.getElementId().equals(sf.getId())) {
					        				if(eleType.getControlParameters() != null && eleType.getControlParameters().getProbability() != null) {
					        					FloatingParameterType valType = (FloatingParameterType) eleType.getControlParameters().getProbability().getParameterValue().get(0);
				                    			if(valType.getValue() < 0) {
				                    				addError(sf, "概率应该是大约0.");
				                    			} else {
				                    				sum += valType.getValue();
				                    			}
					        				} else {
					        					addError(sf, "顺序流没有概率定义.");
					        				}
					        			}
					        		}
					        	}
						}
//						if(sum != 100) {
//							addError(gw, "所有顺序流的概率总和必须是100.");
//						}
					}
				}
			}
			
			if(fe instanceof CallActivity) {
				CallActivity ca = (CallActivity) fe;
				if(ca.getCalledElement() == null || ca.getCalledElement().length() < 1) {
					addError((CallActivity) fe, "可重用子流程没有指定元素名称.");
				} else {
				    boolean foundCalledElementProcess = false;
				    List<String> allPackageNames = ServletUtil.getPackageNamesFromGuvnor(profile);
				    for (String packageName : allPackageNames) {
				        List<String> allProcessesInPackage = ServletUtil.getAllProcessesInPackage(packageName, profile);
				        for(String p : allProcessesInPackage) {
				            String processContent = ServletUtil.getProcessSourceContent(packageName, p, profile);
				            Pattern pattern = Pattern.compile("<\\S*process[\\s\\S]*id=\"" + ca.getCalledElement() + "\"", Pattern.MULTILINE);
				            Matcher m = pattern.matcher(processContent);
				            if(m.find()) {
				                foundCalledElementProcess = true;
				                break;
				            }
				        }
				        if (foundCalledElementProcess) {
				            break;
				        }
	        		}
	        		if(!foundCalledElementProcess) {
	        			addError((CallActivity) fe, "不存在的流程id=" + ca.getCalledElement() + ".");
	        		}
				}
			}
			
			if(fe instanceof DataObject) {
				DataObject dao = (DataObject) fe;
				if(dao.getName() == null || dao.getName().length() < 1) {
					addError((DataObject) fe, "数据对象没有指定名称.");
				} else {
					if(containsWhiteSpace(dao.getName())) {
						addError((DataObject) fe, "数据对象名称包含空格.");
					}
				}
			}
			
			if(fe instanceof SubProcess) {
				checkFlowElements((SubProcess) fe, process, defaultScenario);
			}
		}
	}

	public Map<String, List<String>> getErrors() {
		return errors;
	}

	public JSONObject getErrorsAsJson() {
		JSONObject jsonObject = new JSONObject();
		for (Entry<String,List<String>> error: this.getErrors().entrySet()) {
			try {
				jsonObject.put(error.getKey(), error.getValue());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return jsonObject;
	}

	public boolean errorsFound() {
		return errors.size() > 0;
	}

	public void clearErrors() {
		errors.clear();
	}
	
	private void addError(BaseElement element, String error) {
		addError(element.getId(), error);
	}
	
	private void addError(String resourceId, String error) {
		if(errors.containsKey(resourceId) && errors.get(resourceId) != null) {
			errors.get(resourceId).add(error);
		} else {
			List<String> value = new ArrayList<String>();
			value.add(error);
			errors.put(resourceId, value);
		}
	}
	
	private static boolean isEmpty(final CharSequence str) {
		if ( str == null || str.length() == 0 ) {
			return true;
	    }
	    for ( int i = 0, length = str.length(); i < length; i++ ) {
	    	if ( str.charAt( i ) != ' ' ) {
	    		return false;
	        }
	    }
	    return true;
	}
	
    
    private boolean isAdHocProcess(Process process) {
        Iterator<FeatureMap.Entry> iter = process.getAnyAttribute().iterator();
        while(iter.hasNext()) {
            FeatureMap.Entry entry = iter.next();
            if(entry.getEStructuralFeature().getName().equals("adHoc")) {
            	return Boolean.parseBoolean(((String)entry.getValue()).trim());
            }
        }
        return false;
    }
    
    private boolean containsWhiteSpace(String testString){
        if(testString != null){
            for(int i = 0; i < testString.length(); i++){
                if(Character.isWhitespace(testString.charAt(i))){
                    return true;
                }
            }
        }
        return false;
    }
    
    private Scenario getDefaultScenario(Definitions def) {
    	if(def.getRelationships() != null && def.getRelationships().size() > 0) {
        	// current support for single relationship
        	Relationship relationship = def.getRelationships().get(0);
        	for(ExtensionAttributeValue extattrval : relationship.getExtensionValues()) {
                FeatureMap extensionElements = extattrval.getValue();
                @SuppressWarnings("unchecked")
                List<ProcessAnalysisDataType> processAnalysisExtensions = (List<ProcessAnalysisDataType>) extensionElements.get(DroolsPackage.Literals.DOCUMENT_ROOT__PROCESS_ANALYSIS_DATA, true);
                if(processAnalysisExtensions != null && processAnalysisExtensions.size() > 0) {
                	ProcessAnalysisDataType processAnalysis = processAnalysisExtensions.get(0);
                	if(processAnalysis.getScenario() != null && processAnalysis.getScenario().size() > 0) {
                		return processAnalysis.getScenario().get(0);
                	}
                }
        	}
        }
    	return null;
    }
}
