import { createStore } from 'vuex'
import journalsModule from "./modules/journals";

export default createStore({
    state: {
        isLoggedIn: false,
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        },
    },
    modules: {
        journal: journalsModule,
    }
})
