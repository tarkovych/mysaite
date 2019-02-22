define(["require","exports","tslib","modules/clean/react/modal","spectrum/modal","react","react-modal","modules/clean/react/css","modules/clean/react/snackbar","spectrum/snackbar","modules/core/browser","deep-integrations/share_form_body","deep-integrations/platform/server/localization"],function(e,t,a,o,n,r,l,i,s,c,u,d,m){"use strict";function f(e,t,a){void 0===a&&(a={}),_||(_=!0,l.default.setAppElement(document.body));var i=r.default.createElement(k,{localization:m.localization,onModalDismiss:function(e){o.Modal.close(),e&&a.onAbort&&a.onAbort(),!e&&a.onComplete&&a.onComplete()},apiClient:e,showNotice:p,openExternalUrl:b,openDropboxUrl:v,fileId:t,targetUser:a.targetUser});o.Modal.showInstance(r.default.createElement(n.Modal,{open:!0,ariaLabel:"",overlayClassName:"file-viewer-modal-overlay"},i))}function p(e){var t=e.actions.map(function(e){return r.default.createElement(c.SnackbarAction,{key:e.text,onClick:function(){return e.onClick(function(){return s.Snackbar.close()})}},e.text)}),a=r.default.createElement(s.Snackbar,{title:e.title,variant:e.variant,timeoutDelayMs:e.timeout,externalProgress:e.progress},t);return s.Snackbar.show(a),{dismiss:s.Snackbar.close}}function b(e){return new Promise(function(t,a){if(!/^https:\/\/[^\.]+\.slack\.com\/archives\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(e))return void a(new Error("Invalid deep link url!"));u.unsafe_open_tab(e),t()})}function v(e){return new Promise(function(t){u.open_tab(e),t()})}Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),l=a.__importDefault(l);var k=i.requireCssWithComponent(d.DeepIntegrationsStatefulShareBody,["/static/js/deep-integrations/index.web-vfl12I0GS.css"]),_=!1;t.showShareToSlackModal=f});
//# sourceMappingURL=slack_modal.min.js-vfl_1N1vt.map