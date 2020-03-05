import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import About from '@/components/About';
import Login from '@/components/authentication/Login';
import Register from '@/components/authentication/Register';

Vue.use(Router);

export default new Router({
  mode: 'history', // use HTML5 history instead of hashes
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
});