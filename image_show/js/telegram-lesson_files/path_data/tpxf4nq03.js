



/* ControlTag Loader for Dropbox (MAIN) 7fe1f424-c09d-4781-af13-2352d2ee4229 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.41.0","schema_version":3},"confid":"tpxf4nq03","context_terms":[],"publisher":{"name":"Dropbox (MAIN)","active":true,"uuid":"7fe1f424-c09d-4781-af13-2352d2ee4229","version_bucket":"stable","id":4049},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":true,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":true,"context_terms":false,"optout_button_id":"kx-optout-button","user_id_cookie":"kppid","dfp_premium":true,"control_tag_namespace":"dropboxmain"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/7fe1f424-c09d-4781-af13-2352d2ee4229","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/7fe1f424-c09d-4781-af13-2352d2ee4229","consent_set":"https://consumer.krxd.net/consent/set/7fe1f424-c09d-4781-af13-2352d2ee4229","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/7fe1f424-c09d-4781-af13-2352d2ee4229","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"dropbox.com","cap":255,"id":1671067,"organization_id":4049,"uid":"tpxf4nq03"},"tags":[{"id":39154,"name":"Krux UTM DTC","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_utm_source': params.utm_source,\n\t'page_attr_utm_medium': params.utm_medium,\n\t'page_attr_utm_campaign': params.utm_campaign,\n\t'page_attr_utm_content': params.utm_content,\n\t'page_attr_utm_term': params.utm_term \n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":39182,"name":"UTM Media Tracker - Paid Social","content":"<script>\n(function() {\n    var clickURL = Krux('get', 'url_click'),\n        _ = Krux('require:underscore'),\n        libUtil = Krux('require:util.library-tag'),\n        pixelParam, store, sent,\n        confid, campaignid, siteid;\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        var allowedSource = libUtil.removeFalsyStrings('fb,instagram,linkedin'.toLowerCase()),\n            i = 0;\n        for (; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        // Cater for client not using allowedSource\n        if (!allowedSource.length) allowedSource.push(config.kxsiteid.toLowerCase());\n        // Invalid if source is not in the allowed list\n        if (_.indexOf(allowedSource, config.kxsiteid.toLowerCase()) < 0) return false;\n        return true;\n    }\n\n    // Function to collect and normalize values\n    function getParameter(method, path) {\n        var value;\n\n        if (!(method && path)) return;\n\n        switch (method) {\n            case 'none':\n                break;\n            case 'text':\n                value = path;\n                break;\n            case 'get':\n                value = Krux('get', path);\n                break;\n            default:\n                value = Krux('scrape.' + method, path);\n        }\n\n        if (value && !_.isArray(value)) return value\n            .replace(/[^a-zA-Z0-9_-]+/g, '_')\n            .replace(/_+/g, '_')\n            .replace(/^_/, '')\n            .replace(/_$/, '');\n        // Use null if no result as it is included in JSON.stringify\n        return null;\n    }\n\n    // Scrape Media Attributes\n    confid = getParameter('text', 'tqs6ypmw7');\n    campaignid = getParameter('url_param', 'utm_campaign');\n    siteid = getParameter('url_param', 'utm_source');\n\n    // Ensure minimum requirements are met\n    if (confid && campaignid && siteid) {\n        // Use omit to remove undefined values to match validation object\n        pixelParam = _.omit({\n            'kxconfid': confid,\n            'kxcampaignid': campaignid,\n            'kxsiteid': siteid,\n            'kxadvertiserid': getParameter('undefined', 'undefined'),\n            'kxplacementid': getParameter('undefined', 'undefined'),\n            'kxadid': getParameter('undefined', 'undefined'),\n            'kxcreativeid': getParameter('undefined', 'undefined'),\n            'kxbrand': getParameter('undefined', 'undefined'),\n            'clk': 'https://beacon.krxd.net/click_landing.gif'\n        }, function(value) {\n            return !value\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            sent = Krux('require:http').pixel({\n                url: clickURL,\n                data: pixelParam\n            });\n        }\n    }\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":39183,"name":"UTM Media Tracker - Search","content":"<script>\n(function() {\n    var clickURL = Krux('get', 'url_click'),\n        _ = Krux('require:underscore'),\n        libUtil = Krux('require:util.library-tag'),\n        pixelParam, store, sent,\n        confid, campaignid, siteid;\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        var allowedSource = libUtil.removeFalsyStrings('google,bing,adthena'.toLowerCase()),\n            i = 0;\n        for (; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        // Cater for client not using allowedSource\n        if (!allowedSource.length) allowedSource.push(config.kxsiteid.toLowerCase());\n        // Invalid if source is not in the allowed list\n        if (_.indexOf(allowedSource, config.kxsiteid.toLowerCase()) < 0) return false;\n        return true;\n    }\n\n    // Function to collect and normalize values\n    function getParameter(method, path) {\n        var value;\n\n        if (!(method && path)) return;\n\n        switch (method) {\n            case 'none':\n                break;\n            case 'text':\n                value = path;\n                break;\n            case 'get':\n                value = Krux('get', path);\n                break;\n            default:\n                value = Krux('scrape.' + method, path);\n        }\n\n        if (value && !_.isArray(value)) return value\n            .replace(/[^a-zA-Z0-9_-]+/g, '_')\n            .replace(/_+/g, '_')\n            .replace(/^_/, '')\n            .replace(/_$/, '');\n        // Use null if no result as it is included in JSON.stringify\n        return null;\n    }\n\n    // Scrape Media Attributes\n    confid = getParameter('text', 'tqs6wxzm2');\n    campaignid = getParameter('url_param', 'utm_campaign');\n    siteid = getParameter('url_param', 'utm_source');\n\n    // Ensure minimum requirements are met\n    if (confid && campaignid && siteid) {\n        // Use omit to remove undefined values to match validation object\n        pixelParam = _.omit({\n            'kxconfid': confid,\n            'kxcampaignid': campaignid,\n            'kxsiteid': siteid,\n            'kxadvertiserid': getParameter('undefined', 'undefined'),\n            'kxplacementid': getParameter('undefined', 'undefined'),\n            'kxadid': getParameter('undefined', 'undefined'),\n            'kxcreativeid': getParameter('undefined', 'undefined'),\n            'kxbrand': getParameter('undefined', 'undefined'),\n            'clk': 'https://beacon.krxd.net/click_landing.gif'\n        }, function(value) {\n            return !value\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            sent = Krux('require:http').pixel({\n                url: clickURL,\n                data: pixelParam\n            });\n        }\n    }\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":39184,"name":"UTM Media Tracker - Display Direct","content":"<script>\n(function() {\n    var clickURL = Krux('get', 'url_click'),\n        _ = Krux('require:underscore'),\n        libUtil = Krux('require:util.library-tag'),\n        pixelParam, store, sent,\n        confid, campaignid, siteid;\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        var allowedSource = libUtil.removeFalsyStrings('pk4,globalwide media'.toLowerCase()),\n            i = 0;\n        for (; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        // Cater for client not using allowedSource\n        if (!allowedSource.length) allowedSource.push(config.kxsiteid.toLowerCase());\n        // Invalid if source is not in the allowed list\n        if (_.indexOf(allowedSource, config.kxsiteid.toLowerCase()) < 0) return false;\n        return true;\n    }\n\n    // Function to collect and normalize values\n    function getParameter(method, path) {\n        var value;\n\n        if (!(method && path)) return;\n\n        switch (method) {\n            case 'none':\n                break;\n            case 'text':\n                value = path;\n                break;\n            case 'get':\n                value = Krux('get', path);\n                break;\n            default:\n                value = Krux('scrape.' + method, path);\n        }\n\n        if (value && !_.isArray(value)) return value\n            .replace(/[^a-zA-Z0-9_-]+/g, '_')\n            .replace(/_+/g, '_')\n            .replace(/^_/, '')\n            .replace(/_$/, '');\n        // Use null if no result as it is included in JSON.stringify\n        return null;\n    }\n\n    // Scrape Media Attributes\n    confid = getParameter('text', 'tqs6p28r8');\n    campaignid = getParameter('url_param', 'utm_campaign');\n    siteid = getParameter('url_param', 'utm_source');\n\n    // Ensure minimum requirements are met\n    if (confid && campaignid && siteid) {\n        // Use omit to remove undefined values to match validation object\n        pixelParam = _.omit({\n            'kxconfid': confid,\n            'kxcampaignid': campaignid,\n            'kxsiteid': siteid,\n            'kxadvertiserid': getParameter('undefined', 'undefined'),\n            'kxplacementid': getParameter('undefined', 'undefined'),\n            'kxadid': getParameter('undefined', 'undefined'),\n            'kxcreativeid': getParameter('undefined', 'undefined'),\n            'kxbrand': getParameter('undefined', 'undefined'),\n            'clk': 'https://beacon.krxd.net/click_landing.gif'\n        }, function(value) {\n            return !value\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            sent = Krux('require:http').pixel({\n                url: clickURL,\n                data: pixelParam\n            });\n        }\n    }\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":39185,"name":"UTM Media Tracker - Display Programmatic","content":"<script>\n(function() {\n    var clickURL = Krux('get', 'url_click'),\n        _ = Krux('require:underscore'),\n        libUtil = Krux('require:util.library-tag'),\n        pixelParam, store, sent,\n        confid, campaignid, siteid;\n\n    // Function to retrieve capping info from sessionStorage\n    function get(key) {\n        try {\n            return JSON.parse(sessionStorage.getItem(key) || '[]');\n        } catch (e) {\n            return [];\n        }\n    }\n\n    // Function to add capping info to sessionStorage\n    function set(key, value) {\n        try {\n            sessionStorage.setItem(key, JSON.stringify(value));\n        } catch (e) {}\n    }\n\n    // Function to check if tag is valid by comparing aginst capping info\n    function configValidate(config) {\n        var allowedSource = libUtil.removeFalsyStrings('ttd,mediamath'.toLowerCase()),\n            i = 0;\n        for (; i < store.length; i++) {\n            if (_.isEqual(store[i], config)) return false;\n        }\n        // Cater for client not using allowedSource\n        if (!allowedSource.length) allowedSource.push(config.kxsiteid.toLowerCase());\n        // Invalid if source is not in the allowed list\n        if (_.indexOf(allowedSource, config.kxsiteid.toLowerCase()) < 0) return false;\n        return true;\n    }\n\n    // Function to collect and normalize values\n    function getParameter(method, path) {\n        var value;\n\n        if (!(method && path)) return;\n\n        switch (method) {\n            case 'none':\n                break;\n            case 'text':\n                value = path;\n                break;\n            case 'get':\n                value = Krux('get', path);\n                break;\n            default:\n                value = Krux('scrape.' + method, path);\n        }\n\n        if (value && !_.isArray(value)) return value\n            .replace(/[^a-zA-Z0-9_-]+/g, '_')\n            .replace(/_+/g, '_')\n            .replace(/^_/, '')\n            .replace(/_$/, '');\n        // Use null if no result as it is included in JSON.stringify\n        return null;\n    }\n\n    // Scrape Media Attributes\n    confid = getParameter('text', 'tqs6ttp43');\n    campaignid = getParameter('url_param', 'utm_campaign');\n    siteid = getParameter('url_param', 'utm_source');\n\n    // Ensure minimum requirements are met\n    if (confid && campaignid && siteid) {\n        // Use omit to remove undefined values to match validation object\n        pixelParam = _.omit({\n            'kxconfid': confid,\n            'kxcampaignid': campaignid,\n            'kxsiteid': siteid,\n            'kxadvertiserid': getParameter('undefined', 'undefined'),\n            'kxplacementid': getParameter('undefined', 'undefined'),\n            'kxadid': getParameter('undefined', 'undefined'),\n            'kxcreativeid': getParameter('undefined', 'undefined'),\n            'kxbrand': getParameter('undefined', 'undefined'),\n            'clk': 'https://beacon.krxd.net/click_landing.gif'\n        }, function(value) {\n            return !value\n        });\n\n        // Retrieve capping info\n        store = get('k_utm_store');\n\n        if (configValidate(pixelParam)) {\n            // Update capping info to prevent re-fires\n            store.push(pixelParam);\n            set('k_utm_store', store);\n            sent = Krux('require:http').pixel({\n                url: clickURL,\n                data: pixelParam\n            });\n        }\n    }\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":39100,"name":"Krux Standard DTC","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '3'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":55,"name":"Acxiom APAC Usermatch","content":"<script>\r\n(function(){\r\n\tvar liveramp_url = '//s.acxiomapac.com/sci',\r\n\tdata = {\r\n\t\tpid: 90010,\r\n\t\tuid: Krux('get','user')\r\n\t};\r\n\tif(data.uid){\r\n\t\tKrux('require:http').pixel({\r\n\t\t\turl: liveramp_url,\r\n\t\t\tdata: data\r\n\t\t});\r\n\t}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.09ebc571a022d419934530eaf14c8a78', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
