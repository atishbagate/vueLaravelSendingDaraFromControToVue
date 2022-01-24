import { createStore } from "vuex";
// import axios from "axios";
export default createStore({
    state: {
        count: 0,
    },

    mutations: {
        increase() {
            state;
        },
    },
    actions: {
        counts({ commit }) {
            commit("increase");
        },
    },
    getters: {
        count(state) {
            return state.count;
        },
    },
});
