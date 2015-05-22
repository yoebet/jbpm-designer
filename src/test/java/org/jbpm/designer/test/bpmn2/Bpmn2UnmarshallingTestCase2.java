package org.jbpm.designer.test.bpmn2;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertTrue;

import java.io.File;
import java.net.URL;
import java.util.Collections;

import org.eclipse.bpmn2.Definitions;
import org.eclipse.bpmn2.Process;
import org.eclipse.bpmn2.RootElement;
import org.eclipse.bpmn2.Task;
import org.jbpm.designer.bpmn2.impl.Bpmn2JsonUnmarshaller;
import org.junit.Test;

public class Bpmn2UnmarshallingTestCase2 {

	private static File getTestJsonFile(String filename) {
		URL fileURL = Bpmn2UnmarshallingTestCase2.class.getResource(filename);
		return new File(fileURL.getFile());
	}

	//@Test
	public void testUserTaskUnmarshalling() throws Exception {
		Bpmn2JsonUnmarshaller unmarshaller = new Bpmn2JsonUnmarshaller();
		Definitions definitions = ((Definitions) unmarshaller
				.unmarshall(getTestJsonFile("userTask2.json"), "")
				.getContents().get(0));
		Process process = getRootProcess(definitions);
		assertTrue(process.getFlowElements().get(0) instanceof Task);
		Task task = (Task) process.getFlowElements().get(0);
		definitions.eResource().save(System.out, Collections.emptyMap());
	}

	@Test
	public void testServiceTaskUnmarshalling() throws Exception {
		Bpmn2JsonUnmarshaller unmarshaller = new Bpmn2JsonUnmarshaller();
		Definitions definitions = ((Definitions) unmarshaller
				.unmarshall(getTestJsonFile("serviceTask2.json"), "")
				.getContents().get(0));
		Process process = getRootProcess(definitions);
		assertTrue(process.getFlowElements().get(0) instanceof Task);
		Task task = (Task) process.getFlowElements().get(0);
		definitions.eResource().save(System.out, Collections.emptyMap());
	}

	private Process getRootProcess(Definitions def) {
		for (RootElement nextRootElement : def.getRootElements()) {
			if (nextRootElement instanceof Process) {
				return (Process) nextRootElement;
			}
		}
		return null;
	}
}
