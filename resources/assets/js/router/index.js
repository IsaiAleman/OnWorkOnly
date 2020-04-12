import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index.vue';
import Login from '../components/authentication/Login.vue';
import Register from '../components/authentication/Register.vue';

Vue.use(Router);

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
