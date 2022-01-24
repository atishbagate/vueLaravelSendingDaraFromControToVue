//main.js
import { createApp } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import Vuex from "./store/index";
// import store from './store';

// Vue.config.productionTip = false;

createApp({
    components: {
        ExampleComponent,
    },
})
    .use(Vuex)
    .mount("#app");

// window.Vue = require("vue").default;

// import ExampleComponent from "./components/ExampleComponent";

// const app = new Vue({
//     el: "#app",
//     components: {
//         ExampleComponent: ExampleComponent,
//     },
//     props: { bts: { type: String, required: true, default: "in component" } },
// });
