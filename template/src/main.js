import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'es6-promise/auto';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
