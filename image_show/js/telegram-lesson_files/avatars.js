define(["require","exports","tslib","react","external/prop-types","modules/clean/avatar/avatar_with_default","modules/clean/avatar/initials_avatar","modules/clean/avatar/style","modules/clean/avatar/viewer_avatar","modules/clean/datetime","modules/clean/em_string","modules/clean/previews/util","modules/clean/react/pass/constants","modules/clean/react/pass/utils","modules/clean/react/title_bubble","modules/clean/react_format","modules/core/browser_detection","modules/core/user_i18n","modules/core/i18n","modules/clean/react/pass/upsell/tooltip/pass_upsell_tooltip","modules/clean/react/pass/upsell/simple_upsell","modules/clean/react/pass/integration/integration_tooltip","modules/clean/integrations/data/store","modules/clean/react/pass/integration/profile_card_popover","external/react-redux"],function(e,t,o,n,r,a,i,l,s,u,p,c,m,d,f,h,_,g,b,w,v,I,T,C,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importStar(r),a=o.__importDefault(a),s=o.__importDefault(s),_=o.__importStar(_),g=o.__importStar(g);var y=function(){},A=(function(e){function t(t){var o=e.call(this,t)||this;return o.allowInteractingWithTooltip=function(){return!1},o.renderAvatarButton=function(){return n.default.createElement("button",{className:"pass-facepile-avatar"},o.getAvatar())},o.state={loadResult:"loaded"},o}return o.__extends(t,e),t.prototype.getBubbleBackgroundColor=function(){},t.prototype.render=function(){var e=this.wrapAvatarWithTooltip(),t="pending"===this.state.loadResult?"react-pass__face-no-display":"react-pass__face-container";return n.default.createElement("div",{className:t},e)},t.prototype.wrapAvatarWithTooltip=function(){return n.default.createElement(f.TitleBubble,{content:this.getTooltipElement(),position:f.TitleBubble.POSITIONS.BOTTOM,distanceFromTarget:9,isTargetPositionFixed:!0,onMouseEnter:this.props.onMouseEnter,className:this.getTooltipClass(),backgroundColor:this.getBubbleBackgroundColor(),allowInteractTooltip:this.allowInteractingWithTooltip()},this.renderAvatarButton())},t})(n.default.Component),F=(function(e){function t(t){var o=e.call(this,t)||this;return o.allowInteractingWithTooltip=function(){return o.context.isIntegrationTooltipEnabled()||o.showPassUpsell},o.state={loadResult:null==o.props.userInfo.photoUrl?"loaded":"pending"},o.boundOnLoad=o.onFinalize.bind(o,!0),o.boundOnError=o.onFinalize.bind(o,!1),o}return o.__extends(t,e),Object.defineProperty(t.prototype,"showPassUpsell",{get:function(){return this.context.isInSimpleUpsellExperiment()&&v.shouldShowSimpleUpsellForAvatar(this.props.userInfo)&&!!this.props.upsellInfo&&this.props.upsellInfo.isViewerEligibleForUpsell},enumerable:!0,configurable:!0}),t.prototype.offlineTooltipTemplate=function(){var e=b._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s",{comment:'Format like "userName <newline> Viewed 5 days ago'});if(c.shouldShowPlatformInfo()){var t=this.props.userInfo.platformType;t===m.PASS_PLATFORM.DESKTOP?e=b._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on desktop",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on desktop'}):t===m.PASS_PLATFORM.WEB?e=b._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on web",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on web'}):t===m.PASS_PLATFORM.MOBILE&&(e=b._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on mobile",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on mobile'}))}return e.replace("%(ago)s",u.ago(1e3*this.props.userInfo.whenLastSeen,!1,!0,!0))},t.prototype.onlineTooltipTemplate=function(){return b._("<b>%(user_name)s</b> <newline/> Viewing now",{comment:'Format like "user_name <newline> Viewing now"'})},t.prototype.accessNameTooltipTemplate=function(e){switch(e){case"owner":return b._("<b>%(user_name)s</b> <newline/> Owner",{comment:'Format like "user_name <newline> Owner"'});case"writer":return b._("<b>%(user_name)s</b> <newline/> Can edit",{comment:'Format like "user_name <newline> Can edit"'});case"reader":return b._("<b>%(user_name)s</b> <newline/> Can comment",{comment:'Format like "user_name <newline> Can comment"'});case"reader_no_comment":case void 0:return b._("<b>%(user_name)s</b> <newline/> Can view",{comment:'Format like "user_name <newline> Can view"'})}},t.prototype.isGuestAvatar=function(){return this.props.userInfo.userId&&d.AnonymousViewerUtils.isAnonymousUserId(this.props.userInfo.userId)},t.prototype.getUserAvatarProps=function(){var e=this.props.userInfo,t=e.displayName,r=e.isActive,a=this.isGuestAvatar()?d.AnonymousViewerUtils.getAnonymousViewerInitials(t):g.getInitials(t),l={dimension:32,initials:a,color:this.getInitialsColor(),shape:"CIRCLE"};r||(l.optionalClass="c-avatar--inactive",_.msie&&(l.color="#7B8994"));var s=n.default.createElement(i.InitialsAvatar,o.__assign({},l));return r||(s=n.default.createElement("span",{className:"c-avatar-initials-wrapper"},s)),{alt:t,dimension:32,photoUrl:this.getEffectivePhotoUrl(),defaultAvatar:s,optionalClass:l.optionalClass,shape:"CIRCLE",onLoad:this.boundOnLoad,onError:this.boundOnError}},t.prototype.getEffectivePhotoUrl=function(){return"error"===this.state.loadResult?void 0:this.props.userInfo.photoUrl},t.prototype.getAvatar=function(){var e=this.getUserAvatarProps();return this.props.userInfo.isViewer&&"error"!==this.state.loadResult?n.default.createElement(s.default,o.__assign({},e)):n.default.createElement(a.default,o.__assign({},e))},t.prototype.onFinalize=function(e){if(null!=this.getEffectivePhotoUrl()){this.setState({loadResult:e?"loaded":"error"});var t=this.props,o=t.userInfo.photoUrl,n=t.onLoad;n&&o&&n(o)}},t.prototype.getTooltipClass=function(){return this.context.isIntegrationTooltipEnabled()?"integration-tooltip-bubble":this.showPassUpsell?"seen-state-title-bubble-with-upsell":"seen-state-title-bubble"},t.prototype.getInitialsColor=function(){return this.isGuestAvatar()?l.colorValueForAvatarName(this.props.userInfo.userId):l.colorValueForAvatarName(this.props.userInfo.displayName)},t.prototype.getBubbleBackgroundColor=function(){return this.context.isIntegrationTooltipEnabled()?"transparent":this.getInitialsColor()},t.prototype.getTooltipElement=function(){var e=this.props,t=e.userInfo,o=e.integrationInfo,r=p.Emstring.em_snippet(t.displayName,10);if(this.context.profileCardV2Enabled()){var a=T.getStoreForIntegration();return n.default.createElement(E.Provider,{store:a},n.default.createElement(C.ProfileCardPopover,{userInfo:t,fileInfo:{file_id:o.fileId},avatarColor:this.getInitialsColor(),onConnectService:y,onConnectServices:y}))}if(this.context.profileCardV1Enabled())return n.default.createElement(I.IntegrationTooltip,{userInfo:t,fileInfo:{file_id:o.fileId},avatarColor:this.getInitialsColor()});if(this.showPassUpsell&&this.context.getTracker()&&this.context.getUpsellUrl()&&this.context.getVariant()&&this.props.upsellInfo)return n.default.createElement(w.PassUpsellTooltip,{displayName:r,baseColor:this.getInitialsColor(),tracker:this.context.getTracker(),info:this.props.upsellInfo,upsellUrl:this.context.getUpsellUrl(),variant:this.context.getVariant()});var i=void 0;i=t.isActive?this.onlineTooltipTemplate():null!=t.whenLastSeen?this.offlineTooltipTemplate():this.accessNameTooltipTemplate(t.accessLevel);var l=h.reactFormat(i,{user_name:r,b:n.default.createElement("b",{key:"thebold"}),newline:n.default.createElement("br",null)});return n.default.createElement("span",null,l)},t.contextTypes={getTracker:r.func,getUpsellUrl:r.func,getVariant:r.func,isInSimpleUpsellExperiment:r.func,getApiV2Client:r.func,getDataStore:r.func,isIntegrationTooltipEnabled:r.func,profileCardV1Enabled:r.func,profileCardV2Enabled:r.func},t})(A);t.UserAvatar=F;var O=(function(e){function t(t){return e.call(this,t)||this}return o.__extends(t,e),t.prototype.getDisplayNum=function(){return this.props.moreFacepileCount>=m.MAX_OVERFLOW_BUTTON_INDICATOR?m.MAX_OVERFLOW_BUTTON_INDICATOR:this.props.moreFacepileCount},t.prototype.getMoreFacepileCountText=function(){return this.props.moreFacepileCount>=m.MAX_OVERFLOW_BUTTON_INDICATOR?m.MAX_OVERFLOW_BUTTON_INDICATOR+"+":""+this.props.moreFacepileCount},t.prototype.getAvatar=function(){return n.default.createElement(i.InitialsAvatar,{alt:this.getMoreFacepileCountText(),dimension:32,initials:this.getMoreFacepileCountText(),color:"#7B8994",shape:"CIRCLE",optionalClass:"c-avatar--overflow"})},t.prototype.getTooltipClass=function(){return"seen-state-title-bubble facepile-overflow"},t.prototype.getTooltipElement=function(){return b.ungettext("%(display_num)s other","%(display_num)s others",this.getDisplayNum()).format({display_num:this.getMoreFacepileCountText()})},t})(A);t.OverflowAvatar=O});
//# sourceMappingURL=avatars.min.js-vfldunMFG.map