import org.drools.process.core.datatype.impl.type.StringDataType;
import org.drools.process.core.datatype.impl.type.ObjectDataType;
[
  [
    "name" : "REST",
    "parameters" : [
      "Username" : new StringDataType(),
      "Password" : new StringDataType()
    ],
    "results" : [
      "Status" : new StringDataType(),
      "Result" : new StringDataType()
    ],
    "displayName" : "REST服务",
    "icon" : "$protocol$://$host$/$subdomain$/rest/packages/$pkgName$/assets/defaultservicenodeicon/binary"
  ],
  
  [
    "name" : "Java",
    "results" : [
      "Result" : new ObjectDataType()
    ],
    "displayName" : "Java调用",
    "icon" : "$protocol$://$host$/$subdomain$/rest/packages/$pkgName$/assets/defaultservicenodeicon/binary"
  ],
  
  [
    "name" : "Email",
    "parameters" : [
      "From" : new StringDataType()
    ],
    "displayName" : "发送邮件",
    "icon" : "$protocol$://$host$/$subdomain$/rest/packages/$pkgName$/assets/defaultemailicon/binary"
  ],
  
  [
    "name" : "Exec",
    "displayName" : "本地脚本",
    "icon" : "$protocol$://$host$/$subdomain$/rest/packages/$pkgName$/assets/defaultlogicon/binary"
  ]
]
