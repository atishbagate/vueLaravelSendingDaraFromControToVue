export default {
    namespaced: true,
    state: {
        cart: 0,
        sendtouser2: 2,
    },
    mutations: {
        increaseCart(state, randomNumber) {
            // state.counter++
            console.log(`cart increased for user 1 : `, randomNumber);
            state.cart += randomNumber;
        },
        decreaseCart(state, randomNumber) {
            // state.counter--
            console.log("cart decrease for user 1 : ", randomNumber);
            state.cart -= randomNumber;
        },
        increaseSendData(state, payload) {
            console.log("send Data is Changed inside user 1");
            state.sendtouser2 = payload;
        },
    },
    actions: {
        increaseCart({ commit }, data) {
            commit("increaseCart", data);
        },
        decreaseCart({ commit }, data) {
            commit("decreaseCart", data);
        },

        increaseSendData({ commit }, data = 5) {
            console.log("increaseSendData Action Triggered inside User 1");
            commit("increaseSendData", data);
        },
    },
    getters: {
        counterPrice(state) {
            return state.cart * 100;
        },
    },
};
