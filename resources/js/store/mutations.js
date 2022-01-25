export default {
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
};
