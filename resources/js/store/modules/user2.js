export default {
    namespaced: true,
    state: {
        cart: 0,
        takeData: 1,
    },
    mutations: {
        increaseCart(state, randomNumber) {
            // state.counter++
            console.log(`cart increased for user 2 : `, randomNumber);
            state.cart += randomNumber;
        },
        decreaseCart(state, randomNumber) {
            // state.counter--
            console.log("cart decrease by for user 2 : ", randomNumber);
            state.cart -= randomNumber;
        },
        takeDataFromUser1(state, input) {
            console.log("Data is send by user 1 : ", input);
            state.takeData = input;
        },
    },
    actions: {
        increaseCart({ commit }, data) {
            commit("increaseCart", data);
        },
        decreaseCart({ commit }, data) {
            commit("decreaseCart", data);
        },
        fetchingDataFromUser1({ commit, rootState }, data) {
            console.log(
                "user Data is Fetched From user 1 : " + rootState.a.sendtouser2
            );
            commit("takeDataFromUser1", rootState.a.sendtouser2);
        },
        fetchFunctionOfUser1({ commit, dispatch, rootState }, data) {
            console.log(
                "Function is Called by user 2, which is present inside user1"
            );
            dispatch("a/increaseSendData", data, { root: true });
        },
    },
    getters: {
        counterPrice(state) {
            return state.cart * 100;
        },
    },
};
