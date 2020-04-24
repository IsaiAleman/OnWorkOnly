import Vue from 'vue';
import Vuex from 'vuex';

import { authentication } from './authentication.module';
import { user } from './user.module';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        authentication,
        user,
    }
});
