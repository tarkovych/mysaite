//tealium universal tag - utag.23 ut4.0.201812182103, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
u.escapefn=function(obj){var escape=window.encodeURIComponent||window.escape;for(property in obj){if(obj.hasOwnProperty(property)){obj[property]=escape(obj[property]);}}
return obj;};u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"id":"9603","sync":0,"dispType":"js","ptcl":document.location.protocol==="https:"?"https":"http","bsUrl":"bs.serving-sys.com/BurstingPipe","mobile":0,"activityParams":{},"retargetParams":{},"dynamicRetargetParams":{},"conditionalParams":{},"base_url":(document.location.protocol=="https:"?"https://secure-":"http://")+"ds.serving-sys.com/SemiCachedScripts/ebOneTag.js","Session":b["cp.utag_main_ses_id"],"ActivityID":"","url":b["dom.url"],"order_id":"","product_id":[],"product_name":[],"product_quantity":[],"product_unit_price":[]};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("rtp.")===0){u.data.retargetParams[e[f].substr(4)]=b[d];}else if(e[f].indexOf("drtp.")===0){u.data.dynamicRetargetParams[e[f].substr(5)]=b[d];}else if(e[f].indexOf("cp.")===0){u.data.conditionalParams[e[f].substr(3)]=b[d];}else if(e[f].indexOf("act.")===0){u.data.activityParams[e[f].substr(4)]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.order_id=u.data.orderId||u.data.order_id||b._corder||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.activityParams.Session=u.data.Session;u.data.activityParams.ActivityID=u.data.ActivityID;if(u.data.order_id){u.data.activityParams.OrderID=u.data.order_id;}
if(u.data.product_unit_price.length>0){u.data.activityParams.Value=0.0;for(var i=0;i<u.data.product_unit_price.length;i++){u.data.activityParams.Value+=parseFloat(u.data.product_unit_price[i]);}
u.data.activityParams.Value=u.data.activityParams.Value.toFixed(2);}
if(u.data.product_id.length>0){u.data.activityParams.productid=u.data.product_id.join("|");}
if(u.data.product_name.length>0){u.data.activityParams.productinfo=u.data.product_name.join("|");}
if(u.data.product_quantity.length>0){u.data.activityParams.Quantity=0;for(var i=0;i<u.data.product_quantity.length;i++){u.data.activityParams.Quantity+=parseInt(u.data.product_quantity[i]);}
u.data.activityParams.Quantity=u.data.activityParams.Quantity.toString();}
if(!/^https?:\/\//i.test(u.data.url)){u.data.url=u.data.ptcl+"://"+u.data.url;}
u.data.activityParams=u.escapefn(u.data.activityParams);u.data.retargetParams=u.escapefn(u.data.retargetParams);u.data.dynamicRetargetParams=u.escapefn(u.data.dynamicRetargetParams);u.data.conditionalParams=u.escapefn(u.data.conditionalParams);u.loader_cb=function(a,b){var d,vt=window.versaTagObj;if('view'===a){vt._oneTagObj.id=u.data.id||vt._oneTagObj.id;vt._oneTagObj.sync=u.data.sync||vt._oneTagObj.sync;vt._oneTagObj.dispType=u.data.dispType||vt._oneTagObj.dispType;vt._oneTagObj.ptcl=u.data.ptcl||vt._oneTagObj.ptcl;vt._oneTagObj.bsUrl=u.data.bsUrl||vt._oneTagObj.bsUrl;vt._oneTagObj.mobile=u.data.mobile||vt._oneTagObj.mobile;}
vt.clearActivityParam();for(d in utag.loader.GV(u.data.activityParams)){vt.setActivityParam(d,u.data.activityParams[d]);}
vt.clearRetargetParam();for(d in utag.loader.GV(u.data.retargetParams)){vt.setRetargetParam(d,u.data.retargetParams[d]);}
vt.clearDynamicRetargetParam();for(d in utag.loader.GV(u.data.dynamicRetargetParams)){vt.setDynamicRetargetParam(d,u.data.dynamicRetargetParams[d]);}
vt.clearConditionalParam();for(d in utag.loader.GV(u.data.conditionalParams)){vt.setConditionalParam(d,u.data.conditionalParams[d]);}
vt.generateRequest(u.data.url);};u.callBack=function(){u.initialized=true;var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b);}};if(u.initialized){u.loader_cb(a,b);}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.queue.shift();window.versaTag={"id":u.data.id,"sync":u.data.sync,"dispType":u.data.dispType,"ptcl":u.data.ptcl,"bsUrl":u.data.bsUrl,"mobile":u.data.mobile,"activityParams":u.data.activityParams,"retargetParams":u.data.retargetParams,"dynamicRetargetParams":u.data.dynamicRetargetParams,"conditionalParams":u.data.conditionalParams};utag.ut.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"ebOneTagUrlId"});}}
}};utag.o[loader].loader.LOAD(id);}("23","dropbox.main"));}catch(error){utag.DB(error);}
