//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d-1);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_576","HYPE_dtl_576",!0==(null!=a&&10>a||false==!0)?"HYPE-576.full.min.js":"HYPE-576.thin.min.js"),false==!0&&(a=a||l("HYPE_w_576","HYPE_wdtl_576","HYPE-576.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"InitApp",source:"function(hypeDocument, element, event) {\n\tvar tmapp = localStorage.getItem(\"tmapp\");\n\t\n\tif (tmapp!= null) {\n\t\twindow.TMC = JSON.parse(tmapp);\n\t} else {\n\t\thypeDocument.functions().ResetData(hypeDocument, element, event);\n\t}\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"51"},{name:"UpdateDisplay",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById('rating').innerText = window.TMC.rating;\n\thypeDocument.getElementById('generation').innerText = window.TMC.generation;\n\t\n\thypeDocument.getElementById('megacreditsProd').innerText = window.TMC.megacreditsProd;\n\thypeDocument.getElementById('steelProd').innerText = window.TMC.steelProd;\n\thypeDocument.getElementById('titaniumProd').innerText = window.TMC.titaniumProd;\n\thypeDocument.getElementById('plantsProd').innerText = window.TMC.plantsProd;\n\thypeDocument.getElementById('energyProd').innerText = window.TMC.energyProd;\n\thypeDocument.getElementById('heatProd').innerText = window.TMC.heatProd;\n\n\thypeDocument.getElementById('megacreditsAmt').innerText = window.TMC.megacredits;\n\thypeDocument.getElementById('steelAmt').innerText = window.TMC.steel;\n\thypeDocument.getElementById('titaniumAmt').innerText = window.TMC.titanium;\n\thypeDocument.getElementById('plantsAmt').innerText = window.TMC.plants;\n\thypeDocument.getElementById('energyAmt').innerText = window.TMC.energy;\n\thypeDocument.getElementById('heatAmt').innerText = window.TMC.heat;\n\t\n\thypeDocument.functions().SaveData(hypeDocument, element, event);\n}",identifier:"52"},{name:"NextGeneration",source:"function(hypeDocument, element, event) {\twindow.TMC.generation = window.TMC.generation + 1;\n\t\n\twindow.TMC.heat = window.TMC.heat + window.TMC.energy;\n\twindow.TMC.energy = 0;\n\t\n\twindow.TMC.megacredits = window.TMC.megacredits + window.TMC.megacreditsProd + window.TMC.rating;\n\twindow.TMC.steel = window.TMC.steel + window.TMC.steelProd;\n\twindow.TMC.titanium = window.TMC.titanium + window.TMC.titaniumProd;\n\twindow.TMC.plants = window.TMC.plants + window.TMC.plantsProd;\n\twindow.TMC.energy = window.TMC.energy + window.TMC.energyProd;\n\twindow.TMC.heat = window.TMC.heat + window.TMC.heatProd;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"53"},{name:"IncrementProduction",source:"function(hypeDocument, element, event) {\tvar resource = element.id.substring(4);\n\t\n\twindow.TMC[resource] = window.TMC[resource] + 1;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"54"},{name:"DecrementProduction",source:"function(hypeDocument, element, event) {\tvar resource = element.id.substring(4);\n\t\n\tif (resource != \"megacreditsProd\" && window.TMC[resource] > 0) {\n\t\twindow.TMC[resource] = window.TMC[resource] - 1;\n\t}\n\t\n\tif (resource == \"megacreditsProd\" && window.TMC[resource] > -5) {\n\t\twindow.TMC[resource] = window.TMC[resource] - 1;\n\t}\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"55"},{name:"SpendResource",source:"function(hypeDocument, element, event) {\t\n\t\n}",identifier:"56"},{name:"IncrementRating",source:"function(hypeDocument, element, event) {\twindow.TMC.rating = window.TMC.rating + 1;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"57"},{name:"SaveData",source:"function(hypeDocument, element, event) {\tlocalStorage.setItem(\"tmapp\", JSON.stringify(window.TMC));\n}",identifier:"92"},{name:"ResetData",source:"function(hypeDocument, element, event) {\twindow.TMC = {\n\t\trating          : 20,\n\t\tgeneration      : 1,\n\t\tmegacredits     : 0,\n\t\tsteel           : 0,\n\t\ttitanium        : 0,\n\t\tplants          : 0,\n\t\tenergy          : 0,\n\t\theat            : 0,\n\t\tmegacreditsProd : 0,\n\t\tsteelProd       : 0,\n\t\ttitaniumProd    : 0,\n\t\tplantsProd      : 0,\n\t\tenergyProd      : 0,\n\t\theatProd        : 0\n\t}\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"95"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_576(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Main",o:"1",X:[0]},{n:"Spend",o:"61",X:[1]}],[{A:{a:[{p:4,h:"51"}]},o:"3",p:"600px",cA:false,Y:375,Z:667,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["116","143","140","98","97","152","146","150","99","106","103","107","111","113","100","115","110","117","114","119","129","126","101","118","123","135","132","139","125","122","102","121","120","131","128","134","145","142","105","124","138","127","148","130","141","137","109","104","133","147","144","136","112","108","149","153","151"],n:"Untitled Layout","_":0,v:{"148":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:36,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:461},"106":{b:128,z:2,K:"Solid",c:325,L:"Solid",d:19,aS:8,M:1,bD:"none",N:1,aT:8,O:1,g:"#FED802",aU:8,P:1,aV:8,j:"absolute",aI:0,k:"div",aJ:0,aK:5,aL:5,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,v:"bold",G:"#000000",w:"Megacredits",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"113":{b:170,z:5,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-megacreditsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"120":{b:338,z:27,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"149":{b:586,z:44,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-heatProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"121":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"titaniumAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:50,aS:8,aT:8,a:226,F:"center",b:335},"107":{b:170,z:3,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-megacreditsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"114":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:18,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:212},"122":{b:338,z:28,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-titaniumProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"108":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"heatAmt",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:53,aS:8,aT:8,a:226,F:"center",b:583},"115":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"megacreditsAmt",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:48,aS:8,aT:8,a:226,F:"center",b:167},"116":{aU:8,G:"#007AFF",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",aP:"pointer",w:"New",aA:{a:[{p:4,h:"95"}]},x:"visible",yy:"nowrap",j:"absolute",y:"preserve",k:"div",dB:"button",z:59,aS:8,aT:8,a:310,b:10},"123":{b:254,z:21,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"130":{b:503,z:38,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-energyProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"109":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:57,aS:8,aT:8,a:203,F:"center",b:500},"117":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#A5744B",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Steel",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:19,aS:8,aK:5,aT:8,a:16,aL:5,b:212},"124":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"plantsAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:51,aS:8,aT:8,a:226,F:"center",b:417},"131":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#8BBF3F",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Plants",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:31,aS:8,aK:5,aT:8,a:16,aL:5,b:378},"118":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"steelAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:49,aS:8,aT:8,a:226,F:"center",b:251},"125":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"titaniumProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:29,aS:8,aT:8,a:86,F:"center",b:335},"132":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:24,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:296},"140":{c:164,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:8,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:44},"119":{b:254,z:20,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-steelProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"126":{b:254,z:22,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-steelProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"133":{b:503,z:39,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"141":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"energyProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:41,aS:8,aT:8,a:86,F:"center",b:500},"127":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#9E5EA6",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Energy",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:37,aS:8,aK:5,aT:8,a:16,aL:5,b:461},"134":{b:420,z:32,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-plantsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"-\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"135":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#929292",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Titanium",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:25,aS:8,aK:5,aT:8,a:16,aL:5,b:296},"142":{b:420,z:34,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-plantsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"97":{c:169,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:14,B:"#000000",D:"#000000",aK:5,P:1,a:188,aL:5,b:44},"100":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:203,F:"center",b:167},"128":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:30,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:378},"98":{G:"#000000",aU:8,c:155,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",M:1,v:"bold",w:"Generation",j:"absolute",x:"visible",k:"div",y:"preserve",z:15,aS:8,aT:8,a:188,b:44},"129":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"steelProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:23,aS:8,aT:8,a:86,F:"center",b:251},"136":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"heatProd",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:47,aS:8,aT:8,a:86,F:"center",b:583},"143":{G:"#000000",aU:8,c:150,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",M:1,v:"bold",w:"Rating",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:16,b:44},"99":{b:86,z:16,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"53"}]},F:"center",G:"#000000",aP:"pointer",w:"Next<br>",x:"visible",I:"Solid",a:272,y:"preserve",J:"Solid"},"101":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:54,aS:8,aT:8,a:203,F:"center",b:251},"150":{b:86,z:12,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-rating",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"57"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:97,y:"preserve",J:"Solid"},"137":{b:503,z:40,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-energyProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"144":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:42,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:544},"102":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:55,aS:8,aT:8,a:203,F:"center",b:335},"151":{b:586,z:45,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"138":{b:420,z:33,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"103":{G:"",c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",O:1,j:"absolute",aJ:5,k:"div",C:"#000000",z:1,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:128},"110":{b:170,z:4,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"61"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"145":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"plantsProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:35,aS:8,aT:8,a:86,F:"center",b:417},"152":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"rating",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:13,aS:8,aT:8,a:40,F:"center",b:83},"139":{b:338,z:26,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-titaniumProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"104":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"energyAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:52,aS:8,aT:8,a:226,F:"center",b:500},"111":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"megacreditsProd",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:86,F:"center",b:167},"146":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"generation",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:215,F:"center",b:83},"153":{b:586,z:46,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-heatProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"147":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#E84A27",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Heat",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:43,aS:8,aK:5,aT:8,a:16,aL:5,b:544},"105":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:56,aS:8,aT:8,a:203,F:"center",b:417},"112":{G:"#000000",aU:8,c:11,aV:8,d:19,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",w:"&gt;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:58,aS:8,aT:8,a:203,F:"center",b:583}}},{o:"63",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["162","156","164","165","155","159","157","161","163","166","154","158","160"],n:"Untitled Layout","_":1,v:{"156":{G:"#000000",aU:8,c:285,aV:8,d:52,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:24,Z:"break-word",w:"How many mega credits do you want to spend?",j:"absolute",x:"visible",k:"div",y:"preserve",z:15,aS:8,aT:8,a:36,F:"center",b:89},"162":{b:16,z:13,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#000000",aP:"pointer",w:"Back",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"159":{b:300,z:12,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"9",x:"visible",I:"Solid",a:234,y:"preserve",J:"Solid"},"154":{b:468,z:5,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"2",x:"visible",I:"Solid",a:149,y:"preserve",J:"Solid"},"160":{b:552,z:2,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"0",x:"visible",I:"Solid",a:149,y:"preserve",J:"Solid"},"165":{b:300,z:10,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"7",x:"visible",I:"Solid",a:64,y:"preserve",J:"Solid"},"157":{b:384,z:7,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"4",x:"visible",I:"Solid",a:64,y:"preserve",J:"Solid"},"163":{b:384,z:9,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"6",x:"visible",I:"Solid",a:234,y:"preserve",J:"Solid"},"166":{b:468,z:4,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"1",x:"visible",I:"Solid",a:64,y:"preserve",J:"Solid"},"161":{b:384,z:8,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"5",x:"visible",I:"Solid",a:149,y:"preserve",J:"Solid"},"155":{b:300,z:11,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"8",x:"visible",I:"Solid",a:149,y:"preserve",J:"Solid"},"164":{aV:8,w:"31",x:"visible",a:158,Z:"break-word",b:194,y:"preserve",j:"absolute",z:14,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:36,r:"inline",aU:8,G:"#000000"},"158":{b:468,z:6,K:"Solid",c:61,L:"Solid",d:61,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:48,F:"center",G:"#000000",aP:"pointer",w:"3",x:"visible",I:"Solid",a:234,y:"preserve",J:"Solid"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
