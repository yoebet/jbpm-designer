package org.jbpm.designer.web.server;

import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;

import org.apache.log4j.Logger;
import org.jbpm.designer.web.profile.IDiagramProfile;
import org.jbpm.designer.web.profile.impl.ExternalInfo;

/** 
 * 
 * Queries repository to get the process information.
 * 
 * @author Tihomir Surdilovic
 */
public class ProcessInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger _logger = Logger.getLogger(ProcessInfoServlet.class);
	
	@Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }
	
	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
		String uuid = req.getParameter("uuid");
        String profileName = req.getParameter("profile");
        
        IDiagramProfile profile = ServletUtil.getProfile(req, profileName, getServletContext());

    	resp.setCharacterEncoding("UTF-8");
    	resp.setContentType("text/html");
		Writer writer=resp.getWriter();
        try {
        	// find out what package the uuid belongs to
        	String[] packageAssetInfo = ServletUtil.findPackageAndAssetInfo(uuid, profile);
        	String packageName = packageAssetInfo[0];
        	String assetName = packageAssetInfo[1];
        	Map<String, String> processInfo = getProcessInfo(packageName, assetName, uuid, profile);
        	writer.write(createHtmlTable(processInfo));
        } catch (Exception e) {
        	//e.printStackTrace();
        	//writer.write("<center><b>Unable to retrieve process information.</b></center>");
        	writer.write("<center>不能获取流程信息</center>");
        }
	}
	
	private String createHtmlTable(Map<String, String> processInfo) {
	
		StringBuffer sb = new StringBuffer();
		sb.append("<table border=\"0\" width=\"100%\">");
		Iterator<String> keyIterator = processInfo.keySet().iterator();
		while(keyIterator.hasNext()) {
			String key = keyIterator.next();
			sb.append("<tr>");
			sb.append("<td class=\"processInfoItemTitle\">").append(key).append("</td>");
			sb.append("<td>").append(processInfo.get(key)).append("</td>");
			sb.append("</tr>");
		}
		sb.append("</table>");
		return sb.toString();
	}
	
	private Map<String, String> getProcessInfo(String packageName, String assetName, String uuid, IDiagramProfile profile) throws Exception {
		Map<String, String> infoMap = new LinkedHashMap<String, String>();
		infoMap.put("流程名称", assetName);
		infoMap.put("所在包",packageName);
		//infoMap.put("格式", "");
		//infoMap.put("说明", "");
		infoMap.put("创建时间", "");
		//infoMap.put("作者", "");
		infoMap.put("上次修改", "");
		infoMap.put("修改备注", "");
		infoMap.put("版本号", "");
		
		String epackageName=URLEncoder.encode(packageName, "UTF-8");
		String eassetName=URLEncoder.encode(assetName, "UTF-8");
		String packagesBase = ExternalInfo.getExternalPackagesBasePath(profile);
		String assetInfoURL = packagesBase+ epackageName + "/assets/" + eassetName;
		
		XMLInputFactory factory = XMLInputFactory.newInstance();
		InputStream is=ServletUtil.getInputStreamForURL(assetInfoURL, "GET", profile);
		
        XMLStreamReader reader = factory.createXMLStreamReader(is, "UTF-8");
        while (reader.hasNext()) {
            if (reader.next() == XMLStreamReader.START_ELEMENT) {
//                if ("format".equals(reader.getLocalName())) {
//                    infoMap.put("格式", reader.getElementText());
//                } else
                if ("checkInComment".equals(reader.getLocalName())) {
                    infoMap.put("修改备注", reader.getElementText());
                } else
                if ("created".equals(reader.getLocalName())) {
					// 2014-04-29T11:30:08.109+08:00
					String tc=reader.getElementText();
					if(tc!=null && tc.length() >= 16){
						// 2014-04-29 11:30
						tc=tc.substring(0,10)+" "+tc.substring(11,16);
					}
                    infoMap.put("创建时间", tc);
                } else
//                if ("note".equals(reader.getLocalName())) {
//                    infoMap.put("说明", reader.getElementText());
//                } else
                //note
//                if ("createdBy".equals(reader.getLocalName())) {
//                    infoMap.put("作者", reader.getElementText());
//                } else
                //lastModified
                if ("published".equals(reader.getLocalName())) {
					String lm=reader.getElementText();
					if(lm!=null && lm.length() >= 16){
						lm=lm.substring(0,10)+" "+lm.substring(11,16);
					}
                    infoMap.put("上次修改", lm);
                } else
                if ("versionNumber".equals(reader.getLocalName())) {
                    infoMap.put("版本号", reader.getElementText());
                }
            }
        }
        return infoMap;
	}
}
