// @generated
!function(){var t={};!function(t,e){for(var n in e)t[n]=e[n]}(t,function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=function(t){function e(){return t.call(this,["https://www.dropbox.com","https://www.dropbox.com:443",/^https:\/\/meta-[a-zA-Z0-9\-]+\.dev\.corp\.dropbox\.com(:443)?$/])||this}return r(e,t),e}(i.FrameMessengerClient);e.PreviewFrameMessengerClient=s},function(t,e,n){"use strict";function r(t,e){return e.indexOf(t)>=0}var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._trustedOriginForPosting=null,e._validActions=[],e._parentMessageQueue=[],e._onParentReady=null,e}return i(e,t),e.prototype.configureParentMessaging=function(t,e,n){void 0===n&&(n=null),this._trustedOriginForPosting=null,this._validActions=e,this._trustedMessageHandler=t,this._onParentReady=n},e.prototype.startListening=function(){t.prototype.startListening.call(this),this.requestParentOrigin()},e.prototype.postMessageToParent=function(t,e){void 0===e&&(e={});var n=this.packagePostMessage(t,e);null===this._trustedOriginForPosting?this._parentMessageQueue.push(n):this.getWindow().parent.postMessage(n,this._trustedOriginForPosting)},e.prototype.dispatchMessage=function(t,e){"parent-ready"===e.action&&this.updateParentOrigin(t.origin),r(e.action,this._validActions)&&null!==this._trustedMessageHandler&&this._trustedMessageHandler(e)},e.prototype.resetOriginsForPosting=function(){this._trustedOriginForPosting=null},e.prototype.updateParentOrigin=function(t){var e=this._trustedOriginForPosting;if(!this.isOriginAllowed(t))return!1;if(this._trustedOriginForPosting=t,this._parentMessageQueue.length>0){for(var n=0;n<this._parentMessageQueue.length;n++){var r=this._parentMessageQueue[n],i=JSON.parse(r);this.postMessageToParent(i.action,i.parameters)}this._parentMessageQueue=[]}return null!=this._trustedOriginForPosting&&null==e&&null!==this._onParentReady&&this._onParentReady(),!0},e.prototype.requestParentOrigin=function(){var t=this;this.getWindow().parent.postMessage('{"action": "child-requesting-parent-origin"}',"*");var n=function(){null===t._trustedOriginForPosting&&t.requestParentOrigin()};this.getWindow().setTimeout(n,e._REQUEST_PARENT_ORIGIN_POLL_DELAY)},e._REQUEST_PARENT_ORIGIN_POLL_DELAY=100,e}(s.FrameMessengerBase);e.FrameMessengerClient=o},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=this;this._window=window,this.handleUntrustedMessage=function(t){if(e.isOriginAllowed(t.origin)){var n;try{n=JSON.parse(t.data)}catch(t){return}n.action&&e.dispatchMessage(t,n)}},this.allowedOrigins=t}return t.prototype.getWindow=function(){return this._window},t.prototype.setWindow=function(t){this._window=t},t.prototype.startListening=function(){this.getWindow().addEventListener("message",this.handleUntrustedMessage)},t.prototype.stopListening=function(){this.getWindow().removeEventListener("message",this.handleUntrustedMessage)},t.prototype.regexIn=function(t,e){if(e.indexOf(t)>-1)return!0;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i instanceof RegExp&&t.match(i))return!0}return!1},t.stripStandardPort=function(t){return"http://"===t.substr(0,7)?t.replace(/:80/,""):"https://"===t.substr(0,8)?t.replace(/:443$/,""):t},t.prototype.isOriginAllowed=function(e){return this.regexIn(t.stripStandardPort(e),this.allowedOrigins)},t.prototype.packagePostMessage=function(t,e){var n={action:t,parameters:e};return JSON.stringify(n)},t}();e.FrameMessengerBase=n}])),window.FrameMessenger=t.PreviewFrameMessengerClient}();