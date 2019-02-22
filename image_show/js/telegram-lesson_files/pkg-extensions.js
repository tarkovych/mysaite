var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};define("modules/clean/react/app_actions/app_actions_menu",["require","exports","modules/clean/react/async/loadable"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppActionsMenu=n.Loadable({loader:function(){return new Promise(function(t,n){e(["modules/clean/react/app_actions/app_actions_menu_component"],t,n)}).then(__importStar).then(function(e){return e.AppActionsMenu})}}),t.UnconnectedAppActionsMenu=n.Loadable({loader:function(){return new Promise(function(t,n){e(["modules/clean/react/app_actions/unconnected_menu"],t,n)}).then(__importStar).then(function(e){return e.UnconnectedMenu})}})}),define("modules/clean/react/app_actions/category",["require","exports","modules/core/i18n"],function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={0:{displayName:n._("DEFAULT")},1:{displayName:n._("Send for signature"),developerDescription:n._("Send for signature")},2:{displayName:n._("Edit"),developerDescription:n._("PDF editing")},3:{displayName:n._("View or Edit"),developerDescription:n._("View or edit")},4:{displayName:n._("Edit"),developerDescription:n._("Image editing")},5:{displayName:n._("Video comment"),developerDescription:n._("Video comment")},6:{displayName:n._("Send fax"),developerDescription:n._("Send fax")}};(function(e){function t(e){return a[e]||null}function n(e){var n=t(e);return n&&n.displayName}function s(e){var n=t(e);return n&&n.developerDescription||null}e.DEFAULT=0,e.ESIGNATURE=1,e.PDF_EDITING=2,e.VIEW_OR_EDIT=3,e.IMAGE_EDITING=4,e.VIDEO_COMMENT=5,e.SEND_FAX=6,e.getDisplayName=n,e.getDeveloperDescription=s})(t.Category||(t.Category={}))}),define("modules/clean/react/app_actions/data/action_creators",["require","exports","tslib","modules/clean/react/extensions/client","modules/clean/react/app_actions/data/types"],function(e,t,n,a,s){"use strict";var i=this;Object.defineProperty(t,"__esModule",{value:!0}),t.updateExtensionConfigWithNewFiles=function(e){var r=e.files,o=e.user;return function(e,c){return n.__awaiter(i,void 0,void 0,function(){var i,c;return n.__generator(this,function(n){switch(n.label){case 0:return[4,a.getExtensionsClient().getActionsForFileBatch(r,o.id)];case 1:return i=n.sent(),e(t.setExtensionsFeatureFlags({featureFlags:a.getExtensionsClient().getFeatureFlags()})),c=a.getExtensionsClient().getAppIcons(),e({type:s.ActionTypes.REFRESH_ICONS,payload:{icons:c}}),e({type:s.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES,payload:{fileExtensionsConfigs:i}}),e(t.setLoadedState({clientLoaded:a.getExtensionsClient().getLoadedState()})),[2]}})})}},t.setExtensionsFeatureFlags=function(e){var t=e.featureFlags;return{type:s.ActionTypes.SET_EXTENSIONS_FEATURE_FLAGS,payload:{featureFlags:t}}},t.setLoadedState=function(e){var t=e.clientLoaded;return{type:s.ActionTypes.SET_LOADED_STATE,payload:{clientLoaded:t}}},t.refreshAppIcons=function(e){var t=e.user;return function(e,r){return n.__awaiter(i,void 0,void 0,function(){var i;return n.__generator(this,function(n){switch(n.label){case 0:return[4,a.getExtensionsClient().refreshAppIcons(t.id)];case 1:return n.sent(),i=a.getExtensionsClient().getAppIcons(),e({type:s.ActionTypes.REFRESH_ICONS,payload:{icons:i}}),[2]}})})}},t.updateLinkState=function(e){var t=e.actionId,r=e.linkState;return function(e,o){return n.__awaiter(i,void 0,void 0,function(){var i,o;return n.__generator(this,function(n){switch(n.label){case 0:return[4,a.getExtensionsClient()];case 1:return i=n.sent(),i.updateLinkStateForAction(t,r),o=i.extensionsConfigsForTrackedFiles(),e({type:s.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES,payload:{fileExtensionsConfigs:o}}),[2]}})})}}}),define("modules/clean/react/app_actions/data/reducer",["require","exports","tslib","modules/clean/react/app_actions/data/types"],function(e,t,n,a){"use strict";function s(e,n){switch(void 0===e&&(e=t.defaultExtensionsState),n.type){case a.ActionTypes.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES:return i(e,n);case a.ActionTypes.SET_EXTENSIONS_FEATURE_FLAGS:return r(e,n);case a.ActionTypes.REFRESH_ICONS:return o(e,n);case a.ActionTypes.SET_LOADED_STATE:return c(e,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultExtensionsState={fileExtensionsConfigs:{},featureFlags:{},appIcons:{},clientLoaded:!1};var i=function(e,t){var a=t.payload.fileExtensionsConfigs;return n.__assign({},e,{fileExtensionsConfigs:n.__assign({},e.fileExtensionsConfigs,a)})},r=function(e,t){var a=t.payload.featureFlags;return n.__assign({},e,{featureFlags:a})},o=function(e,t){var a=t.payload.icons;return n.__assign({},e,{appIcons:a})},c=function(e,t){var a=t.payload.clientLoaded;return n.__assign({},e,{clientLoaded:a})};t.extensionsReducer=s}),define("modules/clean/react/app_actions/data/selectors",["require","exports","modules/clean/redux/types","modules/clean/redux/selectors","modules/clean/react/app_actions/data/reducer"],function(e,t,n,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getExtensionsState=function(e){return a.getStateAtNamespace(e,n.EXTENSIONS_NAMESPACE_KEY)||s.defaultExtensionsState},t.fileExtensionsConfigs=function(e){return t.getExtensionsState(e).fileExtensionsConfigs},t.extensionsFeatureFlags=function(e){return t.getExtensionsState(e).featureFlags},t.getAppIcons=function(e){return t.getExtensionsState(e).appIcons},t.isLoaded=function(e){return t.getExtensionsState(e).clientLoaded}}),define("modules/clean/react/app_actions/data/types",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});(function(e){e.UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES="EXTENSIONS/UPDATE_EXTENSIONS_CONFIG_WITH_NEW_FILES",e.SET_EXTENSIONS_FEATURE_FLAGS="EXTENSIONS/SET_EXTENSIONS_FEATURE_FLAGS",e.REFRESH_ICONS="EXTENSIONS/REFRESH_ICONS",e.SET_LOADED_STATE="EXTENSIONS/SET_LOADED_STATE",e.UPDATE_LINK_STATE="EXTENSIONS/UPDATE_LINK_STATE"})(t.ActionTypes||(t.ActionTypes={}));(function(e){e[e.PrimaryButton=0]="PrimaryButton",e[e.SecondaryButton=1]="SecondaryButton",e[e.SidebarLink=2]="SidebarLink"})(t.TriggerType||(t.TriggerType={}))}),define("modules/clean/react/app_actions/feedback_modal",["require","exports","tslib","modules/clean/ajax","react","modules/clean/react/css","modules/clean/react/image","spectrum/button","modules/core/i18n","modules/clean/react/modal","spectrum/input","modules/clean/static_urls","modules/clean/filepath","modules/clean/file_store/utils","spectrum/dropdown_menu","dropins_sdk_refactor/dropins_sdk_internal","modules/constants/dropins"],function(e,t,n,a,s,i,r,o,c,u,l,d,p,f,_,h,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importStar(a),s=n.__importDefault(s),t.bugReport=c._("Report a problem"),t.suggestSomething=c._("Suggest something");var m="extensions-feedback",g=[t.bugReport,t.suggestSomething],y=(function(e){function i(n){var i=e.call(this,n)||this;return i.submitFeedback=function(){var e=i.state.detailsText;if(i.state.screenshotLinks.length>0){e+=" (Screenshot links: "+i.state.screenshotLinks.join("; ")+")"}if(i.state.category===t.bugReport){var n="[Extensions]"+i.state.subjectText;a.SilentBackgroundRequest({url:"/support_ajax/support_form",data:{user_email:i.props.user.email,subject_posted:n,details_posted:e}})}else a.SilentBackgroundRequest({url:"/aa/app_choice_feedback",subject_user:i.props.user.id,data:{ext:i.getFileExt(),other_suggested_apps:i.state.subjectText,comments:e,surface:i.props.surface||"unknown",menu_contents:i.props.visibleMenuItems?i.props.visibleMenuItems.join(", "):""}});i.setState({showThankYouModal:!0})},i.handleSubjectChanged=function(e){i.setState({subjectText:e.currentTarget.value.trim()})},i.handleDetailsChanged=function(e){i.setState({detailsText:e.currentTarget.value.trim()})},i.handleChooseFromDropbox=function(){h.Dropbox.choose({linkType:"preview",multiselect:!0,success:function(e){var t=e.map(function(e){return e.link}),n=e.map(function(e){return e.name});i.setState({screenshotLinks:t,attachmentNames:n})},extensions:["images","video"]})},i.isAnyFeedbackInput=function(){return i.state.subjectText.length>0||i.state.detailsText.length>0},i.handleCategoryChange=function(e){i.setState({category:e})},i.renderFeedbackModel=function(){return s.default.createElement(u.Modal,{className:m+"-modal",ariaLabel:"Feedback Modal",acceptButtonText:null,style:"clean",autoFocusPrimaryInput:!1,width:"560"},s.default.createElement("div",{className:m+"-inputs"},s.default.createElement("div",{className:m+"-title"},s.default.createElement("h1",{className:m+"-modal-header"},c._("Send feedback"))),s.default.createElement("div",{className:m+"-container"},s.default.createElement(_.DropdownMenu,{id:"select--category",className:m+"-category-selector",onSelection:i.handleCategoryChange},s.default.createElement(_.DropdownMenuButton,{fullWidth:!0,className:"menu-button"},i.state.category),s.default.createElement(_.Menu,null,i.renderCategoryItems())),s.default.createElement("label",{htmlFor:m+"-subject-input",className:m+"-label"},c._("Subject")),s.default.createElement(l.Input,{id:"subject-input",className:m+"-subject-input",onChange:i.handleSubjectChanged,"aria-label":c._("subject input")}),s.default.createElement("label",{htmlFor:m+"-details-input",className:m+"-label"},c._("Details")),s.default.createElement("textarea",{id:"details-input",className:m+"-details-input",onChange:i.handleDetailsChanged,"aria-label":c._("details input"),rows:4}),s.default.createElement(o.Button,{variant:"secondary",className:m+"-screenshot-button",onClick:i.handleChooseFromDropbox},c._("Add a screenshot")),i.renderSelectedScreenshot())),s.default.createElement("div",{className:m+"-action-bar"},s.default.createElement(o.Button,{variant:"secondary",className:"action-bar-cancel-button",onClick:i.props.onBack},c._("Cancel")),s.default.createElement("div",{className:m+"-action-bar-space"}),s.default.createElement(o.Button,{variant:"primary",className:"action-bar-submit-button",disabled:!i.isAnyFeedbackInput(),onClick:i.submitFeedback},c._("Submit"))))},i.renderThankYouModal=function(){return s.default.createElement(u.Modal,{className:m+"-thank-you-modal",ariaLabel:"Feedback Modal",acceptButtonText:null,style:"clean"},s.default.createElement(r.Image,{className:m+"-thank-you-image",alt:c._("Thank you"),src:d.static_url("/static/images/app_actions/feedback_comments-vfluWMAvS.png"),srcHiRes:d.static_url("/static/images/app_actions/feedback_comments@2x-vflWa-9nT.png")}),s.default.createElement("h1",{className:m+"-thank-you-header"},c._("Thanks for letting us know!")),s.default.createElement("h2",{className:m+"-thank-you-subtext"},c._("Your feedback will help make Dropbox even better.")))},i.state={category:t.bugReport,subjectText:"",detailsText:"",screenshotLinks:[],attachmentNames:[],showThankYouModal:!1},h.Dropbox.init({appKey:E.CHOOSER_APP_KEY}),i}return n.__extends(i,e),i.prototype.getFileExt=function(){var e=this.props.file;return void 0===e?null:f.isSharedFile(e)&&e.filename?p.file_extension(e.filename):f.isBrowseFile(e)&&e.ext?e.ext:""},i.prototype.renderCategoryItems=function(){var e=this;return g.map(function(t){return s.default.createElement(_.MenuItem,{value:t,key:t,selected:e.state.category===t},t)})},i.prototype.renderSelectedScreenshot=function(){return this.state.attachmentNames.map(function(e){return s.default.createElement("p",null,e)})},i.prototype.render=function(){return this.state.showThankYouModal?this.renderThankYouModal():this.renderFeedbackModel()},i})(s.default.Component);t.FeedbackModal=i.requireCssWithComponent(y,["/static/css/app_actions/index-vflqPxuOq.css"])}),define("modules/clean/react/extensions/client",["require","exports","tslib","external/lodash","modules/clean/api_v2/user_client","modules/clean/react/extensions/feature_flags","modules/clean/react/extensions/file"],function(e,t,n,a,s,i,r){"use strict";function o(e){return"app_id"in e}function c(){return l("",[])}function u(e,t){return e.priority&&t.priority?t.priority-e.priority:e.priority?-1:t.priority?1:e.description<t.description?-1:e.description>t.description?1:0}function l(e,t,n,a,s){return void 0===n&&(n=p.DISABLED),void 0===a&&(a={}),void 0===s&&(s={}),{fileId:e,actionCategories:t,displayState:n,bylines:a,featureFlags:s}}function d(){return _||(_=new f(new s.UserApiV2Client)),_}Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importStar(a),t.isAppId=o;var p;(function(e){e[e.LOADING=0]="LOADING",e[e.DISABLED=1]="DISABLED",e[e.ENABLED=2]="ENABLED"})(p=t.DisplayState||(t.DisplayState={})),t.emptyExtensionsConfig=c,t.newExtensionsConfig=l;var f=(function(){function e(e){this.trackedFiles=new Map,this.loaded=!1,this.state={actionIdToAppAction:{},appActionAppIcons:{},appActionsEnabled:!1,bylines:{},categoryMapsByExt:{},featureFlags:{}},this.parseCategoryActionGroupsFromState=a.memoize(function(e){var t={},n=function(n){if(e.categoryMapsByExt.hasOwnProperty(n)){var a=new Array;e.categoryMapsByExt[n].forEach(function(t,n){var s=t.map(function(t){return e.actionIdToAppAction[t]}).sort(u);a.push({categoryId:n,actions:s})}),t[n]=a}};for(var a in e.categoryMapsByExt)n(a);return t}),this.client=e}return e.prototype.getActionsForFile=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var a;return n.__generator(this,function(n){switch(n.label){case 0:return[4,this.getActionsForFileBatch([e],t)];case 1:return a=n.sent(),[2,a[e.file_id]||c()]}})})},e.prototype.getActionsForFileBatch=function(e,t){return n.__awaiter(this,void 0,void 0,function(){var a;return n.__generator(this,function(n){switch(n.label){case 0:return[4,this.loadState(t)];case 1:return a=n.sent(),[2,this.getExtensionsConfigsForFiles(a,e)]}})})},e.prototype.getAppIcons=function(){return n.__assign({},this.state.appActionAppIcons)},e.prototype.refreshAppIcons=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,s,i,r;return n.__generator(this,function(o){switch(o.label){case 0:t=void 0,a=this.iconRequest,o.label=1;case 1:return o.trys.push([1,6,,7]),a?[4,a]:[3,3];case 2:return t=o.sent(),[3,5];case 3:return s=Object.keys(this.state.appActionAppIcons),a=this.client.ns("app_actions").rpc("get_app_icons",{app_ids:s},{subjectUserId:e}),this.iconRequest=a,[4,a];case 4:t=o.sent(),o.label=5;case 5:return[3,7];case 6:return i=o.sent(),[3,7];case 7:return this.iconRequest=void 0,t&&(r=n.__assign({},this.state.appActionAppIcons),t.icons.forEach(function(e){r[e.app_id]=e.icon}),this.state=n.__assign({},this.state,{appActionAppIcons:r})),[2]}})})},e.prototype.getFeatureFlags=function(){return this.state.featureFlags},e.prototype.getLoadedState=function(){return this.loaded},e.prototype.updateLinkStateForAction=function(e,t){var a=this.state.actionIdToAppAction[e];if(a){var s=n.__assign({},this.state.actionIdToAppAction);s[e]=n.__assign({},a,{link_state:t}),this.state=n.__assign({},this.state,{actionIdToAppAction:s})}},e.prototype.extensionsConfigsForTrackedFiles=function(){var e=[];return this.trackedFiles.forEach(function(t){return e.push(t)}),this.getExtensionsConfigsForFiles(this.state,e)},e.prototype.loadState=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,s;return n.__generator(this,function(n){switch(n.label){case 0:if(this.loaded)return[3,4];this.stateRequest||(this.stateRequest=this.fetchActions(e)),t=this.stateRequest,n.label=1;case 1:return n.trys.push([1,3,,4]),a=this,[4,this.stateRequest];case 2:return a.state=n.sent(),[3,4];case 3:return s=n.sent(),this.stateRequest===t&&(this.stateRequest=void 0),[3,4];case 4:return[2,this.state]}})})},e.prototype.getExtensionsConfigsForFiles=function(e,t){var n=this,a={},s=this.parseCategoryActionGroupsFromState(e);return t.forEach(function(t){var i=r.getFileExt(t),o=void 0;i&&(o=s[i]),a[t.file_id]=l(t.file_id,o||[],e.appActionsEnabled&&!t.is_dir?p.ENABLED:p.DISABLED,e.bylines,e.featureFlags),n.trackedFiles.set(t.file_id,t)}),a},e.prototype.fetchActions=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,s,i,r,c,u,l,d;return n.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=this.client.ns("app_actions").rpc("get_actions_for_user",{},{subjectUserId:e}),[4,Promise.all([t,this.fetchFeatureFlags(e)])];case 1:return a=n.sent(),s=a[0],i=a[1],r={},c={},s.actions.forEach(function(e){r[e.id]||(r[e.id]=e,c[e.app_id]=e.icon)}),u={},s.action_mapping.forEach(function(e){var t=e.matcher;if("extension"===t[".tag"]){var n=t.extension,a=new Map;e.action_ids.forEach(function(e){var t=r[e],n=a.get(t.category);n?n.push(t.id):(n=[t.id],a.set(t.category,n))}),u[n]=a}}),l={},s.bylines.forEach(function(e){var t=e.extension_id[".tag"];o(e.extension_id)&&(t=e.extension_id.app_id),l[t]=e.byline}),this.loaded=!0,[2,{appActionsEnabled:!0,actionIdToAppAction:r,appActionAppIcons:c,bylines:l,categoryMapsByExt:u,featureFlags:i}];case 2:if(d=n.sent(),d.error&&"feature_gated"===d.error[".tag"])return this.loaded=!0,[2,this.state];throw d;case 3:return[2]}})})},e.prototype.fetchFeatureFlags=function(e){var t=this;if(void 0!==this.featureFlagsReq)return this.featureFlagsReq;var n=i.fetchFeatureFlags(this.client,e).then(function(e){return e}).catch(function(e){throw t.featureFlagsReq=void 0,e});return this.featureFlagsReq=n,n},e})();t.Client=f;var _;t.getExtensionsClient=d}),define("modules/clean/react/extensions/feature_flags",["require","exports","tslib"],function(e,t,n){"use strict";function a(){var e=[];for(var t in i)if(i.hasOwnProperty(t)){var n=t;e.push([n,i[n]])}return e}function s(e,t){return n.__awaiter(this,void 0,void 0,function(){var s,i,r,o,c,u;return n.__generator(this,function(n){switch(n.label){case 0:s=a().map(function(e){e[0];return e[1]}),i={features:s,log_exposure:!0},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,e.ns("stormcrow").rpc("get_variant_batch",i,{subjectUserId:t})];case 2:return r=n.sent(),o=r.variants,c={},a().forEach(function(e){var t=e[0],n=e[1],a=o[n];void 0!==a&&(c[t]=a)}),[2,c];case 3:return u=n.sent(),[2,{}];case 4:return[2]}})})}Object.defineProperty(t,"__esModule",{value:!0});var i={testFlag:"test_gated_feature",expAuthInModal:"extensions_auth_in_modal",expOpenWithButtonText:"extensions_open_with_button_text",expSmallTooltip:"extensions_exp_title_bubble"};t.fetchFeatureFlags=s}),define("modules/clean/react/extensions/file",["require","exports","modules/clean/filepath"],function(e,t,n){"use strict";function a(e){return void 0!==e.ext}function s(e){return void 0!==e.fq_path}function i(e){return void 0!==e.filename}function r(e){return a(e)?e.ext:s(e)?"."+n.file_extension(n.filename(e.fq_path)):i(e)?"."+n.file_extension(e.filename):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.hasExt=a,t.hasFqPath=s,t.hasFilename=i,t.getFileExt=r});
//# sourceMappingURL=pkg-extensions.min.js-vfls8w9AV.map