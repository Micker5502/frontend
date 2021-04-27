import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import service from "./utils/https"
import urls from "./utils/urls"
import DefaultLayout from './layout/default.vue'
import DefaultRedirect from './layout/redirect.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import light from './themes/light'
import { OpenIdConnectService } from './services/auth/openIdConnectService'
import {Cropper} from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import signal from './utils/signalr';
import VueVirtualScroller from 'vue-virtual-scroller'

Vue.component('default-layout',DefaultLayout)
Vue.component('redirect-layout',DefaultRedirect)
Vue.use(Vuetify);
Vue.use(VueVirtualScroller);
Vue.use(Cropper);
Vue.config.productionTip = false;

Vue.prototype.$https = service;
Vue.prototype.$urls  = urls;
Vue.prototype.$oidc  = OpenIdConnectService.getInstance();
//Vue.prototype.$signal = signal;

new Vue({
  vuetify : new Vuetify({
    theme:{
      themes:{
        light
      }
    }
  }),
  router,
  store,
  render: h => h(App)
}).$mount("#app");
