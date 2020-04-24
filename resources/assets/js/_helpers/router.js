import Vue from 'vue';
import Router from 'vue-router';

import Index from '../components/Index.vue';
import Login from '../components/authentication/Login.vue';
import Register from '../components/authentication/Register.vue';

import Buefy from 'buefy';

Vue.use(Router);
Vue.use(Buefy);

export const router = new Router({
    mode: 'history',
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
        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/', '/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('owo-token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
