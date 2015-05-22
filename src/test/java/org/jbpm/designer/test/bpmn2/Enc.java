package org.jbpm.designer.test.bpmn2;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class Enc {

	public static void main(String[] args) throws UnsupportedEncodingException {
		String icon="R0lGODlhEAAQANUAAChilmd9qW2DrXeMtJiYkZuajqGeiqZrEKehh6m30qyjhK1yErCmgbOpfrZ8FLmter2EFr+wd8HG2ca0ceDq9+Ps+Ojv+Ovx+fL1+vb4+/j5/Pvll/vusPvyufz62/797wAAAAAA\r\n" + 
				"		AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\r\n" + 
				"		AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAACAALAAAAAAQABAAAAaAQJBw\r\n" + 
				"		SCwaJ8ikclLUOJ9QJtEpqVolGekQAsl4v16tEPKBYKpnCSYC4ro/ZYx8/oB47vi7GcDHPBwdgYKB\r\n" + 
				"		HA4DAgEXDQsbjY6NCxd8ABcMIAeYmI0HFp2eCkUHGwcVCQmlpwihpBUVFK2vBkWtprWmFbJEFK+7\r\n" + 
				"		rrsUBUUEw8TFBUEAOw==";
		String eicon=URLEncoder.encode(icon,"UTF-8");
		System.out.println(eicon);
		String ticon=icon.replaceAll("\\s", "");
		System.out.println(ticon);
	}

}
