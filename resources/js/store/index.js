import { createStore } from "vuex";
import axios from "axios";
import Action from "./actions";
import Mutations from "./mutations";
import Getters from "./getters";
import user from "./modules/user.js";
import user2 from "./modules/user2.js";

export default createStore({
    namespaced: true,
    state: {
        counter: 0,
        vueData: "Default Data",
        arrayData: [0, 1],
    },
    modules: {
        a: user,
        b: user2,
    },
    mutations: Mutations,
    actions: Action,
    getters: Getters,
});
