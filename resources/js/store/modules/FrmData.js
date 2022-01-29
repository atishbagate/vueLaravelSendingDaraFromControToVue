export default {
    namespaced: true,
    state: {
        userData: [],
        count: 0,
    },
    mutations: {
        AddData(state, adduser) {
            // state.counter++
            console.log(`cart increased for user 1 : `, adduser);
            state.userData += adduser;
            state.count++;
        },
    },
    actions: {
        AddData({ commit }, data) {
            console.log("Data is send to Action ", data);
            commit("AddData", data);
        },
    },
    getters: {
        counterPersons(state) {
            return state.count;
        },
    },
};
