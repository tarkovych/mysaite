define(["require","exports","tslib","modules/clean/redux/store","external/lodash","deep-integrations/data/reducer","modules/clean/api_v2/default_user_client","modules/clean/redux/types","modules/clean/integrations/data/reducers","modules/clean/integrations/data/actions","modules/clean/viewer"],function(e,t,r,n,i,s,a,d,o,u,c){"use strict";function l(){return c.Viewer.get_viewer().get_user_by_id(window.ensemble.viewer.getActiveUser().userId)}Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importStar(i),t.getStoreForIntegration=i.once(function(){var e=n.getStoreAndRegisterReducers((t={},t[d.DEEP_INTEGRATIONS_NAMESPACE_KEY]=s.DeepIntegrationsReducer,t[d.INTEGRATIONS_NAMESPACE_KEY]=o.IntegrationsReducer,t),{deepIntegrationsHandler:new a.DefaultUserApiV2Client(l())});return e.dispatch(u.fetchListServices()),e;var t})});
//# sourceMappingURL=store.min.js-vflW1-hKe.map