//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d-1);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_578","HYPE_dtl_578",!0==(null!=a&&10>a||false==!0)?"HYPE-578.full.min.js":"HYPE-578.thin.min.js"),false==!0&&(a=a||l("HYPE_w_578","HYPE_wdtl_578","HYPE-578.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"InitApp",source:"function(hypeDocument, element, event) {\n\tvar tmapp = localStorage.getItem(\"tmapp\");\n\t\n\tif (tmapp!= null) {\n\t\twindow.TMC = JSON.parse(tmapp);\n\t} else {\n\t\thypeDocument.functions().ResetData(hypeDocument, element, event);\n\t}\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"51"},{name:"UpdateDisplay",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById('rating').innerText = window.TMC.rating;\n\thypeDocument.getElementById('generation').innerText = window.TMC.generation;\n\t\n\thypeDocument.getElementById('megacreditsProd').innerText = window.TMC.megacreditsProd;\n\thypeDocument.getElementById('steelProd').innerText = window.TMC.steelProd;\n\thypeDocument.getElementById('titaniumProd').innerText = window.TMC.titaniumProd;\n\thypeDocument.getElementById('plantsProd').innerText = window.TMC.plantsProd;\n\thypeDocument.getElementById('energyProd').innerText = window.TMC.energyProd;\n\thypeDocument.getElementById('heatProd').innerText = window.TMC.heatProd;\n\n\thypeDocument.getElementById('megacreditsAmt').innerText = window.TMC.megacredits;\n\thypeDocument.getElementById('steelAmt').innerText = window.TMC.steel;\n\thypeDocument.getElementById('titaniumAmt').innerText = window.TMC.titanium;\n\thypeDocument.getElementById('plantsAmt').innerText = window.TMC.plants;\n\thypeDocument.getElementById('energyAmt').innerText = window.TMC.energy;\n\thypeDocument.getElementById('heatAmt').innerText = window.TMC.heat;\n\t\n\thypeDocument.functions().SaveData(hypeDocument, element, event);\n}",identifier:"52"},{name:"NextGeneration",source:"function(hypeDocument, element, event) {\twindow.TMC.generation = window.TMC.generation + 1;\n\t\n\twindow.TMC.heat = window.TMC.heat + window.TMC.energy;\n\twindow.TMC.energy = 0;\n\t\n\twindow.TMC.megacredits = window.TMC.megacredits + window.TMC.megacreditsProd + window.TMC.rating;\n\twindow.TMC.steel = window.TMC.steel + window.TMC.steelProd;\n\twindow.TMC.titanium = window.TMC.titanium + window.TMC.titaniumProd;\n\twindow.TMC.plants = window.TMC.plants + window.TMC.plantsProd;\n\twindow.TMC.energy = window.TMC.energy + window.TMC.energyProd;\n\twindow.TMC.heat = window.TMC.heat + window.TMC.heatProd;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"53"},{name:"IncrementProduction",source:"function(hypeDocument, element, event) {\tvar resource = element.id.substring(4);\n\t\n\twindow.TMC[resource] = window.TMC[resource] + 1;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"54"},{name:"DecrementProduction",source:"function(hypeDocument, element, event) {\tvar resource = element.id.substring(4);\n\t\n\tif (resource != \"megacreditsProd\" && window.TMC[resource] > 0) {\n\t\twindow.TMC[resource] = window.TMC[resource] - 1;\n\t}\n\t\n\tif (resource == \"megacreditsProd\" && window.TMC[resource] > -5) {\n\t\twindow.TMC[resource] = window.TMC[resource] - 1;\n\t}\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"55"},{name:"ShowKeypad",source:"function(hypeDocument, element, event) {\twindow.TMC.spendResource = element.id.substring(4);\n\thypeDocument.functions().InitializeKeypad(hypeDocument, element, event);\n}",identifier:"56"},{name:"IncrementRating",source:"function(hypeDocument, element, event) {\twindow.TMC.rating = window.TMC.rating + 1;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"57"},{name:"SaveData",source:"function(hypeDocument, element, event) {\tlocalStorage.setItem(\"tmapp\", JSON.stringify(window.TMC));\n}",identifier:"92"},{name:"ResetData",source:"function(hypeDocument, element, event) {\twindow.TMC = {\n\t\trating          : 14,\n\t\tgeneration      : 1,\n\t\tmegacredits     : 0,\n\t\tsteel           : 0,\n\t\ttitanium        : 0,\n\t\tplants          : 0,\n\t\tenergy          : 0,\n\t\theat            : 0,\n\t\tmegacreditsProd : 0,\n\t\tsteelProd       : 0,\n\t\ttitaniumProd    : 0,\n\t\tplantsProd      : 0,\n\t\tenergyProd      : 0,\n\t\theatProd        : 0,\n\t\tspendValue      : 0,\n\t\tspendResource   : \"\"\n\t}\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"95"},{name:"EnterKeypadDigit",source:"function(hypeDocument, element, event) {\tif (window.TMC.spendValue > 0) {\n\t\twindow.TMC.spendValue = window.TMC.spendValue + element.id.substring(6);\n\t} else {\n\t\twindow.TMC.spendValue = element.id.substring(6);\n\t}\n\thypeDocument.functions().UpdateKeypad(hypeDocument, element, event);\n}",identifier:"179"},{name:"InitializeKeypad",source:"function(hypeDocument, element, event) {\twindow.TMC.spendValue = 0;\n\thypeDocument.showSceneNamed(\"Spend\");\n\thypeDocument.getElementById(\"keypadSpend\").innerText = \"Spend \" + window.TMC.spendResource;\n\thypeDocument.functions().UpdateKeypad(hypeDocument, element, event);\n}",identifier:"180"},{name:"UpdateKeypad",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"keypadDisplay\").innerText = window.TMC.spendValue;\n}",identifier:"181"},{name:"SpendResource",source:"function(hypeDocument, element, event) {\tif (window.TMC[window.TMC.spendResource] >= window.TMC.spendValue) {\n\t\twindow.TMC[window.TMC.spendResource] = parseInt(window.TMC[window.TMC.spendResource]) - parseInt(window.TMC.spendValue);\n\t\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n\t\thypeDocument.showSceneNamed(\"Main\");\n\t} else {\n\t\talert(\"You don't have enough \" + window.TMC.spendResource + \" to spend that amount\");\n\t}\n}",identifier:"182"},{name:"ChangeKeypadSign",source:"function(hypeDocument, element, event) {\twindow.TMC.spendValue = parseInt(window.TMC.spendValue) * -1;\n\thypeDocument.functions().UpdateKeypad(hypeDocument, element, event);\n}",identifier:"183"},{name:"NewGame",source:"function(hypeDocument, element, event) {\tif(confirm(\"Are you sure you want to reset data and start a new game?\")) {\n\t\thypeDocument.functions().ResetData(hypeDocument, element, event);\n\t}\n}",identifier:"243"},{name:"DecrementRating",source:"function(hypeDocument, element, event) {\twindow.TMC.rating = window.TMC.rating - 1;\n\t\n\thypeDocument.functions().UpdateDisplay(hypeDocument, element, event);\n}",identifier:"247"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_578(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Main",o:"1",X:[0]},{n:"Spend",o:"61",X:[1]}],[{A:{a:[{p:4,h:"51"}]},o:"3",p:"600px",cA:false,Y:375,Z:667,c:"#FFFFFF",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["262","295","292","249","248","304","298","266","302","250","254","252","255","257","259","251","261","258","263","260","265","278","273","275","264","270","287","282","291","272","269","279","268","267","281","277","286","297","294","283","271","290","276","300","280","293","289","274","253","285","299","296","288","284","256","301","305","303"],n:"Untitled Layout","_":0,v:{"267":{b:338,z:28,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-titanium",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"274":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:65,aS:8,aT:8,a:198,F:"center",b:500},"281":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#8BBF3F",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Plants",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:32,aS:8,aK:5,aT:8,a:16,aL:5,b:378},"302":{b:86,z:13,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-rating",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"57"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:135,y:"preserve",J:"Solid"},"282":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:25,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:296},"268":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"titaniumAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:52,aS:8,aT:8,a:239,F:"center",b:335},"275":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:62,aS:8,aT:8,a:198,F:"center",b:251},"303":{b:586,z:47,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-heat",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"283":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:64,aS:8,aT:8,a:198,F:"center",b:417},"290":{b:420,z:34,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-plants",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"269":{b:338,z:29,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-titaniumProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"276":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#9E5EA6",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Energy",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:39,aS:8,aK:5,aT:8,a:16,aL:5,b:461},"304":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"rating",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:14,aS:8,aT:8,a:87,F:"center",b:83},"277":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:31,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:378},"284":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:67,aS:8,aT:8,a:198,F:"center",b:583},"291":{b:338,z:27,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-titaniumProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"305":{b:586,z:48,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-heatProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"278":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"steelProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:24,aS:8,aT:8,a:86,F:"center",b:251},"250":{b:86,z:17,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"53"}]},F:"center",G:"#000000",aP:"pointer",w:"Next<br>",x:"visible",I:"Solid",a:272,y:"preserve",J:"Solid"},"285":{b:503,z:41,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-energy",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"292":{c:193,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:9,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:44},"279":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:63,aS:8,aT:8,a:198,F:"center",b:335},"251":{G:"#000000",aU:8,c:33,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:36,Y:22,Z:"break-word",w:"\u21e2",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:198,F:"center",b:167},"286":{b:420,z:33,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-plantsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"293":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"energyProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:43,aS:8,aT:8,a:86,F:"center",b:500},"287":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#929292",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Titanium",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:26,aS:8,aK:5,aT:8,a:16,aL:5,b:296},"252":{G:"",c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",O:1,j:"absolute",aJ:5,k:"div",C:"#000000",z:1,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:128},"294":{b:420,z:36,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-plantsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"288":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"heatProd",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:49,aS:8,aT:8,a:86,F:"center",b:583},"253":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"energyAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:54,aS:8,aT:8,a:239,F:"center",b:500},"260":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:19,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:212},"295":{G:"#000000",aU:8,c:179,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",M:1,v:"bold",w:"Terraforming Rating",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:16,b:44},"296":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:44,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:544},"254":{b:128,z:2,K:"Solid",c:325,L:"Solid",d:19,aS:8,M:1,bD:"none",N:1,aT:8,O:1,g:"#FED802",aU:8,P:1,aV:8,j:"absolute",aI:0,k:"div",aJ:0,aK:5,aL:5,Z:"break-word",r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,v:"bold",G:"#000000",w:"Megacredits",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"261":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"megacreditsAmt",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:50,aS:8,aT:8,a:241,F:"center",b:167},"289":{b:503,z:42,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-energyProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"297":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"plantsProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:37,aS:8,aT:8,a:86,F:"center",b:417},"248":{c:142,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:15,B:"#000000",D:"#000000",aK:5,P:1,a:215,aL:5,b:44},"255":{b:170,z:3,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-megacreditsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"262":{aU:8,G:"#007AFF",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",aP:"pointer",w:"New Game",aA:{a:[{p:4,h:"243"}]},x:"visible",yy:"nowrap",j:"absolute",y:"preserve",k:"div",dB:"button",z:61,aS:8,aT:8,a:262,F:"right",b:9},"298":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"generation",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:18,aS:8,aT:8,a:215,F:"center",b:83},"270":{b:254,z:22,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-steel",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"249":{G:"#000000",aU:8,c:128,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",M:1,v:"bold",w:"Generation",j:"absolute",x:"visible",k:"div",y:"preserve",z:16,aS:8,aT:8,a:215,b:44},"256":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"heatAmt",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:55,aS:8,aT:8,a:239,F:"center",b:583},"263":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#A5744B",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Steel",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:20,aS:8,aK:5,aT:8,a:16,aL:5,b:212},"299":{G:"#000000",aU:8,c:325,d:19,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",bD:"none",K:"Solid",t:16,g:"#E84A27",L:"Solid",Z:"break-word",M:1,v:"bold",w:"Heat",N:1,j:"absolute",O:1,x:"visible",k:"div",y:"preserve",P:1,z:45,aS:8,aK:5,aT:8,a:16,aL:5,b:544},"264":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"steelAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:51,aS:8,aT:8,a:241,F:"center",b:251},"271":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"plantsAmt",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:53,aS:8,aT:8,a:239,F:"center",b:417},"257":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"megacreditsProd",w:"99<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:86,F:"center",b:167},"258":{b:170,z:4,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"spd-megacredits",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"56"}]},F:"center",G:"#000000",aP:"pointer",w:"$<br>",x:"visible",I:"Solid",a:289,y:"preserve",J:"Solid"},"265":{b:254,z:21,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-steelProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"272":{G:"#000000",aU:8,c:32,d:19,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:18,Z:"break-word",i:"titaniumProd",w:"99",j:"absolute",x:"visible",k:"div",y:"preserve",z:30,aS:8,aT:8,a:86,F:"center",b:335},"300":{c:341,d:76,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,aI:5,A:"#000000",x:"visible",j:"absolute",O:1,aJ:5,k:"div",C:"#000000",z:38,B:"#000000",D:"#000000",aK:5,P:1,a:16,aL:5,b:461},"259":{b:170,z:6,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-megacreditsProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"266":{b:86,z:68,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-rating",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"247"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:24,y:"preserve",J:"Solid"},"273":{b:254,z:23,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"inc-steelProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"54"}]},F:"center",G:"#000000",aP:"pointer",w:"+<br>",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"280":{b:503,z:40,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-energyProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"},"301":{b:586,z:46,K:"Solid",c:46,L:"Solid",d:16,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"dec-heatProd",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"55"}]},F:"center",G:"#000000",aP:"pointer",w:"\u2013",x:"visible",I:"Solid",a:27,y:"preserve",J:"Solid"}}},{o:"63",p:"600px",cA:false,Y:375,Z:667,L:[],c:"#FFFFFF",bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["319","307","320","310","318","317","309","314","311","316","308","313","306","315","312"],n:"Untitled Layout","_":1,v:{"318":{b:122,z:16,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad9",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"9",x:"visible",I:"Solid",a:248,y:"preserve",J:"Solid"},"307":{b:56,z:17,K:"Solid",c:325,L:"Solid",aS:8,d:39,M:1,N:1,aT:8,O:1,g:"#F0F0F0",aU:8,P:1,i:"keypadDisplay",aV:8,j:"absolute",aI:5,k:"div",aJ:5,aK:5,aL:5,A:"#A0A0A0",Y:44,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",t:24,F:"center",G:"#000000",w:"99",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"313":{b:445,z:6,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypadSign",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"183"}]},F:"center",G:"#000000",aP:"pointer",w:"+/-",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"316":{b:337,z:4,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad2",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"2",x:"visible",I:"Solid",a:134,y:"preserve",J:"Solid"},"311":{b:337,z:3,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad1",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"1",x:"visible",I:"Solid",a:17,y:"preserve",J:"Solid"},"319":{aU:8,G:"#007AFF",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",bD:"none",t:16,Z:"break-word",aP:"pointer",w:"Back",aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},x:"visible",yy:"nowrap",j:"absolute",y:"preserve",k:"div",dB:"button",z:10,aS:8,aT:8,a:16,b:14},"308":{b:337,z:5,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad3",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"3",x:"visible",I:"Solid",a:250,y:"preserve",J:"Solid"},"314":{b:229,z:13,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad6",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"6",x:"visible",I:"Solid",a:249,y:"preserve",J:"Solid"},"320":{b:121,z:14,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad7",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"7",x:"visible",I:"Solid",a:17,y:"preserve",J:"Solid"},"317":{b:229,z:11,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad4",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"4",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"306":{b:445,z:7,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad0",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"0",x:"visible",I:"Solid",a:133,y:"preserve",J:"Solid"},"312":{b:553,z:8,K:"Solid",c:329,L:"Solid",d:46,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypadSpend",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:44,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:24,aA:{a:[{p:4,h:"182"}]},F:"center",G:"#000000",aP:"pointer",w:"Spend",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"309":{b:229,z:12,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad5",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"5",x:"visible",I:"Solid",a:133,y:"preserve",J:"Solid"},"310":{b:121,z:15,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypad8",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"179"}]},F:"center",G:"#000000",aP:"pointer",w:"8",x:"visible",I:"Solid",a:133,y:"preserve",J:"Solid"},"315":{b:445,z:9,K:"Solid",c:96,L:"Solid",d:86,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,i:"keypadClear",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:90,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:36,aA:{a:[{p:4,h:"180"}]},F:"center",G:"#000000",aP:"pointer",w:"C",x:"visible",I:"Solid",a:249,y:"preserve",J:"Solid"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
