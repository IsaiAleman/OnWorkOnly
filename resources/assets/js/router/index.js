import Vue from 'vue';
import axios from 'axios';
import Buefy from 'buefy';
import 'buefy/dist/buefy.min.css';
import Router from 'vue-router';
import Index from '../components/Index.vue';
import Login from '../components/authentication/Login.vue';
import Register from '../components/authentication/Register.vue';

Vue.use(Router);
Vue.use(axios);
Vue.use(Buefy);

export default new Router({
  mode: 'history', // use HTML5 history instead of hashes
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
