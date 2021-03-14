import { WebStorageStateStore } from 'oidc-client';

export const identityServerBase = 'https://localhost:5001';

export const apiBase = 'https://localhost:5002';

export const vueBase = 'http://localhost:8080';

// 参考文档 https://github.com/IdentityModel/oidc-client-js/wiki
export const openIdConnectSettings = {
    authority: identityServerBase,
    client_id: "Template",
    client_secret: "testing",
    redirect_uri: vueBase+"/Account/CallBack",
    silent_redirect_uri: vueBase+"/Account/SilentRenew",
    response_type: "id_token token",
    scope: "openid profile test offline_access",
    post_logout_redirect_uri: vueBase,
    automaticSilentRenew: true,
    userStore: new WebStorageStateStore({ store: window.localStorage }),//cookies
};