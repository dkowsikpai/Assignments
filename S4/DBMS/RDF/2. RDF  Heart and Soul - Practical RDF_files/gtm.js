
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"342",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",0],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",8]],["map","index","1","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",10],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",11]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","3","dimension",["macro",8]],["map","index","4","dimension",["macro",15]],["map","index","5","dimension",["macro",16]],["map","index","6","dimension",["macro",12]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",24],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",2],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",2],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",0],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",2],8,16],"+\"\/?\"+",["escape",["macro",0],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",2],8,16],"+\"\/\"}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",32],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSuggestGroup"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.experiment"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.variation"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",27]],["map","index","4","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",29],
      "vtp_cookieDomain":["macro",10],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",31]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",34]],["map","index","4","dimension",["macro",35]],["map","index","9","dimension",["macro",36]],["map","index","10","dimension",["macro",37]],["map","index","11","dimension",["macro",38]],["map","index","12","dimension",["macro",39]],["map","index","13","dimension",["macro",28]],["map","index","14","dimension",["macro",40]],["map","index","15","dimension",["macro",41]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension",["macro",43]],["map","index","18","dimension",["macro",27]],["map","index","19","dimension",["macro",44]],["map","index","20","dimension",["macro",45]],["map","index","21","dimension",["macro",46]],["map","index","27","dimension",["macro",47]],["map","index","22","dimension",["macro",16]],["map","index","6","dimension",["macro",48]],["map","index","7","dimension",["macro",49]],["map","index","8","dimension",["macro",50]],["map","index","25","dimension",["macro",51]],["map","index","26","dimension",["macro",52]],["map","index","23","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","28","dimension",["macro",55]],["map","index","30","dimension",["macro",56]],["map","index","29","dimension",["macro",57]],["map","index","31","dimension",["macro",58]],["map","index","32","dimension",["macro",59]],["map","index","33","dimension",["macro",12]],["map","index","34","dimension",["macro",60]],["map","index","36","dimension",["macro",61]],["map","index","37","dimension",["macro",62]],["map","index","38","dimension",["macro",63]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";if(\"profile icon\"==",["escape",["macro",21],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",22],8,16],"||\"global\"==",["escape",["macro",21],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",22],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",23],8,16],")a=1;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",70],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",71],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",70],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",71]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",19],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",18],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",25]],["map","fieldName","title","value",["macro",26]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",25]],["map","fieldName","title","value",["macro",26]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",145,0]],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",66],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["template",["macro",69],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":133
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",72],
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",19],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",73],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":297
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1011620147",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":725
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",74]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":726
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",73],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"ytHKCKe9wboBELOysOID",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":755
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":["macro",66],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":759
    },{
      "function":"__cvt_1669222_1169",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableFirstPartyCookies":true,
      "vtp_id":"t2_5i3sagaf",
      "vtp_eventType":"PageVisit",
      "tag_id":770
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",73],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804958955",
      "vtp_conversionLabel":"SXsGCKqXvrsBEOvl6v8C",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":771
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"804958955",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"SXsGCKqXvrsBEOvl6v8C",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":772
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1011620147",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"ytHKCKe9wboBELOysOID",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":false,
      "tag_id":773
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1846444",
      "tag_id":777
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"af79e215dc9347e498ecc03840b4b080",
      "vtp_pixel_event":"ViewContent",
      "tag_id":778
    },{
      "function":"__cvt_1669222_1169",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableFirstPartyCookies":true,
      "vtp_id":"t2_55nh497m",
      "vtp_eventType":"PageVisit",
      "tag_id":1208
    },{
      "function":"__cvt_1669222_1169",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableFirstPartyCookies":true,
      "vtp_id":"t2_55nh497m",
      "vtp_eventType":"Purchase",
      "tag_id":1209
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",0],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":1221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":1222
    },{
      "function":"__cl",
      "tag_id":1223
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1224
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1225
    },{
      "function":"__hl",
      "tag_id":1226
    },{
      "function":"__hl",
      "tag_id":1227
    },{
      "function":"__hl",
      "tag_id":1228
    },{
      "function":"__cl",
      "tag_id":1229
    },{
      "function":"__cl",
      "tag_id":1230
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":1231
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":1232
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",5],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",75],12],"\u0026amp;TYPE=",["escape",["macro",76],12],"\u0026amp;CURRENCY=",["escape",["macro",77],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",39],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}if(null!==document.querySelector(\"iframe.twitter-share-button\")\u0026\u0026void 0!==document.querySelector(\"iframe.twitter-share-button\")){var b=!1;window.addEventListener(\"blur\",function(){b\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0})});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseover\",\nfunction(){window.focus();b=!0});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseout\",function(){b=!1})}try{window.twttr=function(a,b,d){var c,e=a.getElementsByTagName(b)[0];if(!a.getElementById(d))return a=a.createElement(b),a.id=d,a.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(a,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(c){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a\u0026\u0026(b=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\"),a=b.exec(a),null!=a))return unescape(a[1])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",67],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",81],7],"\"==\"https:\/\/learning.oreilly.com\/register\/\")_pp.targetUrl=\"\/confirm\/trial\";else if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nv\/\"\u0026\u0026\"",["escape",["macro",81],7],"\"==\"https:\/\/learning.oreilly.com\/subscribe\/\")_pp.targetUrl=\"\/confirm\/paid\";else if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",81],7],"\"==\"https:\/\/learning.oreilly.com\/signup\/\")_pp.targetUrl=\"\/confirm\/paid\";_pp.siteId=\"2508\";\n_pp.siteUId=\"",["escape",["macro",12],7],"\";_pp.orderValue=\"",["escape",["macro",82],7],"\";_pp.orderId=\"",["escape",["macro",83],7],"\";(function(){var ppjs=document.createElement(\"script\");ppjs.type=\"text\/javascript\";ppjs.async=true;ppjs.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(ppjs,s)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":298
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":300
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":302
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":303
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":304
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"M2ZEQWT5KBAELF4UZPEU34\";adroll_pix_id=\"C3PBWNOSTFB7FOPPRQFSJT\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":710
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":711
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":712
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":717
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":727
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":728
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":729
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":730
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":731
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":732
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":733
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":734
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":735
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":736
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":737
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":738
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":739
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":740
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":741
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":742
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/c);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));25\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));75\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",39],8,16],",\neventVal:0,nonInteraction:0}));95\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"windowReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":747
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":748
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":749
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":750
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":751
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":752
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":753
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":754
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":756
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\n_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.Strata SJ 2020 Registration Confirmation,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.customer.INSERT+CUSTOMER+TYPE\",orderid:",["escape",["macro",75],8,16],",revenue:",["escape",["macro",84],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":757
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"2DWZXEKX7BASDKW76SIBCI\";adroll_pix_id=\"3FFYNBMHSNHAFN6SMDOJ4I\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":758
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3z2\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":760
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"1106700\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1106700\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":761
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"TQQNJLS5XNE6JFYU3F2TAH\";adroll_pix_id=\"6YVVWOUZDJC4NC2Y7BXCNO\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":762
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"IOCA20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":763
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"IOCA20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":764
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"IOCA20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":765
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"IOCA20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":766
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"IOCA20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":767
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":768
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":769
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"18a0e84d93f94a9fa7cab64f85e9ee7c\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/18a0e84d93f94a9fa7cab64f85e9ee7c\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":774
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":775
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"494703694574419\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=494703694574419\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":779
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_sk720\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":780
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3zg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":781
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1196
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1197
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1198
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"OSCON20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1200
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1212
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"11025732\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1215
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"af79e215dc9347e498ecc03840b4b080\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/af79e215dc9347e498ecc03840b4b080\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1216
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1218
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1219
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({\"ld.experiment\":void 0,\"ld.variation\":void 0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1213
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/content(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"your oreilly|hover"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com\/skills\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"updatedEcommerce"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"-patterns-of-enterprise-transformation.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com\/ind_how-a-multi-cloud-strategy-enables-digital-transformation.html"
    },{
      "function":"_eq",
      "arg0":["macro",74],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VWO"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/infrastructure-ops\/io-ca"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_developing-open-cloud-native-microservices.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_what-are-microservices-2e.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_what-is-sre.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences\/infrastructure-ops\/speaker-preview-ca20.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/infrastructure-ops\/io-ca\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/tensorflow\/tf-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/signup\/"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar|content)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"podcast"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*www.oreilly.com.*data-science.*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ind_understanding-patterns-of-enterprise-transformation"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"purchased"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sa-ny\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sa-ny\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"Continue"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_streaming-data.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_the-care-and-feeding-of-data-scientists.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_getting-dataops-right.html"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_security-with-ai-and-machine-learning.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stai-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stai-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/stai-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stai-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"stai-eu\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sa-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sa-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"sa-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/infrastructure-ops\/io-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"infrastructure-ops\/io-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"infrastructure-ops\/io-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"infrastructure-ops\/io-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ny"
    }],
  "rules":[
    [["if",0,1],["add",2,13]],
    [["if",1,2],["add",2,13]],
    [["if",1],["add",3,8,22,41,57,68,69,43,44,46,47,48,49,50,51,52]],
    [["if",1,3],["add",4]],
    [["if",1,4],["add",4]],
    [["if",1,5],["add",4]],
    [["if",1,6,7],["add",5,53,55,59]],
    [["if",1],["unless",8],["add",6,18]],
    [["if",9,10],["add",7,9,19,58,74]],
    [["if",1,11,12],["add",10]],
    [["if",1,13],["add",10]],
    [["if",11,14],["add",11]],
    [["if",14,15],["add",11]],
    [["if",11,16],["add",12]],
    [["if",1,17],["add",14]],
    [["if",16,18],["add",15]],
    [["if",16,19],["add",15]],
    [["if",16,20],["add",15]],
    [["if",14,21],["unless",22,23],["add",16]],
    [["if",1,25],["unless",22,26],["add",17]],
    [["if",27,29],["unless",28],["add",17]],
    [["if",30,31],["add",17]],
    [["if",30,32],["add",17,106]],
    [["if",33,34],["add",20]],
    [["if",35,37,38],["unless",36],["add",21]],
    [["if",1,39],["add",23]],
    [["if",1,40],["add",24,66]],
    [["if",33,41,42],["add",25]],
    [["if",14,43],["add",26]],
    [["if",44],["add",27]],
    [["if",1,45],["add",28,77,79,87],["block",76,86]],
    [["if",1,46],["add",29,76,83,84]],
    [["if",1,47],["add",29,76,83,84]],
    [["if",49],["unless",48],["add",30]],
    [["if",1,50],["add",31,40,109,114],["block",39,108]],
    [["if",14,24],["add",32],["block",16]],
    [["if",1,51],["add",33,35,119,120,121,124,127,129]],
    [["if",1,52],["add",33,35,119,121,124,127,129]],
    [["if",1,53],["add",33,35,119,121,124,127,129]],
    [["if",1,54],["add",33,35,119,121,124,127,129]],
    [["if",1,55],["add",33,35,119,120,121,124,127]],
    [["if",1,56],["add",34,123,128],["block",127]],
    [["if",1,57],["add",36,39,108,110,113,118,139]],
    [["if",1,58],["add",37,38,131,132,133,134]],
    [["if",1,59],["add",42]],
    [["if",60],["add",45,67,75,89]],
    [["if",1],["unless",61],["add",54]],
    [["if",1,62],["add",0,1]],
    [["if",34,63],["unless",64],["add",56]],
    [["if",34,65],["add",57,62,73]],
    [["if",1,66],["add",57,62]],
    [["if",1,67],["add",60]],
    [["if",1,68],["add",60]],
    [["if",1,69],["add",61]],
    [["if",60,70],["add",63]],
    [["if",34,71],["add",64]],
    [["if",1,72],["add",65]],
    [["if",1,73],["add",66]],
    [["if",27,29,30],["add",70]],
    [["if",30,34],["add",71]],
    [["if",1,74],["add",72]],
    [["if",1,75],["add",73]],
    [["if",76,77],["add",75]],
    [["if",1,78],["add",76,83,84,86,130]],
    [["if",1,79],["add",76,83,84]],
    [["if",1,80],["add",78],["block",82]],
    [["if",1,81],["add",80]],
    [["if",1,86],["add",81]],
    [["if",1,87],["add",81]],
    [["if",1,88],["add",82]],
    [["if",10,89,90],["add",85]],
    [["if",1,91],["add",88]],
    [["if",1,92],["add",88]],
    [["if",1,93],["add",88]],
    [["if",76,94],["add",89]],
    [["if",1,95],["add",90,92,98,104,116]],
    [["if",1,96],["add",90]],
    [["if",1,97],["add",91,93,99,105]],
    [["if",1,98],["add",94],["block",102]],
    [["if",1,99],["add",95],["block",103]],
    [["if",1,100],["add",96,117]],
    [["if",1,101],["add",97]],
    [["if",1,103],["add",100]],
    [["if",1,104],["add",100]],
    [["if",1,105],["add",101]],
    [["if",1,106],["add",101]],
    [["if",1,107],["add",102]],
    [["if",1,102],["add",103],["block",99]],
    [["if",33,60],["add",106,107]],
    [["if",1,108],["add",111]],
    [["if",1,110],["add",112]],
    [["if",1,111],["add",112]],
    [["if",1,109],["add",115],["block",111]],
    [["if",1,112],["add",122],["block",126]],
    [["if",1,113],["add",125]],
    [["if",1,114],["add",125]],
    [["if",1,115],["add",126,135]],
    [["if",1,117],["add",136]],
    [["if",1,118],["add",136]],
    [["if",1,119],["add",137,140,141]],
    [["if",1,116],["add",138],["block",135]],
    [["if",1,120],["add",142,143,144]],
    [["if",1,82],["block",80,82,98,99,102,103,111,113,124,126,134,135]],
    [["if",1,83],["block",80,98,99,113,124,134]],
    [["if",1,84],["block",80,98,99,113,124,134]],
    [["if",1,85],["block",80,98,99,113,124,134]]]
},
"runtime":[[50,"__cvt_1669222_1169",[46,"a"],[41,"b","c","d","e","f","g","h"],[3,"b",["require","injectScript"]],[3,"c",["require","copyFromWindow"]],[3,"d",["require","setInWindow"]],[3,"e",["require","callInWindow"]],[3,"f",["require","createQueue"]],[3,"g",[51,"",[7],[41,"i","j"],[3,"i",["c","rdt"]],[22,[15,"i"],[46,[36,[15,"i"]]]],["d","rdt",[51,"",[7],[41,"k"],[3,"k",["c","rdt.sendEvent"]],[22,[15,"k"],[46,["e","rdt.sendEvent.apply",[15,"i"],[15,"arguments"]]],[46,["j",[15,"arguments"]]]]]],[3,"j",["f","rdt.callQueue"]],[36,["c","rdt"]]]],[3,"h",["g"]],[22,[28,[17,[15,"h"],"advertiserId"]],[46,["h","init",[17,[15,"a"],"id"]]]],[22,[28,[17,[15,"a"],"enableFirstPartyCookies"]],[46,["h","disableFirstPartyCookies"]]],["h","track",[17,[15,"a"],"eventType"]],["b","https://www.redditstatic.com/ads/pixel.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"rdtPixel"]],[50,"__qpx",[46,"a"],[50,"n",[46,"o","p"],[41,"q"],[3,"q",[0,[0,[0,[0,[0,"https://q.quora.com/_/ad/",[15,"h"]],"/pixel?tag\u003d"],[15,"o"]],"\u0026i\u003dgtm\u0026u\u003d"],[15,"m"]]],[22,[15,"p"],[46,[3,"q",[0,[15,"q"],[0,"\u0026em\u003d",[15,"p"]]]]]],["b",[15,"q"]]],[52,"b",["require","sendPixel"]],[52,"c",["require","setInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","getUrl"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["require","sha256"]],[52,"h",[17,[15,"a"],"pixel_id"]],[52,"i",[17,[15,"a"],"pixel_event"]],[52,"j",[17,[15,"a"],"email"]],[52,"k",["d","qp"]],[52,"l",["e",[45]]],[52,"m",["f",[15,"l"]]],[22,[29,[15,"i"],"ViewContent"],[46,[22,[15,"j"],[46,["g",[15,"j"],[51,"",[7,"o"],["n",[15,"i"],[15,"o"]]],[17,[15,"a"],"gtmOnFailure"]]],[46,["n",[15,"i"],[45]]]]]],[22,[28,[15,"k"]],[46,["b",[0,[0,[0,"https://q.quora.com/_/ad/",[15,"h"]],"/pixel?tag\u003dViewContent\u0026i\u003dgtm\u0026u\u003d"],[15,"m"]]]]],["c","qp","1",true],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__cvt_1669222_1169":{"inject_script":{"urls":["https:\/\/www.redditstatic.com\/ads\/pixel.js"]},"access_globals":{"keys":[{"key":"rdt","read":true,"write":true,"execute":false},{"key":"rdt.callQueue","read":true,"write":true,"execute":false},{"key":"rdt.sendEvent.apply","read":true,"write":false,"execute":true},{"key":"rdt.callQueue.push","read":false,"write":false,"execute":true},{"key":"rdt.sendEvent","read":true,"write":false,"execute":false},{"key":"rdt.advertiserId","read":true,"write":false,"execute":false}]}},"__qpx":{"send_pixel":{"urls":["https:\/\/q.quora.com\/"]},"access_globals":{"keys":[{"key":"qp","read":true,"write":true,"execute":false}]},"get_url":{"urlParts":"any"}}}
,"sandboxed_scripts":["__cvt_1669222_1169"]
,"security_groups":{
"nonGooglePixels":["__qpx"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var ia;a:{var ja={Cf:!0},ka={};try{ka.__proto__=ja;ia=ka.Cf;break a}catch(a){}ia=!1}ea=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=ea,ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.m={};this.i=!1;this.o={}};sa.prototype.get=function(a){return this.m["dust."+a]};sa.prototype.set=function(a,b){this.i||(a="dust."+a,this.o.hasOwnProperty(a)||(this.m[a]=b))};sa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var g=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=g.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Wb=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new g(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.o.hasOwnProperty(d)||delete c.m[d]}};ba=g.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new g(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var wa=function(){function a(f,h){if(b[f]){if(b[f].Nb+h>b[f].max)throw Error("Quota exceeded");b[f].Nb+=h}}var b={},c=void 0,d=void 0,e={Wg:function(f){c=f},qe:function(){c&&a(c,1)},Yg:function(f){d=f},za:function(f){d&&a(d,f)},vh:function(f,h){b[f]=b[f]||{Nb:0};b[f].max=h},ug:function(f){return b[f]&&b[f].Nb||0},reset:function(){b={}},ag:a};e.onFnConsume=e.Wg;e.consumeFn=e.qe;e.onStorageConsume=e.Yg;e.consumeStorage=e.za;e.setMax=e.vh;e.getConsumed=e.ug;e.reset=e.reset;e.consume=e.ag;return e};var xa=function(a,b){this.F=a;this.T=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.o=void 0};xa.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.i.i)if(a.F.za(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.o["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.za(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ca=function(a){var b=new xa(a.F,a);a.o&&(b.o=a.o);b.T=a.T;b.a=a.a;return b};var Da=function(){},Ea=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Fa=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Fa(a)||
!Fa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==String(a).toLowerCase()?
!1:!!a},Pa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=F,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];D(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.F=a;this.T=b};pa($a,sa);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof qa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.Wb=function(){return new g(ta(this))};$a.prototype.a=function(a,b){a.F.qe();return this.T.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ga(d)?ab(e,d):d};c.prototype.o=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Ba=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){sa.call(this)};pa(db,sa);db.prototype.Wb=function(){return new g(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof g?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},I=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=I(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=I(e,c[d])):c[d]=e}return c};var ob=function(a,b){var c=[],d=[],e=function(h,k){for(var l=ta(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Wb(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof db){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof $a){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=nb(q[u],b);var v=b?b.F:wa(),w=new xa(v);b&&
(w.a=b.a);return f(h.a.apply(h,[w].concat(q)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},nb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(Ga(h)||Ma(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(jb(h)){var n=
new db;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new $a("",function(q){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=ob(this.a(u[v]),b);return f((0,this.i.T)(h,h,u))});c.push(h);d.push(p);e(h,p);return p}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var pb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().za(a.length+f.length);return new $a(a,function(){return function(h){var k=Ca(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),p=
0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var t=bb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.za(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.za(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),h=e.length;h+="string"===
typeof f?f.length:1;b.za(h);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof qa||c instanceof $a||c instanceof g||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=wa();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Tb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.o=function(a,b){var c=Ca(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),xb=new qa("break"),yb=new qa("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return nb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var h=a.get(b);if(h instanceof $a){var k=tb(c);k.unshift(this.i);return h.a.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ca(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Eb=function(){return xb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ba(b,d,e,!0)}}},Hb=function(){return yb},
Ib=function(a,b,c){var d=new g;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Lb=function(a,b){return this.a(a)==this.a(b)},Mb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Nb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof g||b instanceof $a)for(var h=b.Wb(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=bb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ca(d);Ba(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ca(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof g||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Wb=function(a,b){return this.a(a)===this.a(b)},Xb=function(a,b){return this.a(a)!==this.a(b)},Yb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.o(d);if(e instanceof qa)return e},Zb=function(a,b){return this.a(a)<this.a(b)},$b=function(a,b){return this.a(a)<=
this.a(b)},ac=function(a,b){return this.a(a)%this.a(b)},bc=function(a,b){return this.a(a)*this.a(b)},cc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof g||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.o(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.o(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Tb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.o(a,b)},zc=function(a){function b(e,f){var h=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(h,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,zb);c(1,Ab);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Lb);c(13,Mb);c(47,Ob);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Wb);c(21,Xb);c(22,Yb);c(23,Zb);c(24,$b);c(25,ac);c(26,bc);c(27,
cc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.T=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Gc[7]=function(a){return String(a).replace(Oc,Qc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Wc=/['()]/g,Xc=function(a){return"%"+a.charCodeAt(0).toString(16)};Gc[12]=function(a){var b=
encodeURIComponent(String(a));Wc.lastIndex=0;return Wc.test(b)?b.replace(Wc,Xc):b};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=cd[f];if(!h||b.Yc(h))return;c[f]=!0;try{var k=od(h,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.cg(d,k))}catch(x){b.He&&b.He(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=nd(a[n],b,c);jd&&(m=m||p===jd.Eb);d.push(p)}return jd&&m?jd.fg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ga(a[1])&&"macro"===a[1][0]&&jd.Hg(a))return jd.eh(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var q=a[1];if(!fd[q])throw Error("Unable to resolve tag reference "+q+".");return d={we:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Ph:a("debug_mode_metadata"),xa:a("function"),df:a("instance_name"),jf:a("live_only"),lf:a("malware_disabled"),nf:a("metadata"),Qh:a("original_vendor_template_id"),sf:a("once_per_event"),Qd:a("once_per_load"),Yd:a("setup_tags"),$d:a("tag_id"),ae:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.m=b;this.a=c};pa(sd,Error);function td(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};pa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Fa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Cd=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];yd=Ad(a);for(var e=0;e<dd.length;e++){var f=dd[e],h=Bd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=yd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new sd(c,d,h);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,h);Ed(f,b,d,h)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});D(a,function(f,h){var k={};D(h,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var p=Array.prototype.slice.call(arguments,0);n.apply(void 0,p);e.apply(void 0,p)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Eh=Oa('');Nd.ng=Oa('');var Od=Md,Pd=Nd.ng,Qd=Nd.Eh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),p=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=p;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:q.length===u.length?!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ie,je=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Qf&&(l["fix_"+m]=!0),l.xe=l.xe||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,R:q.R,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(v,w,x,y,B){var z=x||y||B||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=z;u[w]=A.textContent||A.innerText||z});return{tagName:q[1],R:u,xb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=p[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.xe&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Fe=function(){return this[this.length-1]};v.$c=function(A){var E=this.Fe();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.bg=
function(A){for(var E=0,H;H=this[E];E++)if(H.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.xb=q.test(A.tagName)||A.xb);return A},x=t,y=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.$c("TABLE")?(k="<TBODY>"+k,z()):l.Yh&&u.test(E)&&v.bg(E)?v.$c(E)?y():(k="</"+A.tagName+">"+k,z()):A.xb||v.push(A)},endTag:function(A){v.Fe()?l.pg&&!v.$c(A.tagName)?y():v.pop():l.pg&&(x(),z())}},z=function(){var A=k,E=w(x());k=A;if(E&&
B[E.type])B[E.type](E)};t=function(){z();return w(x())}}();return{append:function(q){k+=q},mh:t,di:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},ei:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.hi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.gi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.I=b;a.O=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.R){var t=m.R[p];n+=
" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.xb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.a=a.a||!b[h]&&h;ie=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var u,v=p&&p.length||0;for(u=0;u<v;u++)t.call(q,p[u],u)}function d(p,t,q){for(var u in p)p.hasOwnProperty(u)&&t.call(q,u,p[u])}function e(p,
t){d(t,function(q,u){p[q]=u});return p}function f(p,t){p=p||{};d(t,function(q,u){b(p[q])||(p[q]=u)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(u){t.push(u)});return t}}var k={Gf:a,Hf:a,If:a,Jf:a,Rf:a,Sf:function(p){return p},done:a,error:function(p){throw p;},ph:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,u,v){var w="data-ps-"+u;if(2===arguments.length){var x=q.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,u){var v=q.ownerDocument;e(this,{root:q,options:u,yb:v.defaultView||v.parentWindow,Na:v,ic:ie("",{Qf:!0}),Mc:[q],ld:"",md:v.createElement(q.nodeName),ub:[],Ea:[]});p(this.md,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ea,arguments);for(var q;!this.Qb&&this.Ea.length;)q=this.Ea.shift(),"function"===typeof q?this.Xf(q):this.xd(q)};t.prototype.Xf=function(q){var u={type:"function",value:q.name||q.toString()};this.gd(u);q.call(this.yb,this.Na);this.Ke(u)};
t.prototype.xd=function(q){this.ic.append(q);for(var u,v=[],w,x;(u=this.ic.mh())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Kh(v);w&&this.zg(u);x&&this.Ag(u)};t.prototype.Kh=function(q){var u=this.Uf(q);u.ne&&(u.Wc=this.ld+u.ne,this.ld+=u.ih,this.md.innerHTML=u.Wc,this.Hh())};t.prototype.Uf=function(q){var u=this.Mc.length,v=[],w=[],x=[];c(q,function(y){v.push(y.text);if(y.R){if(!/^noscript$/i.test(y.tagName)){var B=
u++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==y.R.id&&"ps-style"!==y.R.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+B+(y.xb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{ii:q,raw:v.join(""),ne:w.join(""),ih:x.join("")}};t.prototype.Hh=function(){for(var q,u=[this.md];b(q=u.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.Mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.Mc[w].appendChild(q)}u.unshift.apply(u,h(q.childNodes))}};t.prototype.zg=function(q){var u=this.ic.clear();u&&this.Ea.unshift(u);q.src=q.R.src||q.R.Rh;q.src&&this.ub.length?this.Qb=q:this.gd(q);var v=this;this.Jh(q,function(){v.Ke(q)})};t.prototype.Ag=function(q){var u=this.ic.clear();u&&this.Ea.unshift(u);q.type=q.R.type||q.R.Sh||"text/css";this.Lh(q);u&&this.write()};t.prototype.Lh=function(q){var u=this.Wf(q);this.Eg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Na.createTextNode(q.content)))};t.prototype.Wf=function(q){var u=this.Na.createElement(q.tagName);u.setAttribute("type",q.type);d(q.R,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Eg=function(q){this.xd('<span id="ps-style"/>');var u=this.Na.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.gd=function(q){q.Zg=this.Ea;this.Ea=[];this.ub.unshift(q)};t.prototype.Ke=function(q){q!==this.ub[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ub.shift(),this.write.apply(this,q.Zg),!this.ub.length&&this.Qb&&(this.gd(this.Qb),this.Qb=null))};t.prototype.Jh=function(q,u){var v=this.Vf(q),w=this.xh(v),x=this.options.Gf;q.src&&(v.src=q.src,this.th(v,w?x:function(){u();x()}));try{this.Dg(v),q.src&&!w||u()}catch(y){this.options.error(y),u()}};t.prototype.Vf=function(q){var u=this.Na.createElement(q.tagName);d(q.R,function(v,w){u.setAttribute(v,w)});q.content&&(u.text=q.content);return u};t.prototype.Dg=function(q){this.xd('<span id="ps-script"/>');
var u=this.Na.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.th=function(q,u){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),u())},onerror:function(){var x={message:"remote script failed "+q.src};v();w(x);u()}})};t.prototype.xh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ph&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=u.shift(),x;w&&(x=w[w.length-1],x.Hf(),w.stream=t.apply(null,w),x.If())}function t(w,x,y){function B(H){H=y.Sf(H);v.write(H);y.Jf(H)}v=new n(w,y);v.id=q++;v.name=y.name||v.id;var z=w.ownerDocument,A={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var E=v.yb.onerror||a;v.yb.onerror=function(H,K,U){y.error({ai:H+
" - "+K+":"+U});E.apply(v.yb,arguments)};v.write(x,function(){e(z,A);v.yb.onerror=E;y.done();v=null;p()});return v}var q=0,u=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.$h?w[0]:w;var B=[w,x,y];w.dh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};y.Rf(B);u.push(B);v||p();return w.dh},{streams:{},ci:u,Vh:n})}();je=l.postscribe}})();function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ea(e)?c.set(d,me(a+"_"+d,e)):(Fa(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){G(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){G(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(ob(arguments[d],c));return nb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){G(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){G(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){G(this.getName(),["message:?string"],arguments);};var ye=function(a,b){G(this.getName(),["min:!number","max:!number"],arguments);return Ia(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Pf.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-5P4V6Z');a.set("version",'342');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof g?"array":a instanceof $a?"function":typeof a};var De=function(a){return Na(ob(a,this.i))};var Ee=function(a){return Number(ob(a,this.i))};var Fe=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ge=function(a,b,c){var d=null,e=!1;return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var He=function(){var a={};return{vg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},wh:function(b,c){a[b]=c},reset:function(){a={}}}},Ie=function(a,b){G(this.getName(),["apiName:!string","mock:?*"],arguments);};var Je=function(){this.a={}};Je.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Je.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ea(b)?me(a,b):ne(a,b)};function Ke(){var a={};return a};var F=window,J=document,Le=navigator,Me=J.currentScript&&J.currentScript.src,Ne=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Oe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pe=function(a,b,c){var d=J.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=J.getElementsByTagName("script")[0]||J.body||J.head;l.parentNode.insertBefore(d,l);return d},Qe=function(){if(Me){var a=Me.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Re=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||
J.body||J.head;d.parentNode.insertBefore(c,d);Oe(c,b);void 0!==a&&(c.src=a);return c},Se=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Te=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ue=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){F.setTimeout(a,0)},Ve=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},We=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xe=function(a){var b=J.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ye=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Ze=function(a){Le.sendBeacon&&Le.sendBeacon(a)||Se(a)},$e=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var bf=function(a){return af?J.querySelectorAll(a):null},cf=function(a,b){if(!af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},df=!1;if(J.querySelectorAll)try{var ef=J.querySelectorAll(":root");ef&&1==ef.length&&ef[0]==J.documentElement&&(df=!0)}catch(a){}var af=df;var Q={va:"_ee",Uh:"_uci",Cc:"event_callback",Db:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",Dc:"restricted_data_processing",Va:"allow_google_signals",ba:"cookie_expires",Cb:"cookie_update",Wa:"session_duration",ia:"user_properties"};Q.ve=[Q.aa,Q.Va,Q.Cb];Q.Be=[Q.ba,Q.Db,Q.Wa];var wf=/[A-Z]+/,xf=/\s/,yf=function(a){if(r(a)&&(a=Qa(a),!xf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(wf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Af=function(a){for(var b={},c=0;c<a.length;++c){var d=yf(a[c]);d&&(b[d.id]=d)}zf(b);var e=[];D(b,function(f,h){e.push(h)});return e};
function zf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gd={},S=null,Bf=Math.random();Gd.w="GTM-5P4V6Z";Gd.Ib="340";var Cf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Df="www.googletagmanager.com/gtm.js";var Ef=Df,Ff=null,Gf=null,Hf=null,If="//www.googletagmanager.com/a?id="+Gd.w+"&cv=342",Jf={},Kf={},Lf=function(){var a=S.sequence||0;S.sequence=a+1;return a};var Mf={},Nf=function(a,b){Mf[a]=Mf[a]||[];Mf[a][b]=!0},Of=function(a){for(var b=[],c=Mf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Pf=function(){return"&tc="+fd.filter(function(a){return a}).length},Sf=function(){Qf||(Qf=F.setTimeout(Rf,500))},Rf=function(){Qf&&(F.clearTimeout(Qf),Qf=void 0);void 0===Tf||Uf[Tf]&&!Vf&&!Wf||(Xf[Tf]||Yf.Jg()||0>=Zf--?(Nf("GTM",1),Xf[Tf]=!0):(Yf.nh(),Se($f()),Uf[Tf]=!0,ag=bg=Wf=Vf=""))},$f=function(){var a=Tf;if(void 0===a)return"";var b=Of("GTM"),c=Of("TAGGING");return[cg,Uf[a]?"":"&es=1",dg[a],b?"&u="+b:"",c?"&ut="+c:"",Pf(),Vf,Wf,bg,ag,"&z=0"].join("")},eg=function(){return[If,"&v=3&t=t",
"&pid="+Ia(),"&rv="+Gd.Ib].join("")},fg="0.005000">Math.random(),cg=eg(),gg=function(){cg=eg()},Uf={},Vf="",Wf="",ag="",bg="",Tf=void 0,dg={},Xf={},Qf=void 0,Yf=function(a,b){var c=0,d=0;return{Jg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},nh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Zf=1E3,hg=function(a,b){if(fg&&!Xf[a]&&Tf!==a){Rf();Tf=a;ag=Vf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";dg[a]="&e="+c+"&eid="+a;Sf()}},ig=function(a,b,c){if(fg&&
!Xf[a]&&b){a!==Tf&&(Rf(),Tf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Vf=Vf?Vf+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(hd[h]?"1":"2")+d;ag=ag?ag+"."+k:"&ti="+k;Sf();2022<=$f().length&&Rf()}},jg=function(a,b,c){if(fg&&!Xf[a]){a!==Tf&&(Rf(),Tf=a);var d=c+b;Wf=
Wf?Wf+"."+d:"&epr="+d;Sf();2022<=$f().length&&Rf()}};var kg={},lg=new Ja,mg={},ng={},qg={name:"dataLayer",set:function(a,b){I(Ya(a,b),mg);og()},get:function(a){return pg(a,2)},reset:function(){lg=new Ja;mg={};og()}},pg=function(a,b){if(2!=b){var c=lg.get(a);if(fg){var d=rg(a);c!==d&&Nf("GTM",5)}return c}return rg(a)},rg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:tg(d)},tg=function(a){for(var b=mg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var vg=function(a,b){ng.hasOwnProperty(a)||(lg.set(a,b),I(Ya(a,b),mg),og())},og=function(a){D(ng,function(b,c){lg.set(b,c);I(Ya(b,void 0),mg);I(Ya(b,c),mg);a&&delete ng[b]})},wg=function(a,b,c){kg[a]=kg[a]||{};var d=1!==c?rg(b):lg.get(b);"array"===hb(d)||"object"===hb(d)?kg[a][b]=I(d):kg[a][b]=d},xg=function(a,b){if(kg[a])return kg[a][b]},yg=function(a,b){kg[a]&&delete kg[a][b]};var zg=function(){var a=!1;return a};var T=function(a,b,c,d){return(2===Ag()||d||"http:"!=F.location.protocol?a:b)+c},Ag=function(){var a=Qe(),b;if(1===a)a:{var c=Ef;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=J.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Pg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Vg=function(a){var b=pg("gtm.whitelist");b&&Nf("GTM",9);var c=b&&Wa(Pa(b),Qg),d=pg("gtm.blacklist");d||(d=pg("tagTypeBlacklist"))&&Nf("GTM",3);
d?Nf("GTM",8):d=[];Ug()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Nf("GTM",2);var e=d&&Wa(Pa(d),Sg),f={};return function(h){var k=h&&h[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Kf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var p=
0;p<l.length;p++){if(0>C(c,l[p])){Nf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=C(e,k);if(q)t=q;else{var u=La(e,l||[]);u&&Nf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=La(e,Tg));return f[k]=v}},Ug=function(){return Pg.test(F.location&&F.location.hostname)};var Wg={cg:function(a,b){b[rd.Ed]&&"string"===typeof a&&(a=1==b[rd.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Gd)&&null===a&&(a=b[rd.Gd]);b.hasOwnProperty(rd.Id)&&void 0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Hd)&&!0===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Fd)&&!1===a&&(a=b[rd.Fd]);return a}};var Xg={active:!0,isWhitelisted:function(){return!0}},Yg=function(a){var b=S.zones;!b&&a&&(b=S.zones=a());return b};var Zg=function(){};var $g=!1,ah=0,bh=[];function ch(a){if(!$g){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$g=!0;for(var e=0;e<bh.length;e++)M(bh[e])}bh.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function dh(){if(!$g&&140>ah){ah++;try{J.documentElement.doScroll("left"),ch()}catch(a){F.setTimeout(dh,50)}}}var eh=function(a){$g?a():bh.push(a)};var fh={},gh={},hh=function(a,b,c,d){if(!gh[a]||Cf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=I(d,e));e.id=c;e.status="timeout";return gh[a].tags.push(e)-1},ih=function(a,b,c,d){if(gh[a]){var e=gh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function jh(a){for(var b=fh[a]||[],c=0;c<b.length;c++)b[c]();fh[a]={push:function(d){d(Gd.w,gh[a])}}}
var mh=function(a,b,c){gh[a]={tags:[]};Ea(b)&&kh(a,b);c&&F.setTimeout(function(){return jh(a)},Number(c));return lh(a)},kh=function(a,b){fh[a]=fh[a]||[];fh[a].push(Ta(function(){return M(function(){b(Gd.w,gh[a])})}))};function lh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&jh(a)})},Nf:function(){d=!0;b>=c&&jh(a)}}};var nh=function(){function a(d){return!Fa(d)||0>d?0:d}if(!S._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=Fa(qg.get("gtm.start"))?qg.get("gtm.start"):0;S._li={cst:a(c-b),cbt:a(Gf-b)}}};var rh={},sh=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},th=!1;
var uh=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||Nf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}nh();return F[b]},vh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=sh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var xh=function(a){},wh=function(){return F.GoogleAnalyticsObject||"ga"};var zh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ah=/:[0-9]+$/,Bh=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Eh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ch(a.protocol)||Ch(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(Ah,"").toLowerCase());return Dh(a,b,c,d,e)},Dh=function(a,b,c,d,e){var f,h=Ch(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Fh(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Ah,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Nf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Bh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ch=function(a){return a?a.replace(":",
"").toLowerCase():""},Fh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Gh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Nf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ah,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Lh=function(){return!1},Nh=function(a){},
Oh=function(){var a={};return function(b,c,d){}};function Mh(a,b,c){b.containerId=Gd.w;var d={type:a,value:b};c.length&&(d.trace=c);return d};function Ph(a,b,c,d){var e=fd[a],f=Qh(a,b,c,d);if(!f)return null;var h=nd(e[rd.Yd],c,[]);if(h&&h.length){var k=h[0];f=Ph(k.index,{C:f,B:1===k.we?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qh(a,b,c,d){function e(){if(f[rd.lf])k();else{var w=od(f,c,[]),x=hh(c.id,String(f[rd.xa]),Number(f[rd.$d]),w[rd.nf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ra()-z;ig(c.id,fd[a],"5");ih(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ra()-z;ig(c.id,fd[a],"6");ih(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;ig(c.id,f,"1");var B=function(A){var E=Ra()-z;Nh(A);ig(c.id,f,"7");ih(c.id,x,"exception",E);y||(y=!0,k())};var z=Ra();try{md(w,c)}catch(A){B(A)}}}var f=fd[a],h=b.C,k=b.B,l=b.terminate;if(c.Yc(f))return null;var m=nd(f[rd.ae],c,[]);if(m&&m.length){var n=m[0],p=Ph(n.index,{C:h,B:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.we?l:p}if(f[rd.Qd]||f[rd.sf]){var t=f[rd.Qd]?gd:c.yh,q=h,u=k;if(!t[a]){e=Ta(e);var v=Rh(a,t,e);h=v.C;k=v.B}return function(){t[a](q,u)}}return e}
function Rh(a,b,c){var d=[],e=[];b[a]=Sh(d,e,c);return{C:function(){b[a]=Th;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=Uh;for(var f=0;f<e.length;f++)e[f]()}}}function Sh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Th(a){a()}function Uh(a,b){b()};var Xh=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.sb[d]){var e=fd[d];var f=b.add();try{var h=Ph(d,{C:f,B:f,terminate:f},a,d);h?c.push({Se:d,Ne:pd(e),Tb:h}):(Vh(d,a),f())}catch(l){f()}}b.Nf();c.sort(Wh);for(var k=0;k<c.length;k++)c[k].Tb();return 0<c.length};function Wh(a,b){var c,d=b.Ne,e=a.Ne;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Se,k=b.Se;f=h>k?1:h<k?-1:0}return f}
function Vh(a,b){if(!fg)return;var c=function(d){var e=b.Yc(fd[d])?"3":"4",f=nd(fd[d][rd.Yd],b,[]);f&&f.length&&c(f[0].index);ig(b.id,fd[d],e);var h=nd(fd[d][rd.ae],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Yh=!1,Zh=function(a,b,c,d,e){if("gtm.js"==b){if(Yh)return!1;Yh=!0}hg(a,b);var f=mh(a,d,e);wg(a,"event",1);wg(a,"ecommerce",1);wg(a,"gtm");var h={id:a,name:b,Yc:Vg(c),sb:[],yh:[],He:function(n){Nf("GTM",6);Nh(n)}};h.sb=Cd(h);var k=Xh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||xh(Gd.w);if(!k)return k;for(var l=0;l<h.sb.length;l++)if(h.sb[l]){var m=fd[l];if(m&&!Cf[String(m[rd.xa])])return!0}return!1};var ai=/^https?:\/\/www\.googletagmanager\.com/;function bi(){var a;return a}function di(a,b){}
function ci(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function ei(){var a=!1;return a};var fi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.C=function(){};this.B=function(){}},gi=function(a){var b=new fi;b.eventModel=a;return b},hi=function(a,b){a.targetConfig=b;return a},ii=function(a,b){a.containerConfig=b;return a},ji=function(a,b){a.a=b;return a},ki=function(a,b){a.globalConfig=b;return a},li=function(a,b){a.C=b;return a},mi=function(a,b){a.B=b;return a};
fi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ni=function(a){function b(e){D(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];D(c,function(e){d.push(e)});return d};var oi=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},ri=function(a,b,c,d){var e=pi(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=qi(e,function(f){return f.Rb},b);if(1===e.length)return e[0].id;e=qi(e,function(f){return f.tb},c);return e[0]?e[0].id:void 0}};
function si(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=oi(b,e).indexOf(c)}
var vi=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m="",n;for(n in c)if(c.hasOwnProperty(n)){var p=c[n];if(null!=p)switch(n){case "secure":p&&(f+="; secure");break;case "domain":k=p;break;case "flags":m=";"+p;break;default:"path"==n&&(l=p),"expires"==n&&p instanceof Date&&(p=p.toUTCString()),f+="; "+n+"="+p}}if("auto"===k){for(var t=
ti(),q=void 0,u=0,v=0;v<t.length;++v){var w="none"!=t[v]?t[v]:void 0;if(e){c.domain=w;try{e(a,c)}catch(x){q=x;continue}}u+=1;if(!ui(w,l)&&si(f+(w?"; domain="+w:"")+m,a,b))return!0}if(q&&!u)throw q;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!ui(k,l)&&si(f+m,a,b)},wi=function(a,b,c,d,e,f,h){d=d||"auto";var k={path:c||"/"};e&&(k.expires=e);"none"!==d&&(k.domain=d);h&&(k.flags=h);return vi(a,b,k,f)};
function qi(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function pi(a,b){for(var c=[],d=oi(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Rb:1*k[0]||1,tb:1*k[1]||1}))}}return c}
var xi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,yi=/(^|\.)doubleclick\.net$/i,ui=function(a,b){return yi.test(document.location.hostname)||"/"===b&&xi.test(a)},ti=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;yi.test(e)||xi.test(e)||a.push("none");return a};function zi(){for(var a=Ai,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ai,Ci;function Di(a){Ai=Ai||Bi();Ci=Ci||zi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Ai[l],Ai[m],Ai[n],Ai[p])}return b.join("")}
function Ei(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ci[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ai=Ai||Bi();Ci=Ci||zi();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Fi;var Ji=function(){var a=Gi,b=Hi,c=Ii(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Te(J,"mousedown",d);Te(J,"keyup",d);Te(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ki=function(a,b,c){for(var d=Ii().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==J.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var p=h.placement;void 0==p&&(p=h.fragment?2:1);p===b&&Ua(e,h.callback())}}return e},Ii=function(){var a=Ne("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Li=/(.*?)\*(.*?)\*(.*)/,Mi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ni=/^(?:www\.|m\.|amp\.)+/,Oi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Pi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Ri=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Di(String(d))))}var e=b.join("*");return["1",Qi(e),e].join("*")},Qi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fi)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Fi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ti=function(){return function(a){var b=Gh(F.location.href),c=b.search.replace("?",""),d=Bh(c,"_gl",!1,!0)||"";a.query=Si(d)||{};var e=Eh(b,"fragment").match(Pi("_gl"));a.fragment=Si(e&&e[3]||"")||{}}},Ui=function(){var a=Ti(),b=Ii();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},Si=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Li.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Qi(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Ei(t[q+1]);return p}}}}catch(u){}};
function Vi(a,b,c,d){function e(n){var p=n,t=Pi(a).exec(p),q=p;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oi.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Wi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ki(b,1,c),e=Ki(b,2,c),f=Ki(b,3,c);if(Va(d)){var h=Ri(d);c?Xi("_gl",h,a):Yi("_gl",h,a,!1)}if(!c&&Va(e)){var k=Ri(e);Yi("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],p=a;if(p.tagName){if("a"===p.tagName.toLowerCase()){Yi(m,n,p,void 0);break a}if("form"===p.tagName.toLowerCase()){Xi(m,n,p);break a}}"string"==typeof p&&Vi(m,n,p,void 0)}}
function Yi(a,b,c,d){if(c.href){var e=Vi(a,b,c.href,void 0===d?!1:d);zh.test(e)&&(c.href=e)}}
function Xi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vi(a,b,c.action);zh.test(m)&&(c.action=m)}}}
var Gi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wi(e,e.hostname)}}catch(h){}},Hi=function(a){try{if(a.action){var b=Eh(Gh(a.action),"host");Wi(a,b)}}catch(c){}},Zi=function(a,b,c,d){Ji();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};Ii().decorators.push(f)},$i=function(){var a=J.location.hostname,
b=Mi.exec(J.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ni,""),l=e.replace(Ni,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},aj=function(a,b){return!1===a?!1:a||b||$i()};var bj={};var cj=/^\w+$/,dj=/^[\w-]+$/,ej=/^~?[\w-]+$/,fj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function gj(a){return a&&"string"==typeof a&&a.match(cj)?a:"_gcl"}
var ij=function(){var a=Gh(F.location.href),b=Eh(a,"query",!1,void 0,"gclid"),c=Eh(a,"query",!1,void 0,"gclsrc"),d=Eh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Bh(e,"gclid",!1,void 0);c=c||Bh(e,"gclsrc",!1,void 0)}return hj(b,c,d)},hj=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(dj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
bj.gtm_3pds?0:bj.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},kj=function(a){var b=ij();jj(b,a)};
function jj(a,b,c){function d(p,t){var q=lj(p,e);q&&wi(q,t,h,f,l,!0)}b=b||{};var e=gj(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Pa?7776E3:b.Pa;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.ji?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var nj=function(a,b,c,d,e){for(var f=Ui(),h=gj(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==fj[l]){var m=lj(l,h),n=f[m];if(n){var p=Math.min(mj(n),Ra()),t;b:{for(var q=p,u=oi(m,J.cookie),v=0;v<u.length;++v)if(mj(u[v])>q){t=!0;break b}t=!1}t||wi(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};jj(hj(f.gclid,f.gclsrc),w)},lj=function(a,b){var c=fj[a];if(void 0!==c)return b+c},mj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function oj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var pj=function(a,b,c,d,e){if(Ga(b)){var f=gj(e);Zi(function(){for(var h={},k=0;k<a.length;++k){var l=lj(a[k],f);if(l){var m=oi(l,J.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},qj=function(a){return a.filter(function(b){return ej.test(b)})},rj=function(a,b){for(var c=gj(b&&b.prefix),d={},e=0;e<a.length;e++)fj[a[e]]&&(d[a[e]]=fj[a[e]]);D(d,function(f,h){var k=oi(c+h,J.cookie);if(k.length){var l=k[0],m=mj(l),n={};n[f]=[oj(l)];jj(n,b,m)}})};function sj(){var a=ij(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;S.reported_gclid||(S.reported_gclid={});d=S.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));Ze("https://www.google.com"+e)}}};var tj;if(3===Gd.Ib.length)tj="g";else{var uj="G";tj=uj}
var vj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:tj,OPT:"o"},wj=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=vj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Ib.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Gd.Ib+e};var Gj=function(){for(var a=Le.userAgent+(J.cookie||"")+(J.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Jj=function(a,b,c,d){var e=Hj(b);return ri(a,e,Ij(c),d)},Kj=function(a,b,c,d){var e=""+Hj(c),f=Ij(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Hj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ij=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Lj=["1"],Mj={},Qj=function(a,b,c,d){var e=Nj(a);Mj[e]||Oj(e,b,c)||(Pj(e,Gj(),b,c,d),Oj(e,b,c))};function Pj(a,b,c,d,e){var f=Kj(b,"1",d,c);wi(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function Oj(a,b,c){var d=Jj(a,b,c,Lj);d&&(Mj[a]=d);return d}function Nj(a){return(a||"_gcl")+"_au"};var Rj=function(){for(var a=[],b=J.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({sd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].sd]||(f[a[h].sd]=[]),f[a[h].sd].push({timestamp:k[1],rg:k[2]}))}return f};var Sj=/^\d+\.fls\.doubleclick\.net$/;function Tj(a){var b=Gh(F.location.href),c=Eh(b,"host",!1);if(c&&c.match(Sj)){var d=Eh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Uj(a,b){if("aw"==a||"dc"==a){var c=Tj("gcl"+a);if(c)return c.split(".")}var d=gj(b);if("_gcl"==d){var e;e=ij()[a]||[];if(0<e.length)return e}var f=lj(a,d),h;if(f){var k=[];if(J.cookie){var l=oi(f,J.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=oj(l[m]);n&&-1===C(k,n)&&k.push(n)}h=qj(k)}else h=k}else h=k}else h=[];return h}
var Vj=function(){var a=Tj("gac");if(a)return decodeURIComponent(a);var b=Rj(),c=[];D(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].rg);f=qj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Wj=function(a,b,c,d,e){Qj(b,c,d,e);var f=Mj[Nj(b)],h=ij().dc||[],k=!1;if(f&&0<h.length){var l=S.joined_au=S.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk";p=p+"?gclid="+h[n]+"&auiddc="+f;Ze(p);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=Nj(b),
q=Mj[t];q&&Pj(t,q,c,d,e)}};var Qk={},Rk=["G","GP"];Qk.Te="";var Sk=Qk.Te.split(",");function Tk(){var a=S;return a.gcq=a.gcq||new Uk}
var Vk=function(a,b,c){Tk().register(a,b,c)},Wk=function(a,b,c,d){Tk().push("event",[b,a],c,d)},Xk=function(a,b){Tk().push("config",[a],b)},Yk={},Zk=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},$k=function(a,b,c,d,e){this.type=a;this.m=b;this.P=c||"";this.a=d;this.i=e},Uk=function(){this.i={};this.m={};this.a=[]},al=function(a,b){var c=yf(b);return a.i[c.containerId]=a.i[c.containerId]||new Zk},bl=function(a,b,c,d){if(d.P){var e=al(a,d.P),
f=e.m;if(f){var h=I(c),k=I(e.targetConfig[d.P]),l=I(e.containerConfig),m=I(e.i),n=I(a.m),p=pg("gtm.uniqueEventId"),t=yf(d.P).prefix,q=mi(li(ki(ji(ii(hi(gi(h),k),l),m),n),function(){jg(p,t,"2");}),function(){jg(p,t,"3");});try{jg(p,t,"1");f(d.P,b,d.m,q)}catch(u){
jg(p,t,"4");}}}};
Uk.prototype.register=function(a,b,c){if(3!==al(this,a).status){al(this,a).m=b;al(this,a).status=3;c&&(al(this,a).i=c);var d=yf(a),e=Yk[d.containerId];if(void 0!==e){var f=S[d.containerId].bootstrap,h=d.prefix.toUpperCase();S[d.containerId]._spx&&(h=h.toLowerCase());var k=pg("gtm.uniqueEventId"),l=h,m=Ra()-f;if(fg&&!Xf[k]){k!==Tf&&(Rf(),Tf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);bg=bg?bg+","+n:"&cl="+n}delete Yk[d.containerId]}this.flush()}};
Uk.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);a:if(c){var f=yf(c),h;if(h=f){var k;if(k=1===al(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(al(this,c).status=2,this.push("require",[],f.containerId),Yk[f.containerId]=Ra(),zg()){}else{var n=encodeURIComponent(f.containerId),p=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Pe(p+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new $k(a,e,c,b,d));d||this.flush()};
Uk.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==al(this,c.P).status&&!a)return;break;case "set":D(c.a[0],function(l,m){I(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[Q.cc];delete d[Q.cc];var f=al(this,c.P),h=yf(c.P),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.P]={});f.a&&e||bl(this,Q.D,d,c);f.a=!0;delete d[Q.va];k?I(d,f.containerConfig):I(d,f.targetConfig[c.P]);break;
case "event":bl(this,c.a[1],c.a[0],c)}this.a.shift()}};var cl=function(a,b){return!0};var dl=function(a,b){var c;G(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=F,f=e[d[0]],h=1;f&&h<d.length;h++)e=f,f=f[d[h]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(ob(arguments[l],this.i));c=nb((0,this.i.T)(f,e,k),this.i);return c};var el=function(a){};var fl=function(a){var b;G(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=F,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return nb(b,this.i)};var gl=function(a,b){var c=null;return nb(c,this.i)};var hl=function(a){var b;G(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ea(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return nb(b,
this.i)};var il=function(a){var b;return b};var jl=function(a,b){b=void 0===b?!0:b;var c;return c};var kl=function(a,b){var c;return c};var ll=function(a,b){var c;return c};var ml=function(a){var b="";return b};var nl=function(a){var b="";G(this.getName(),["component:?string"],arguments),Ae(this,"get_url",a),b=Eh(Gh(F.location.href),a);return b};var ol=function(a,b){};var pl={},ql=function(a,b,c,d){G(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Ba(e)},h=function(){c instanceof $a&&c.Ba(e)};if(!d){Pe(a,f,h);return}var k=d;pl[k]?(pl[k].onSuccess.push(f),pl[k].onFailure.push(h)):(pl[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=pl[k].onSuccess,m=0;m<l.length;m++)M(l[m]);l.push=function(n){M(n);
return 0}},h=function(){for(var l=pl[k].onFailure,m=0;m<l.length;m++)M(l[m]);pl[k]=null},Pe(a,f,h));};var rl=function(){return!1},sl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var tl=function(){};var ul=function(a,b){var c=!1;return c};var vl=function(a,b,c){G(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);Ae(this,"send_pixel",a);var d=this.i;Se(a,function(){b instanceof $a&&b.Ba(d)},function(){c instanceof $a&&c.Ba(d)});};var wl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var xl=function(a,b,c){G(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=F,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=ob(b,this.i),!0;return!1};var yl=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var zl=function(a,b,c){var d=this;var e=function(t,q){var u=new db;u.set("name",t);u.set("message",q);return u},f=function(t){for(var q=new Uint8Array(t),u=Array(q.length),v=0;v<q.length;v++)u[v]=q[v];var w=u.map(function(x){return String.fromCharCode(x)}).join("");return F.btoa(w)};G(this.getName(),["input:!string","onSuccess:!Fn","onFailure:?Fn"],arguments);c=c||new $a("emptyFn",function(){});for(var h=F.msCrypto,k=F.crypto,l=yl(a),m=new Uint8Array(l.length),
n=0;n<l.length;n++)m[n]=l[n];if(k&&k.subtle)k.subtle.digest("SHA-256",m).then(function(t){return void b.a(d.i,f(t))},function(t){return void c.a(d.i,e(t.name,t.message))});else if(h&&h.subtle){var p=h.subtle.digest("SHA-256",m);p.oncomplete=function(t){return void b.a(d.i,f(t.target.result))};p.onerror=function(t){return void c.a(d.i,e(t.target.result.name,t.target.result.message))}}else c.a(this.i,e("BrowserNotSupported","This method is not supported in this browser."));};var Al=function(a){var b;return b};function Bl(a){}
function Cl(a,b){var c;return nb(c,this.i)}function Dl(){var a="";return a}
function El(){var a="";return a}
var Dc=function(){var a=new Je;zg()?(a.add("injectHiddenIframe",Da),a.add("injectScript",Da)):(a.add("injectHiddenIframe",ol),a.add("injectScript",ql));var b=vl;a.add("addEventCallback",Bl);a.add("aliasInWindow",cl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",dl);a.add("callLater",el);a.add("copyFromDataLayer",
Cl);a.add("copyFromWindow",fl);a.add("createQueue",hl);a.add("createArgumentsQueue",gl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",jl);a.add("getQueryParameters",kl);a.add("getReferrerQueryParameters",ll);a.add("getReferrerUrl",ml);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",nl);a.add("logToConsole",tl);a.add("makeInteger",De);a.add("makeNumber",Ee);a.add("makeString",
Fe);a.add("makeTableMap",Ge);a.add("Math",se());a.add("mock",Ie);a.add("queryPermission",ul);a.add("readCharacterSet",Dl);a.add("readTitle",El);a.add("sendPixel",b);a.add("setCookie",wl);a.add("setInWindow",xl);a.add("sha256",zl);a.add("TestHelper",Ke());a.add("toBase64",Al,!("btoa"in F)),a.add("fromBase64",
il,!("atob"in F));a.add("localStorage",sl,!rl());return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;function Fl(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;Gl();bd=function(e,f,h){Hl(f);var k=new db;D(f,function(n,p){k.set(n,nb(p))});Bc.a.a.o=xd();var l={Pf:Ld(e),eventId:void 0!==h?h.id:void 0};Lh()&&(l.Z={cd:He(),mb:{},ob:Oh()});var m=Cc(l,[e,k]);Bc.a.a.o=void 0;m instanceof qa&&"return"===m.a&&(m=m.i);return ob(m)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Tb(d)}}
function Hl(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ea(b)&&(a.gtmOnSuccess=function(){M(b)});Ea(c)&&(a.gtmOnFailure=function(){M(c)})}function Gl(){var a=Bc;S.SANDBOXED_JS_SEMAPHORE=S.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){S.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{S.SANDBOXED_JS_SEMAPHORE--}})}function Il(a){void 0!==a&&D(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kf[e]=Kf[e]||[];Kf[e].push(b)}})};var Jl=["GP","G"],Kl="G".split(/,/);var Ll=!1;Ll=!0;var Ml=null,Nl={},Ol={},Pl;function Ql(a,b){var c={event:a};b&&(c.eventModel=I(b),b[Q.Cc]&&(c.eventCallback=b[Q.Cc]),b[Q.Db]&&(c.eventTimeout=b[Q.Db]));return c}
var Wl={config:function(a){},event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=Ql(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=I(a[1]):3==a.length&&r(a[1])&&(b={},jb(a[2])||Ga(a[2])?b[a[1]]=I(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Xl={policy:!0};var Yl=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},$l=function(a){var b=Zl(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var am=!1,bm=[];function cm(){if(!am){am=!0;for(var a=0;a<bm.length;a++)M(bm[a])}}var dm=function(a){am?M(a):bm.push(a)};var sm=function(a){if(rm(a))return a;this.a=a};sm.prototype.yg=function(){return this.a};var rm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};sm.prototype.getUntrustedUpdateValue=sm.prototype.yg;var tm=[],um=!1,vm=function(a){return F["dataLayer"].push(a)},wm=function(a){var b=S["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function xm(a){var b=a._clear;D(a,function(f,h){"_clear"!==f&&(b&&vg(f,void 0),vg(f,h))});Ff||(Ff=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Lf(),a["gtm.uniqueEventId"]=d,vg("gtm.uniqueEventId",d));Hf=c;var e=ym(a);
Hf=null;switch(c){case "gtm.init":Nf("GTM",19),e&&Nf("GTM",20)}return e}function ym(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=S.zones;d=e?e.checkState(Gd.w,c):Xg;return d.active?Zh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function zm(){for(var a=!1;!um&&0<tm.length;){um=!0;delete mg.eventModel;og();var b=tm.shift();if(null!=b){var c=rm(b);if(c){var d=b;b=rm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=pg(h,1);if(Ga(k)||jb(k))k=I(k);ng[h]=k}}try{if(Ea(b))try{b.call(qg)}catch(u){}else if(Ga(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=pg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(u){}}}else{if(Ma(b)){a:{if(b.length&&r(b[0])){var q=Wl[b[0]];if(q&&(!c||!Xl[b[0]])){b=q(b);break a}}b=void 0}if(!b){um=!1;continue}}a=xm(b)||a}}finally{c&&og(!0)}}um=!1}return!a}function Am(){var a=zm();try{Yl(F["dataLayer"],Gd.w)}catch(b){}return a}
var Cm=function(){var a=Ne("dataLayer",[]),b=Ne("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};eh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});dm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<S.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new sm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);tm.push.apply(tm,d);if(300<
this.length)for(Nf("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return zm()&&h};tm.push.apply(tm,a.slice(0));Bm()&&M(Am)},Bm=function(){var a=!0;return a};var Dm={};Dm.Eb=new String("undefined");
var Em=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Dm.Eb?b:a[d]);return c.join("")}};Em.prototype.toString=function(){return this.a("undefined")};Em.prototype.valueOf=Em.prototype.toString;Dm.Af=Em;Dm.Kc={};Dm.fg=function(a){return new Em(a)};var Fm={};Dm.oh=function(a,b){var c=Lf();Fm[c]=[a,b];return c};Dm.se=function(a){var b=a?0:1;return function(c){var d=Fm[c];if(d&&"function"===typeof d[b])d[b]();Fm[c]=void 0}};Dm.Hg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Dm.eh=function(a){if(a===Dm.Eb)return a;var b=Lf();Dm.Kc[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};Dm.Rg=function(a,b,c){a instanceof Dm.Af&&(a=a.a(Dm.oh(b,c)),b=Da);return{Wc:a,C:b}};var Gm=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ve(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Hm=function(a){S.hasOwnProperty("autoEventsSettings")||(S.autoEventsSettings={});var b=S.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Im=function(a,b,c){Hm(a)[b]=c},Jm=function(a,b,c,d){var e=Hm(a),f=Sa(e,b,d);e[b]=c(f)},Km=function(a,b,c){var d=Hm(a);return Sa(d,b,c)};var Lm=["input","select","textarea"],Mm=["button","hidden","image","reset","submit"],Nm=function(a){var b=a.tagName.toLowerCase();return!Ha(Lm,function(c){return c===b})||"input"===b&&Ha(Mm,function(c){return c===a.type.toLowerCase()})?!1:!0},Om=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):Ye(a,["form"],100)},Pm=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Nm(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Qm=!!F.MutationObserver,Rm=void 0,Sm=function(a){if(!Rm){var b=function(){var c=J.body;if(c)if(Qm)(new MutationObserver(function(){for(var e=0;e<Rm.length;e++)M(Rm[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Te(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Rm.length;e++)M(Rm[e])}))})}};Rm=[];J.body?b():M(b)}Rm.push(a)};
var cn=function(){var a=J.body,b=J.documentElement||a&&a.parentElement,c,d;if(J.compatMode&&"BackCompat"!==J.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};Nf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},dn=function(a){var b=cn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},en=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var fn=[],gn=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),hn=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<fn.length;f++)if(!fn[f])return fn[f]=d,f;return fn.push(d)-1},jn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ra()};M(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=dn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},kn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(gn){var e=!1;M(function(){e||jn(a,b,c)()});return hn(function(f){e=!0;for(var h={Sa:0};h.Sa<f.length;h={Sa:h.Sa},h.Sa++)M(function(k){return function(){return a(f[k.Sa])}}(h))},b,c)}return F.setInterval(jn(a,b,c),1E3)},ln=function(a){gn?0<=a&&a<fn.length&&fn[a]&&(fn[a].disconnect(),fn[a]=void 0):F.clearInterval(a)};
var mn=function(a,b,c){function d(){var h=a();f+=e?(Ra()-e)*h.playbackRate/1E3:0;e=Ra()}var e=0,f=0;return{Sb:function(h,k,l){var m=a(),n=m.te,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.te*k):Math.round(m.hg),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=J.hidden?!1:.5<=dn(c);d();var u=Gm(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=h;u["gtm.videoUrl"]=m.url;u["gtm.videoTitle"]=m.title;u["gtm.videoDuration"]=Math.round(n);u["gtm.videoCurrentTime"]=
Math.round(p);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=q;vm(u)},qh:function(){e=Ra()},Lc:function(){d()}}};var nn=F.clearTimeout,on=F.setTimeout,V=function(a,b,c){if(zg()){b&&M(b)}else return Pe(a,b,c)},pn=function(){return F.location.href},qn=function(a){return Eh(Gh(a),"fragment")},rn=function(a){return Fh(Gh(a))},sn=function(a,b){return pg(a,b||2)},tn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=vm(a)):d=vm(a);return d},un=function(a,b){F[a]=b},W=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},vn=function(a,b,c){return oi(a,b,void 0===c?!0:!!c)},wn=function(a,b){if(zg()){b&&M(b)}else Re(a,b)},xn=function(a){return!!Km(a,"init",!1)},yn=function(a){Im(a,"init",!0)},zn=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ef;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(T("https://","http://",c))},An=function(a,b){var c=a[b];return c};
var Bn=Dm.Rg;var Yn=new Ja;function Zn(a,b){function c(h){var k=Gh(h),l=Eh(k,"protocol"),m=Eh(k,"host",!0),n=Eh(k,"port"),p=Eh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function $n(a){return ao(a)?1:0}
function ao(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if($n({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,u=Yn.get(q);u||(u=new RegExp(c,t),Yn.set(q,u));p=u.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Zn(b,
c)}return!1};var bo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var co={},eo=encodeURI,Y=encodeURIComponent,fo=Se;var go=function(a,b){if(!a)return!1;var c=Eh(Gh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ho=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};co.Ig=function(){var a=!1;return a};var up=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var Fp=window,Gp=document,Hp=function(a){var b=Fp._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fp["ga-disable-"+a])return!0;try{var c=Fp.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=oi("AMP_TOKEN",Gp.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gp.getElementById("__gaOptOutExtension")?!0:!1};var Kp=function(a){D(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[Q.ia]||{};D(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Op=function(a,b,c){Wk(b,c,a)},Pp=function(a,b,c){Wk(b,c,a,!0)},Rp=function(a,b){};
function Qp(a,b){}var Z={b:{}};

Z.b.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__send_pixel=b;Z.__send_pixel.g="send_pixel";Z.__send_pixel.h=!0;Z.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"URL must be a string.");try{if(he(Gh(f),c))return}catch(h){throw d(e,{},"Invalid URL filter.");}throw d(e,{},"Prohibited URL: "+f+".");},J:a}})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var E=Number(z[A]);if(isNaN(E))return[];n.test(z[A])||B.push(E)}return B}function c(){var y=0,B=0;return function(){var z=cn(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{jg:y,kg:B}}}function d(){q=W("self");
u=q.document;v=u.scrollingElement||u.body&&u.body.parentNode;x=c()}function e(y,B,z,A){var E=l(B),H={},K;for(K in E){H.Fa=K;if(E.hasOwnProperty(H.Fa)){var U=Number(H.Fa);y<U||(tn({event:"gtm.scrollDepth","gtm.scrollThreshold":U,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[H.Fa].join(",")}),Jm("sdl",B,function(ca){return function(aa){delete aa[ca.Fa];return aa}}(H),{}))}H={Fa:H.Fa}}}function f(){var y=x(),B=y.jg,z=y.kg,A=B/v.scrollWidth*100,E=z/v.scrollHeight*100;e(B,
"horiz.pix",p.Gb,t.Kd);e(A,"horiz.pct",p.Fb,t.Kd);e(z,"vert.pix",p.Gb,t.ee);e(E,"vert.pct",p.Fb,t.ee);Im("sdl","pending",!1)}function h(){var y=250,B=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(y=50,B=!0);var z=0,A=!1,E=function(){A?z=on(E,y):(z=0,f(),xn("sdl")&&!a()&&(Ue(q,"scroll",H),Ue(q,"resize",H),Im("sdl","init",!1)));A=!1},H=function(){B&&x();z?A=!0:(z=on(E,y),Im("sdl","pending",!0))};return H}function k(y,B,z){if(B){var A=b(String(y));Jm("sdl",z,function(E){for(var H=0;H<
A.length;H++){var K=String(A[H]);E.hasOwnProperty(K)||(E[K]=[]);E[K].push(B)}return E},{})}}function l(y){return Km("sdl",y,{})}function m(y){M(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,E=y.vtp_verticalThresholdUnits,H=y.vtp_verticalThresholdsPixels,K=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case p.Gb:k(z,B,"horiz.pix");break;case p.Fb:k(A,B,"horiz.pct")}switch(E){case p.Gb:k(H,B,"vert.pix");
break;case p.Fb:k(K,B,"vert.pct")}xn("sdl")?Km("sdl","pending")||(w||(d(),w=!0),M(function(){return f()})):(d(),w=!0,v&&(yn("sdl"),Im("sdl","pending",!0),M(function(){f();if(a()){var U=h();Te(q,"scroll",U);Te(q,"resize",U)}else Im("sdl","init",!1)})))}var n=/^\s*$/,p={Fb:"PERCENT",Gb:"PIXELS"},t={ee:"vertical",Kd:"horizontal"},q,u,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):dm(function(){m(y)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;nh();V(b,function(){var d=W("google_trackConversion");if(Ea(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=ho(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:wj()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(xg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=sn("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Eh(Gh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):rn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Gm(c,"gtm.click");tn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!xn("cl")){var c=W("document");Te(c,"click",a,!0);yn("cl")}M(b.vtp_gtmOnSuccess)})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return vn(a.vtp_name,sn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,t){if(!r(t))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<C(e,t))return}else if("write"===p){if(-1<C(f,t))return}else if("readwrite"===p){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===p){if(-1<C(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
t+".");},J:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=sn("gtm.url",1);c=c||pn();var d=b[a("vtp_component")];if(!d||"URL"==d)return rn(String(c));var e=Gh(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var p=Eh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=Eh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=sn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.ad&&b.dd>=b.ad)b.Xc&&W("self").clearInterval(b.Xc);else{b.dd++;var c=(new Date).getTime();tn({event:b.ca,"gtm.timerId":b.Xc,"gtm.timerEventNumber":b.dd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.ad,"gtm.timerStartTime":b.Re,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Re,"gtm.triggers":b.Ch})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){M(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ca:b.vtp_eventName,dd:0,interval:Number(b.vtp_interval),ad:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ch:String(b.vtp_uniqueTriggerId||"0"),Re:(new Date).getTime()};c.Xc=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;I(ho(n.vtp_fieldsToSet,"fieldName","value"),f);I(ho(n.vtp_contentGroup,"index","group"),h);I(ho(n.vtp_dimension,"index","dimension"),k);I(ho(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=I(n);d=I(d,p)}I(ho(d.vtp_fieldsToSet,"fieldName","value"),f);I(ho(d.vtp_contentGroup,
"index","group"),h);I(ho(d.vtp_dimension,"index","dimension"),k);I(ho(d.vtp_metric,"index","metric"),l);var t=uh(d.vtp_functionName);if(Ea(t)){var q="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,q=u+"."):(u="gtm"+Lf(),q=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(P){var L=[].slice.call(arguments,0);L[0]=q+L[0];t.apply(window,L)},y=function(P,L){return void 0===L?L:P(L)},B=function(P,L){if(L)for(var za in L)L.hasOwnProperty(za)&&
x("set",P+za,L[za])},z=function(){var P=function(Vp,ek,Wp){if(!jb(ek))return!1;for(var zd=Sa(Object(ek),Wp,[]),Rg=0;zd&&Rg<zd.length;Rg++)x(Vp,zd[Rg]);return!!zd&&0<zd.length},L;if(d.vtp_useEcommerceDataLayer){var za=!1;za||(L=sn("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(L=d.vtp_ecommerceMacroData.ecommerce);if(!jb(L))return;L=Object(L);var Vb=Sa(f,"currencyCode",L.currencyCode);void 0!==Vb&&x("set","&cu",Vb);P("ec:addImpression",L,"impressions");if(P("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){x("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Ka="detail checkout checkout_option click add remove purchase refund".split(" "),kb="refund purchase remove checkout checkout_option add click detail".split(" "),
lb=0;lb<Ka.length;lb++){var wb=L[Ka[lb]];if(wb){P("ec:addProduct",wb,"products");x("ec:setAction",Ka[lb],wb.actionField);if(fg)for(var Kb=0;Kb<kb.length;Kb++){var Lc=L[kb[Kb]];if(Lc){Lc!==wb&&Nf("GTM",13);break}}break}}},A=function(P,L,za){var Vb=0;if(P)for(var Ka in P)if(P.hasOwnProperty(Ka)&&(za&&v[Ka]||!za&&void 0===v[Ka])){var kb=w[Ka]?Oa(P[Ka]):P[Ka];"anonymizeIp"!=Ka||kb||(kb=void 0);L[Ka]=kb;Vb++}return Vb},E={name:u};A(f,
E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",wj(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,L){void 0!==d[L]&&x("set",P,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};A(f,H,!1)&&x("set",H);var K;d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var P=f&&f.hitCallback;Ea(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};A(K,U,!1);x("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ya="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:ya})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var va="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:va})}K?x("send","pageview",K):x("send","pageview");
d.vtp_autoLinkDomains&&vh(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var Aa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var mb=T("https:","http:","//www.google-analytics.com/"+Aa,f&&f.forceSSL);
V(mb,function(){var P=sh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else M(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.g="get_url";Z.__get_url.h=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,h,k){if(h){if(!r(h))throw e(f,{},"URL component must be a string.");if(c&&0>C(c,h))throw e(f,{},"Prohibited URL component: "+h);if("query"===h&&d){if(!k)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!r(k))throw e(f,{},"Query key must be a string.");if(0>C(d,k))throw e(f,{},"Prohibited query key: "+k);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},J:a}})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Script URL must be a string.");try{if(he(Gh(f),c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();


Z.b.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return J.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<t.length;y++)if(0<=w.indexOf("//"+t[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!u){var y=W("document");u=y.location.protocol+"//"+y.location.hostname;y.location.port&&(u+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(u)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.td)&&(w.setAttribute("data-gtm-yt-inspected-"+x.td,"true"),d(w,x.ye))){w.id||(w.id=a());var y=W("YT"),B=y.get(w.id);B||(B=new y.Player(w.id));var z=h(B,x),A={},E;for(E in z)A.Ta=E,z.hasOwnProperty(A.Ta)&&B.addEventListener(A.Ta,function(H){return function(K){return z[H.Ta](K.data)}}(A)),A={Ta:A.Ta}}}
function f(w){M(function(){function x(){for(var B=y.getElementsByTagName("iframe"),z=B.length,A=0;A<z;A++)e(B[A],w)}var y=W("document");x();Sm(x)})}function h(w,x){var y,B;function z(){ha=mn(function(){return{url:R,title:X,te:O,hg:w.getCurrentTime(),playbackRate:ya}},x.td,w.getIframe());O=0;X=R="";ya=1;return A}function A(P){switch(P){case q.PLAYING:O=Math.round(w.getDuration());R=w.getVideoUrl();if(w.getVideoData){var L=w.getVideoData();X=L?L.title:""}ya=w.getPlaybackRate();x.$f?ha.Sb("start"):ha.Lc();
N=m(x.gh,x.fh,w.getDuration());return E(P);default:return A}}function E(){va=w.getCurrentTime();Aa=(new Date).getTime();ha.qh();fa();return H}function H(P){var L;switch(P){case q.ENDED:return U(P);case q.PAUSED:L="pause";case q.BUFFERING:var za=w.getCurrentTime()-va;L=1<Math.abs(((new Date).getTime()-Aa)/1E3*ya-za)?"seek":L||"buffering";w.getCurrentTime()&&(x.Zf?ha.Sb(L):ha.Lc());aa();return K;case q.UNSTARTED:return z(P);default:return H}}function K(P){switch(P){case q.ENDED:return U(P);case q.PLAYING:return E(P);
case q.UNSTARTED:return z(P);default:return K}}function U(){for(;B;){var P=y;nn(B);P()}x.Yf&&ha.Sb("complete",1);return z(q.UNSTARTED)}function ca(){}function aa(){B&&(nn(B),B=0,y=ca)}function fa(){if(N.length&&0!==ya){var P=-1,L;do{L=N[0];if(L.Ca>w.getDuration())return;P=(L.Ca-w.getCurrentTime())/ya;if(0>P&&(N.shift(),0===N.length))return}while(0>P);y=function(){B=0;y=ca;0<N.length&&N[0].Ca===L.Ca&&(N.shift(),ha.Sb("progress",L.Me,L.Pe));fa()};B=on(y,1E3*P)}}var ha,N=[],O,R,X,ya,va,Aa,mb=z(q.UNSTARTED);
B=0;y=ca;return{onStateChange:function(P){mb=mb(P)},onPlaybackRateChange:function(P){va=w.getCurrentTime();Aa=(new Date).getTime();ha.Lc();ya=P;aa();fa()}}}function k(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||100<A||0>A||B.push(A/100)}B.sort(function(E,H){return E-H});return B}function l(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||0>A||B.push(A)}B.sort(function(E,H){return E-H});return B}function m(w,x,y){var B=
w.map(function(E){return{Ca:E,Pe:E,Me:void 0}});if(!x.length)return B;var z=x.map(function(E){return{Ca:E*y,Pe:void 0,Me:E}});if(!B.length)return z;var A=B.concat(z);A.sort(function(E,H){return E.Ca-H.Ca});return A}function n(w){w.vtp_triggerStartOption?p(w):eh(function(){p(w)})}function p(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,B=!!w.vtp_capturePause,z=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(x||y||B||z.length||
A.length){var H={$f:x,Yf:y,Zf:B,fh:z,gh:A,ye:E,td:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},K=W("YT"),U=function(){f(H)};M(w.vtp_gtmOnSuccess);if(K)K.ready&&K.ready(U);else{var ca=W("onYouTubeIframeAPIReady");un("onYouTubeIframeAPIReady",function(){ca&&ca();U()});M(function(){for(var aa=W("document"),fa=aa.getElementsByTagName("script"),ha=fa.length,N=0;N<ha;N++){var O=fa[N].getAttribute("src");if(b(O,"iframe_api")||b(O,"player_api"))return}for(var R=aa.getElementsByTagName("iframe"),
X=R.length,ya=0;ya<X;ya++)if(!v&&d(R[ya],H.ye)){V("https://www.youtube.com/iframe_api");v=!0;break}})}}else M(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},u,v=!1;Z.__ytl=n;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0}();


Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){M(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
$i())){nj(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Pa:void 0};kj(m);rj(["aw","dc"],m);Wj(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),t=b.vtp_urlPosition,q=!!b.vtp_formDecoration;pj(a,p,t,q,n);}
sj();})}();

Z.b.aev=["google"],function(){function a(q,u){var v=xg(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var x=q+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(q,w);if(B&&(y=v(B),n[x]=y,p.push(x),35<p.length)){var z=p.shift();delete n[z]}}return y}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(pn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(q))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!go(q,w)}function e(q){m.test(q)||(q="http://"+q);return Eh(Gh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Ve(q,"value");case "button":return We(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)Nm(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Ve(w,u)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,We)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=Gh(B),A=String(q.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,q.vtp_affiliatedDomains);break a;default:y=Eh(z,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(u,w,v);else{var H=q.vtp_attribute,K=a(u,"element");E=K&&Ve(K,H)||v||""}return E;case "MD":var U=q.vtp_mdValue,ca=b(u,"MD",Zm);return U&&ca?bn(ca,
U)||v:ca||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=I(a),c=b;c[rd.xa]=null;c[rd.df]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:pn()}function b(f,h){Te(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:rn(l),M:qn(l)})})}function c(f,h){Te(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:rn(l),M:qn(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(Ea(m))try{l[f]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:rn(pn()),
M:qn(pn())})}}catch(n){}}function e(){var f={source:null,state:W("history").state||null,url:rn(pn()),M:qn(pn())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.M!=h.M){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.M,"gtm.newUrlFragment":h.M,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;tn(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=0})(function(f){var h=W("self");if(!xn("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);yn("hl")}M(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){nh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:wj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,x,y){var B="DATA_LAYER"==v?sn(y):k[x];B&&(l[w]=B)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var p=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,x,y,B){var z="DATA_LAYER"==v?sn(y):k[x];B(z)&&p(w,z)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var u=!0;u&&b.push(l);a||(a=!0,
V(q,f(),e(q)))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.g="bzi";Z.__bzi.h=!0;Z.__bzi.priorityOverride=0})(function(a){F._linkedin_data_partner_id=a.vtp_id;V("https://snap.licdn.com/li.lms-analytics/insight.min.js",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{V("//bat.bing.com/bat.js",
function(){var k=bo(W("UET"),{ti:c.vtp_tagId,q:e});F[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){M(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=ho(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){M(a.vtp_gtmOnFailure)})}();
Z.b.zone=[],function(){function a(p){for(var t=p.vtp_boundaries||[],q=0;q<t.length;q++)if(!t[q])return!1;return!0}function b(p){var t=Gd.w,q=t+":"+p.vtp_gtmTagId,u=sn("gtm.uniqueEventId")||0,v=Yg(function(){return new h}),w=a(p),x=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(H){return H.typeId}):null;x=x&&Wa(x,f);if(v.registerZone(q,u,w,x))for(var y=p.vtp_childContainers.map(function(H){return H.publicId}),B=0;B<y.length;B++){var z=String(y[B]);if(v.registerChild(z,t,q)){var A=
0!==z.indexOf("GTM-");if(A){var E=function(H,K){tn(arguments)};E("js",new Date);m?(E("config",z),l||zn(z,A)):Xk({},z)}else zn(z,A)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.a={};this.i={}};h.prototype.checkState=function(p,t){var q=this.a[p];if(!q)return d;var u=this.checkState(q.Le,t);if(!u.active)return c;
for(var v=[],w=0;w<q.Bd.length;w++){var x=this.i[q.Bd[w]];x.rb(t)&&v.push(x)}return v.length?{active:!0,isWhitelisted:function(y,B){B=B||[];if(!u.isWhitelisted(y,B))return!1;for(var z=0;z<v.length;++z)if(v[z].isWhitelisted(y,B))return!0;return!1}}:c};h.prototype.unregisterChild=function(p){delete this.a[p]};h.prototype.registerZone=function(p,t,q,u){var v=this.i[p];if(v)return v.m(t,q),!1;if(!q)return!1;this.i[p]=new k(t,u);return!0};h.prototype.registerChild=function(p,t,q){var u=this.a[p];if(!u&&
S[p]||u&&u.Le!==t)return!1;if(u)return u.Bd.push(q),!1;this.a[p]={Le:t,Bd:[q]};return!0};var k=function(p,t){this.a=[{eventId:p,rb:!0}];this.i=null;if(t){this.i={};for(var q=0;q<t.length;q++)this.i[t[q]]=!0}};k.prototype.m=function(p,t){var q=this.a[this.a.length-1];p<=q.eventId||q.rb!=t&&this.a.push({eventId:p,rb:t})};k.prototype.rb=function(p){if(!this.a||0==this.a.length)return!1;for(var t=this.a.length-1;0<=t;t--)if(this.a[t].eventId<=p)return this.a[t].rb;return!1};k.prototype.isWhitelisted=
function(p,t){t=t||[];if(!this.i||e[p]||this.i[p])return!0;for(var q=0;q<t.length;++q)if(this.i[t[q]])return!0;return!1};var l=!1;var m=!0;var n=function(p){b(p);M(p.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.priorityOverride=0}();
Z.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Oe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){M(h)}}}var b=function(d,e,f){eh(function(){var h,k=S;k.postscribe||(k.postscribe=je);h=k.postscribe;var l={done:e},m=J.createElement("div");m.style.display="none";m.style.visibility="hidden";J.body.appendChild(m);try{h(m,d,l)}catch(n){M(f)}})};var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=Bn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Wc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(J.body,Xe(h),k,e)()}else on(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(sn("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!en(f.target)){h.has(e.Hb)||h.set(e.Hb,""+b());h.has(e.Fc)||h.set(e.Fc,""+b());var p=0;h.has(e.Jb)&&(p=Number(h.get(e.Jb)));p+=100;h.set(e.Jb,""+p);if(p>=k){var t=Gm(f.target,"gtm.elementVisibility",[h.uid]),q=dn(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.Fc));
t["gtm.visibleLastTime"]=Number(h.get(e.Hb));tn(t);l()}}}if(!h.has(e.Za)&&(0==k&&m(),!h.has(e.Ga))){var n=W("self").setInterval(m,100);h.set(e.Za,n)}}function d(f){f.has(e.Za)&&(W("self").clearInterval(Number(f.get(e.Za))),f.a(e.Za))}var e={Za:"polling-id-",Fc:"first-on-screen-",Hb:"recent-on-screen-",Jb:"total-visible-time-",Ga:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var x=!1,y=null;if("CSS"===l){try{y=bf(m)}catch(H){}x=!!y&&v.length!=y.length}else if("ID"===l){var B=J.getElementById(m);B&&(y=[B],x=1!=v.length||v[0]!==B)}y||(y=[],x=0<v.length);if(x){for(var z=0;z<v.length;z++){var A=
new a(v[z],q);d(A)}v=[];for(var E=0;E<y.length;E++)v.push(y[E]);0<=w&&ln(w);0<v.length&&(w=kn(k,v,[t]))}}function k(x){var y=new a(x.target,q);x.intersectionRatio>=t?y.has(e.Ga)||c(x,y,p,"ONCE"===u?function(){for(var B=0;B<v.length;B++){var z=new a(v[B],q);z.set(e.Ga,"1");d(z)}ln(w);if(n&&Rm)for(var A=0;A<Rm.length;A++)Rm[A]===h&&Rm.splice(A,1)}:function(){y.set(e.Ga,"1");d(y)}):(d(y),"MANY_PER_ELEMENT"===u&&y.has(e.Ga)&&(y.a(e.Ga),y.a(e.Jb)),y.a(e.Hb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,p=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Sm(h);M(f.vtp_gtmOnSuccess)})}();

var Sp={};Sp.macro=function(a){if(Dm.Kc.hasOwnProperty(a))return Dm.Kc[a]},Sp.onHtmlSuccess=Dm.se(!0),Sp.onHtmlFailure=Dm.se(!1);Sp.dataLayer=qg;Sp.callback=function(a){Jf.hasOwnProperty(a)&&Ea(Jf[a])&&Jf[a]();delete Jf[a]};function Tp(){S[Gd.w]=Sp;Ua(Kf,Z.b);jd=jd||Dm;kd=Wg}
function Up(){bj.gtm_3pds=!0;S=F.google_tag_manager=F.google_tag_manager||{};if(S[Gd.w]){var a=S.zones;a&&a.unregisterChild(Gd.w)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)ed.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(p)}hd=Z;id=$n;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Fl();Kd=new Jd(q);if(void 0!==u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");Kf[y]=w}Il(v);Tp();Cm();$g=!1;ah=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)ch();else{Te(J,"DOMContentLoaded",
ch);Te(J,"readystatechange",ch);if(J.createEventObject&&J.documentElement.doScroll){var B=!0;try{B=!F.frameElement}catch(H){}B&&dh()}Te(F,"load",ch)}am=!1;"complete"===J.readyState?cm():Te(F,"load",cm);a:{if(!fg)break a;F.setInterval(gg,864E5);}
Gf=(new Date).getTime();}}Up();

})()
