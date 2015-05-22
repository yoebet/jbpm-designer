package org.jbpm.designer.test.bpmn2;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.OutputStream;
import java.io.Reader;

import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.ImageTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;

public class Diagraph {

	public static void main(String[] args) throws FileNotFoundException,
			TranscoderException {

		String svgFile = "E:/process-f.svg";
		String outFile = "E:/process-f.png";

		PNGTranscoder t = new PNGTranscoder();
		t.addTranscodingHint(ImageTranscoder.KEY_MEDIA, "screen");
		Reader reader=new FileReader(svgFile);
		TranscoderInput input = new TranscoderInput(reader);
		OutputStream os = new FileOutputStream(outFile);
		TranscoderOutput output = new TranscoderOutput(os);
		t.transcode(input, output);
	}
}
