import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state: {
        counter: 0,
        vueData: "Default Data",
        arrayData: [0, 1],
    },

    mutations: {
        increaseCounter(state, randomNumber) {
            // state.counter++
            console.log(`random increase number: `, randomNumber);
            state.counter += randomNumber;
        },
        decreaseCounter(state, randomNumber) {
            // state.counter--
            console.log("random decrease is number: ", randomNumber);
            state.counter -= randomNumber;
        },
        countUpdateMutation(state, sendData) {
            console.log("the data send in props is: ", sendData);
            state.vueData = this.state.vueData += sendData;
        },
        sendArrayMutation(state, array) {
            console.log("this is the Array inside the mutations: ", array);
            state.arrayData = array;
        },
    },
    actions: {
        decreaseCounter({ commit }) {
            console.log("decreaseCounter (action)");
            axios(
                "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
            ).then((res) => {
                // console.log(res)
                commit("decreaseCounter", res.data);
            });
        },
        increaseCounter({ commit }) {
            console.log("decreaseCounter (action)");
            axios(
                "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
            ).then((res) => {
                // console.log(res)
                commit("increaseCounter", res.data);
            });
        },
        countUpdate({ commit }, data) {
            console.log(data);
            commit("countUpdateMutation", data);
        },
        sendArrayAction({ commit }, array) {
            console.log(array);
            commit("sendArrayMutation", array);
        },
    },
    getters: {
        counterSqure(state) {
            return state.counter * state.counter;
        },
    },
});
