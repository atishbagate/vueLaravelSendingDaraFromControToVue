import axios from "axios";

export default {
    namespaced: true,
    state: {
        userData: [],
        count: 0,
        input1: [],
        input2: { one: "1", two: "2", three: "3", four: "4" },
        onoff: false,
        dynamicData: 1,
    },
    mutations: {
        AddData(state, adduser) {
            // state.counter++
            // console.log(`cart increased for user 1 : `, adduser);
            state.userData += adduser;
            state.count++;
        },
        AddFrmData(state, datainput) {
            state.input1 += `,${datainput}`;
        },
        input2Mutate(state, dataimport) {
            state.input2 += dataimport;
        },
        changeData(state, updateData) {
            state.input2["one"] = updateData;
        },
        changeBoolean(state, payload) {
            state.onoff = payload;
        },
        callDatain(state) {
            state.dynamicData++;
        },
    },
    actions: {
        AddData({ commit }, data) {
            // console.log("Data is send to Action ", data);
            commit("AddData", data);
        },
        GetFrmData({ commit }, data) {
            // console.log("Data is send to Form", data);
            commit("AddFrmData", data);
        },
        GetFrmUser({ commit }, data) {
            // console.log("data inside GetFrmUSer ", data);
            commit("AddFrmData", data);
            // console.log("data Type", typeof data);
        },
        input2Action({ commit }, data) {
            commit("input2Mutate", data);
        },
        changeData({ commit }, data) {
            commit("changeData", data);
        },
        changeBoolean({ commit }) {
            commit("changeBoolean");
        },
        callDatain({ commit }) {
            commit("callDatain");
        },
        callData({ commit, dispatch, state }) {
            let data = state.dynamicData;

            if (state.onoff == false) {
                console.log("inside if ");
                axios
                    .post(
                        `http://vuelaravelsendingdarafromcontrotovue.test/send/${data}`
                    )
                    .then((response) => {
                        console.log(
                            "data response from server - ",
                            JSON.parse(response.data.boolean)
                        );
                        commit(
                            "changeBoolean",
                            JSON.parse(response.data.boolean)
                        );
                        commit("callDatain");
                        dispatch("callData");
                    });

                console.log(state.dynamicData);
                console.log("boolean before recieved - ", state.onoff);
            } else {
                console.log("loop run end");
            }
        },
    },
    getters: {
        counterPersons(state) {
            return state.count;
        },
    },
};
