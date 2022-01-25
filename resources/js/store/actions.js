import axios from "axios";
export default {
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
};
