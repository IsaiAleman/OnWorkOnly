import Vue from 'vue';
import router from './router';
import App from '@/components/layout/App';
import axios from 'axios';

window.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3333';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
});
