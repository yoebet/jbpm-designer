package org.jbpm.designer.test;


import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.apache.commons.codec.binary.Base64;

public class R {

	static String packagesBase = "http://localhost:8080/drools-guvnor/rest/packages/";

	public static InputStream getImageInstream(String urlLocation,
			String requestMethod, String user, String pass) throws Exception {
		URL url = new URL(urlLocation);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();

		connection.setRequestMethod(requestMethod);
		connection
				.setRequestProperty(
						"Accept",
						"text/html,application/xhtml+xml,application/xml,application/json,application/octet-stream,text/json,text/plain;q=0.9,*/*;q=0.8");

		connection.setRequestProperty("charset", "UTF-8");
		connection.setReadTimeout(5 * 1000);

		applyAuth(user, pass, connection);
		connection.connect();
		return connection.getInputStream();
	}

	public static void applyAuth(String user, String pass,
			HttpURLConnection connection) {
		if (user != null && user.trim().length() > 0 && pass != null
				&& pass.length() > 0) {
			String auth = user + ":" + pass;
			connection.setRequestProperty("Authorization",
					"Basic " + Base64.encodeBase64String(auth.getBytes()));
		}
	}

	public static void getIcon() throws Exception {
		// defaultlogicon
		String icon = packagesBase + URLEncoder.encode("s2.国航01", "UTF-8")
				+ "/assets/defaultservicenodeicon/binary/";
		InputStream iconStream = getImageInstream(icon, "GET", "admin", "admin");
		byte[] bytes = new byte[iconStream.available()];
		iconStream.read(bytes);
		String dataEncoded = Base64.encodeBase64String(bytes);
		dataEncoded = dataEncoded.replaceAll("\\s", "");
		String iconEncoded = "data:image/png;base64," + dataEncoded;
		System.out.println(iconEncoded);
	}

	public static void deleteWid() throws Exception {
		String icon = packagesBase + URLEncoder.encode("s2.国航01", "UTF-8")
				+ "/assets/WorkDefinitions0";
		InputStream iconStream = getImageInstream(icon, "DELETE", "admin",
				"admin");
		int len = iconStream.available();
		System.out.println(len);
	}

	public static void main(String[] args) throws Exception {

	}

}
