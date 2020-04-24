import Vue from 'vue';

import { store } from './_store';
import { router } from "./_helpers";

import App from '@/components/layout/App';

import axios from 'axios';
window.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3333';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
});
