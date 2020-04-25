import { userService } from "../_services";
import { router } from "../_helpers";

const user = JSON.parse(localStorage.getItem('owo-token'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { email, password, error }) {
            commit('loginRequest', { email });

            userService.login(email, password)
                .then((response) => {
                    if (response.status == 422) {
                        commit('loginFailure');
                        error(response.data.m);
                    } else {
                        commit('loginSuccess', { user: response.data });
                        router.push('/');
                    }
                });

        },
        logout({ commit }) {
            commit('logout');
            userService.logout();
        },
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}
