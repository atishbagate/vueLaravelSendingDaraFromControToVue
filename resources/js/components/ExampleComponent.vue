<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                        <h3>sending Strings = {{ bts }}</h3>
                        <h3>sending Object = {{ foo }}</h3>
                        <h3>
                            sending Title from controller inside vue Component =
                            {{ title }}
                        </h3>
                        <div class="" v-for="itm in info" :key="itm">
                            <h2>name: {{ itm }}</h2>
                        </div>
                        <div class="" v-for="itm in value" :key="itm">
                            <h2>name: {{ itm }}</h2>
                        </div>

                        <h4>{{ info }}</h4>
                        <h4>{{ vuex }}</h4>
                        <h2>
                            this is data send from blade file :
                            {{ vueData }}
                        </h2>
                        <h2>{{ $store.state.counter }}</h2>
                        <h2>{{ counter }}</h2>
                        <h2>
                            this is the Getter Function showing Square of above
                            number : {{ counterSqure }}
                        </h2>
                        <button
                            type="button"
                            class="btn btn-success"
                            @click="increaseCounter()"
                            name="button"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="decreaseCounter()"
                            name="button"
                        >
                            -
                        </button>
                        <button
                            type="button"
                            class="btn btn-success"
                            @click="mutatedecreaseCounter(2)"
                            name="button"
                        >
                            click to add mutation directly
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger"
                            @click="mutateincreaseCounter(2)"
                            name="button"
                        >
                            click to subtract mutation directly
                        </button>

                        <br />
                        <br />
                        <br />
                        <br />
                        <button type="button" @click="sendArray">
                            Send Array
                        </button>
                        Array From Store:
                        <div
                            class="text-danger"
                            v-for="itm in arrayData"
                            :key="itm"
                        >
                            <h2>name: {{ itm }}</h2>
                        </div>
                    </div>
                    <div class="card-body">
                        this is Vuex Module Example for user 1
                        <div class="container">
                            this is user
                            <h3>form user module -></h3>
                            <h2>{{ cart }}</h2>
                            <h2>
                                this is the Getter Function showing Square of
                                above number : {{ counterPrice }}
                            </h2>

                            <button
                                type="button"
                                class="btn btn-success"
                                @click="increaseCart(1)"
                                name="button"
                            >
                                user increase
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="decreaseCart(1)"
                                name="button"
                            >
                                user decrease
                            </button>
                            <button
                                type="button"
                                class="btn btn-success"
                                @click="increaseCartMutate(5)"
                                name="button"
                            >
                                user increase by hitting Mutation
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="decreaseCartMutate(5)"
                                name="button"
                            >
                                user decrease by hitting Mutation
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        this is Vuex Module Example for user 2\
                        <h2>
                            In this Store we demonstrated that . -> we can use
                            same function name over the different modules.
                        </h2>
                        <h5>Store a -> function Count()</h5>
                        <h5>Store b -> function Count()</h5>
                        <p>
                            can be used using namespaced: true, and Giving name
                            to module and accessing it by name prior to that
                            specific function -> a/count or b/count
                        </p>
                        <div class="container">
                            this is user
                            <h3>form user module -></h3>
                            <h2>{{ cart2 }}</h2>
                            <h2>
                                this is the Getter Function showing Square of
                                above number : {{ counterPrice2 }}
                            </h2>

                            <button
                                type="button"
                                class="btn btn-success"
                                @click="increaseCart2(1)"
                                name="button"
                            >
                                user increase
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="decreaseCart2(1)"
                                name="button"
                            >
                                user decrease
                            </button>
                            <button
                                type="button"
                                class="btn btn-success"
                                @click="increaseCartMutate2(10)"
                                name="button"
                            >
                                user increase by hitting Mutation
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="decreaseCartMutate2(10)"
                                name="button"
                            >
                                user decrease by hitting Mutation
                            </button>
                            <br />
                            <br />
                            <h2>
                                Example to show how Data From user 1 changed by
                                user 2 module1
                            </h2>
                            <h2>{{ takeData }}</h2>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="sendDataU1toU2()"
                                name="button"
                            >
                                send Data From user 1 to user 2
                            </button>
                            <br />
                            <br />
                            <br />
                            <h2>
                                Example To Use Action of User 1 into User 2
                                Module
                            </h2>
                            <h3>{{ takeDataUser1 }}</h3>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="fetchActionOfUser1(10)"
                                name="button"
                            >
                                send Data From user 1 to user 2
                            </button>
                            <br />
                            <br />
                            <h3>Page Redirections using laravel Routes</h3>
                            <a v-bind:href="this.routes">Click 1</a>
                            <br />
                            <a
                                class="btn btn-success"
                                v-bind:href="this.routes2"
                                >Click 2</a
                            >
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <h1>Under this is use of Vee validation.</h1>
                <div class="card">
                    <div class="card-body">
                        <h2>Simple Form</h2>
                        <AnotherFrm />
                    </div>
                </div>
                <br />
                <div class="card">
                    <div class="card-body">
                        <h2>
                            this is demo of Form where add and remove Filed is
                            used.
                        </h2>
                        <Frm2 />
                    </div>
                </div>
                <br />
                <div class="card">
                    <div class="card-body">
                        <h2>Cards Insertion and Deletion.</h2>
                        <Frm3 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

// import Frm from "./Frm.vue";
import AnotherFrm from "./AnotherFrm.vue";
import Frm2 from "./Frm2.vue";
import Frm3 from "./Frm3.vue";
export default {
    components: {
        // Frm,
        AnotherFrm,
        Frm2,
        Frm3,
    },
    mounted() {
        console.log("Component mounted.");
        this.$store.dispatch("countUpdate", this.bts);
        this.$store.dispatch("sendArrayAction", this.proparray);
    },
    data() {
        return {
            name: "under component",
            count: 2,
        };
    },
    computed: {
        ...mapState({
            counter: "counter",
            arrayData: "arrayData",
            vueData: "vueData",
            cart: (state) => state.a.cart,
            cart2: (state) => state.b.cart,
            //to send the data From user1 to user2
            takeData: (state) => state.b.takeData,
            //accessing the Function of user1 inside user2
            takeDataUser1: (state) => state.a.sendtouser2,
        }),
        ...mapGetters({
            counterSqure: "counterSqure",
            counterPrice: "a/counterPrice",
            counterPrice2: "b/counterPrice",
        }),
    },
    methods: {
        sendArray() {
            this.$store.dispatch("sendArrayAction", this.proparray1);
        },
        ...mapActions({
            decreaseCounter: "decreaseCounter",
            increaseCounter: "increaseCounter",
            increaseCart: "a/increaseCart",
            decreaseCart: "a/decreaseCart",
            // For user2
            increaseCart2: "b/increaseCart",
            decreaseCart2: "b/decreaseCart",
            //to send the data From user1 to user2
            sendDataU1toU2: "b/fetchingDataFromUser1",
            //accessing the Function of user1 inside user2
            fetchActionOfUser1: "b/fetchFunctionOfUser1",
        }),
        ...mapMutations({
            mutatedecreaseCounter: "increaseCounter",
            mutateincreaseCounter: "decreaseCounter",
            increaseCartMutate: "a/increaseCart",
            decreaseCartMutate: "a/decreaseCart",
            // For user 2
            increaseCartMutate2: "b/increaseCart",
            decreaseCartMutate2: "b/decreaseCart",
        }),
    },
    props: {
        vuex: {
            type: Number,
            required: true,
            default: 0,
        },
        bts: { type: String, required: true, default: "in component" },
        foo: {
            type: Object,
            required: true,
            default: {
                1: "one",
            },
        },

        title: {
            type: String,
            required: true,
            default: "this is string from component itself.",
        },
        info: {
            type: [String, Object],
            required: true,
            default: {
                3: "three",
                4: "four",
            },
        },
        value: {
            type: Object,
            required: true,
            default: [1, 2, 3, 4],
        },
        proparray: {
            type: Object,
            required: true,
            default: [6, 7, 8],
        },
        proparray1: {
            type: Object,
            required: true,
            default: [6, 7, 8],
        },
        routes: {
            type: String,
        },
        routes2: {
            type: String,
        },
    },
};
</script>
