define("modules/clean/browse/browse_drag_utils",["require","exports"],function(t,e){"use strict";function o(t){if(!t||!t.types)return null;if((function(t,e){for(var o=0,i=t;o<i.length;o++){if(e===i[o])return!0}return!1})(t.types,"Files"))return null;var e,o=null;try{e=t.getData("text/x-moz-url")}catch(t){}if(null!=e){var i=e.split("\n");i.length>=1&&(o=i[0])}if(!o)try{o=t.getData("text/uri-list")}catch(t){}if(!o)try{o=t.getData("Url")}catch(t){}return o||(o=null),o}function i(t){return"[InternetShortcut]\r\nURL="+t+"\r\n"}Object.defineProperty(e,"__esModule",{value:!0}),e.getDraggedLink=o,e.buildUrlLinkfileContents=i}),define("modules/clean/comments/utils",["require","exports","tslib","modules/clean/activity/activity_user","modules/clean/comments/revisions","modules/clean/comments/store","modules/clean/viewer"],function(t,e,o,i,n,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r=o.__importDefault(r);var a=function(t){if(t===-1)return new i.ActivityUser({id:-1,fname:"Demo",lname:"User",display_name:"Demo User",email:"demo_user@example.com",initials:"DU",is_email_verified:!0,is_signed_in:!0});var e=s.Viewer.get_viewer();return null!=t?i.ActivityUser.fromUser(e.get_user_by_id(t)):e.work_user||e.personal_user?i.ActivityUser.fromUser(e.work_user||e.personal_user):e.is_signed_in?void 0:new i.ActivityUser};e.getActivityUser=a;var u=function(t){return a(t.actorId).is_signed_in},d=function(){return!!r.default.isFileActivityReady()&&r.default.isCommentingEnabled()},l=function(t){return void 0===t&&(t=!1),!(t||!r.default.isFileActivityReady())&&(u(r.default.state)&&d()&&r.default.state.viewing.revision&&n.isRevisionEqual(r.default.state.viewing.revision,r.default.state.activity.latest_revision))};e.canAnnotate=l;var h=function(){return!!l()&&r.default.state.regionCreationEnabled};e.isRegionCreationEnabled=h;var _=function(){return!r.default.areCommentsHidden()&&d()};e.shouldShowExistingAnnotations=_;var c=function(){return this.keyCode||this.which||this.charCode};e.normalizedKeyCode=c}),define("modules/clean/legacy_pyxl_controllers/bubble_dropdown",["require","exports","tslib","external/lodash","jquery","modules/clean/keycode","modules/core/dom"],function(t,e,o,i,n,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=o.__importStar(i),n=o.__importDefault(n),s=o.__importStar(s);var a=(function(){function t(e,o,r,s,a,u,d){var l=this;null==u&&(u=0),this.closeDropdown=this.closeDropdown.bind(this),this.openDropdown=this.openDropdown.bind(this),this.repositionDropdown=this.repositionDropdown.bind(this),this._activateNonButton=this._activateNonButton.bind(this),this._onTargetKeydown=this._onTargetKeydown.bind(this),this._onDropdownKeydown=this._onDropdownKeydown.bind(this),this._on_mouseover=this._on_mouseover.bind(this),this._on_mouseout=this._on_mouseout.bind(this),this._on_global_hover=this._on_global_hover.bind(this),this._toggle_bubble=this._toggle_bubble.bind(this),this._show_bubble=this._show_bubble.bind(this),this._hide_bubble=this._hide_bubble.bind(this),this.$root=e,this.arrow_direction=o,this.show_on_hover=r,this.show_close_button=s,this.shown_by_default=a,this.top_adjustment=u,this.tabindex=d,this.$target=this.$root.find(".bubble-dropdown-target"),this.$dropdown=this.$root.find(".bubble-dropdown"),this.$arrow_anchor=this.$root.find(".bubble-dropdown-arrow-anchor"),this.$arrow=this.$dropdown.find(".bubble-arrow");var h={top:"bottom",left:"right",bottom:"top",right:"left"};if(this.target_position=h[this.arrow_direction],this.$target.on("keydown",this._onTargetKeydown),this.$dropdown.on("keydown",this._onDropdownKeydown),this.$target.attr("aria-expanded",!1),this.show_close_button)this.$root.find(".bubble-dropdown-x").on("click",this.closeDropdown);else if(this.show_on_hover){if(this.$target.on("mouseover",this._on_mouseover),this.$dropdown.on("mouseover",this._on_mouseover),this.$target.on("mouseout",this._on_mouseout),this.$dropdown.on("mouseout",this._on_mouseout),this.$target.attr("tabindex",0).on("focus",this._show_bubble),0===this.$dropdown.find(this._focus_selectors).length){var _=i.uniqueId("bubble-dropdown-tooltip-");this.$dropdown.attr({id:_,role:"tooltip"}),this.$target.attr("aria-describedby",_)}n.default(document).on(t.HOVER_SHOWN,this._on_global_hover)}else{this.$target.click(this._toggle_bubble);var c=0;this.tabindex&&(c=this.tabindex),"BUTTON"!==this.$target.get(0).tagName&&this.$target.attr({role:"button",tabindex:c}).on("keyup",this._activateNonButton),n.default("body").on("click",function(t){return!!n.default(t.target).is("select")||(n.default(t.target).closest(l.$target).length||n.default(t.target).closest(l.$dropdown).length||l._hide_bubble(),!0)})}this.shown_by_default&&this.openDropdown()}return t.initClass=function(){this.HOVER_SHOWN="bubble:hover:shown",this.prototype._dropdown_shown=!1,this.prototype._focus_selectors="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"},t.prototype.closeDropdown=function(){if(this._dropdown_shown)return this._hide_bubble()},t.prototype.openDropdown=function(){if(!this._dropdown_shown)return this._show_bubble()},t.prototype.repositionDropdown=function(){if(this._dropdown_shown)return this._show_bubble()},t.prototype._activateNonButton=function(t){if([r.KeyCode.ENTER,r.KeyCode.SPACE].includes(t.keyCode))return this._toggle_bubble(),!1},t.prototype._onTargetKeydown=function(t){return(t.keyCode===r.KeyCode.ESC&&!this.show_on_hover||t.keyCode===r.KeyCode.TAB&&t.shiftKey||t.keyCode===r.KeyCode.TAB&&1===this.$root.find(this._focus_selectors).length)&&this._hide_bubble(),!0},t.prototype._onDropdownKeydown=function(t){if(this.show_on_hover||t.keyCode!==r.KeyCode.ESC){if(t.keyCode===r.KeyCode.TAB&&!t.shiftKey){var e=this.$root.find(this._focus_selectors);t.target===e[e.length-1]&&this._hide_bubble(!this.show_on_hover)}}else this._hide_bubble(!0);return!0},t.prototype._on_mouseover=function(){return n.default(document).trigger(t.HOVER_SHOWN,this.$target),this._show_bubble(),clearTimeout(this.$dropdown.data("timeout_id"))},t.prototype._on_mouseout=function(){var t=setTimeout(this._hide_bubble,200);return this.$dropdown.data("timeout_id",t)},t.prototype._on_global_hover=function(t,e){if(this._dropdown_shown&&e!==this.$target)return this._hide_bubble(),clearTimeout(this.$dropdown.data("timeout_id"))},t.prototype._toggle_bubble=function(){return this._dropdown_shown?this._hide_bubble():this._show_bubble(),!0},t.prototype._show_bubble=function(){var t,e;if(!this.$target.hasClass("disabled")){this.$dropdown.show();var o=this.$arrow_anchor.length?this.$arrow_anchor:this.$target,i=this.$arrow.position().top,n=this.$arrow.position().left;switch(this.arrow_direction){case"left":t=o.outerWidth()+this.$arrow.outerWidth(),e=o.outerHeight()/2-i;break;case"right":t=-1*(this.$dropdown.outerWidth()+this.$arrow.outerWidth()),e=o.outerHeight()/2-i;break;case"top":t=o.outerWidth()/2-n,e=o.outerHeight()+this.$arrow.outerHeight()-this.top_adjustment;break;case"bottom":t=o.outerWidth()/2-n,e=-1*(this.$dropdown.outerHeight()+this.$arrow.outerHeight()+this.top_adjustment)}return s.clone_position(this.$dropdown,o,{setHeight:!1,setWidth:!1,offsetLeft:t,offsetTop:e}),this._dropdown_shown=!0,this.$target.addClass("bubble-dropdown-target--active").attr("aria-expanded",!0)}},t.prototype._hide_bubble=function(t){if(this.$dropdown.hide(),this._dropdown_shown=!1,this.$target.removeClass("bubble-dropdown-target--active").attr("aria-expanded",!1),t)return this.$target.focus()},t})();a.initClass(),e.default=a}),define("modules/clean/legacy_pyxl_controllers/input",["require","exports","tslib","jquery","modules/clean/accessibility/tabbable","modules/clean/web_timing_logger","modules/core/exception","modules/core/i18n"],function(t,e,o,i,n,r,s,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=o.__importDefault(i),n=o.__importDefault(n),r=o.__importStar(r);var u=function(t){var e=i.default.data(t,"input-element");return s.assert(e.length,"TextInput element has no related input element please ensure it was setup correctly"),e};i.default.valHooks.textinput={get:function(t){return u(t).val()},set:function(t,e){return u(t).val(e).trigger("input")}};var d=(function(t){function e(e,o){void 0===o&&(o=!0);var n=t.call(this)||this;return n._on_change=n._on_change.bind(n),n.$text_input=e,n.persistent_label=n.$text_input.is(".label-above"),n.$input=n.$text_input.find(".text-input-input"),n.$text_input.data("input-element",n.$input),n.$label=n.$text_input.find("label"),n.$text_input.find(".error-message").length&&n.$input.addClass("input-error"),n.$text_input.each(function(t,e){return e.type="textinput"}),n.$text_input.focus(function(){return setTimeout(function(){return n.$input.focus()},0)}),i.default(function(){if("BODY"===(null!=document.activeElement?document.activeElement.tagName:void 0))return i.default(".autofocus:visible").first().focus()}),n._listen(),o&&n._on_change(),n}return o.__extends(e,t),e.prototype._listen=function(){var t=this;return this.$input.on("keydown keyup paste input blur",function(){return t._on_change()}),this.$input.on("blur",function(e){return t.$text_input.trigger(e)}),this.$input.on("focus",function(){return t.$input.removeClass("input-error")})},e.prototype._on_change=function(){this.persistent_label||this.$label.toggle(!this.$input.val());var t=this.$text_input.find(".error-message");t.length&&window.setTimeout(function(){return t[0].remove()},3e3)},e})(n.default);e.TextInput=d;var l=(function(t){function e(e,o){void 0===o&&(o=!0);var i=t.call(this,e,o)||this;return i.$caps=i.$text_input.find(".password-caps-indicator"),i.$caps_lock=!1,i.$text_input.on("keypress",function(t){var e,o=/Mac/.test(navigator.platform),n=null!=t.charCode?t.charCode:t.keyCode,r=String.fromCharCode(n);return r.toLowerCase()===r.toUpperCase()?e=void 0:r===r.toLowerCase()?e=t.shiftKey:r!==r.toUpperCase()||t.shiftKey&&o||(e=!t.shiftKey),null!=e&&(i.$caps_lock=e),i.$caps_lock?i.$caps.addClass("password-caps-indicator-activated"):i.$caps.removeClass("password-caps-indicator-activated")}),i}return o.__extends(e,t),e})(d);e.PasswordInput=l;var h=(function(e){function n(i,n){var s=e.call(this,i,!1)||this;return s._on_change=s._on_change.bind(s),s.$bubble_title=s.$text_input.find(".password-bubble-title"),s.$bubble_desc=s.$text_input.find(".password-bubble-desc"),s.$meter=s.$text_input.find(".password-input-meter"),s.$default_bubble_text=s.$bubble_desc.text(),s.$last_pwd="",s._on_change(),n?r.waitForTTI().then(function(){new Promise(function(e,o){t(["external/zxcvbn"],e,o)}).then(o.__importStar).then(function(t){var e=t.default;s.zxcvbn=e})}):new Promise(function(e,o){t(["external/zxcvbn"],e,o)}).then(o.__importStar).then(function(t){var e=t.default;s.zxcvbn=e}),s}return o.__extends(n,e),n.prototype._on_change=function(){var t,o,i=this.$input.val();if(this.$last_pwd!==i){if(this.$last_pwd=i,"correcthorsebatterystaple"===i||"Tr0ub4dour&3"===i||"Tr0ub4dor&3"===i){var n=void 0;t=0,o=a._("lol",{comment:"'lol'='laugh out loud'"}),this.$bubble_title.text(o),"correcthorsebatterystaple"===i?(n=a._("Whoa there, don't take advice from a webcomic too literally ;)",{comment:"This text is displayed rarely, whenever a user selects a password that is from this comic: http://imgs.xkcd.com/comics/password_strength.png"}),this.$bubble_desc.text(n)):(n=a._("Guess again",{comment:"this text is displayed rarely, whenever a user selects a password that is from this comic: http://imgs.xkcd.com/comics/password_strength.png"}),this.$bubble_desc.text(n))}else{var r=["",a._("Weak"),a._("So-so"),a._("Good"),a._("Great!")];t=this._score(i),o=r[t],this.$bubble_title.text(o),this.$bubble_desc.text(this.$default_bubble_text)}return this.$meter.find(".password-input-dot").removeClass("password-input-dot-selected"),this.$meter.find(".password-input-dot").slice(4-t,4).addClass("password-input-dot-selected"),e.prototype._on_change.call(this)}},n.prototype._get_user_inputs=function(){for(var t=["dropbox"],e=0,o=Array.from(this.$text_input.closest("form").find("input[type=text], input[type=email]"));e<o.length;e++){var n=o[e];t.push(i.default(n).val())}return t},n.prototype._score=function(t){return this.zxcvbn&&t?Math.max(1,this.zxcvbn(t,this._get_user_inputs()).score):0},n})(l);e.PasswordWatchInput=h});
//# sourceMappingURL=pkg-misc.min.js-vflYW3ypV.map