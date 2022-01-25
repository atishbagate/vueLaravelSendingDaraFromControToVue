export default {
    state: {
        cart: 0,
    },
    mutations: {
        increaseCart(state, randomNumber) {
            // state.counter++
            console.log(`cart increased by : `, randomNumber);
            state.cart += randomNumber;
        },
        decreaseCart(state, randomNumber) {
            // state.counter--
            console.log("cart decrease by : ", randomNumber);
            state.cart -= randomNumber;
        },
    },
    actions: {
        increaseCart({ commit }, data) {
            commit("increaseCart", data);
        },
        decreaseCart({ commit }, data) {
            commit("decreaseCart", data);
        },
    },
    getters: {
        counterPrice(state) {
            return state.cart * 100;
        },
    },
};
