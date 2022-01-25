import { createStore } from "vuex";
import axios from "axios";
import Action from "./actions";
import Mutations from "./mutations";
import Getters from "./getters";
// import * as user from "./modules/user.js";
export default createStore({
    state: {
        counter: 0,
        vueData: "Default Data",
        arrayData: [0, 1],
    },
    mutations: Mutations,
    actions: Action,
    Getters,
});
