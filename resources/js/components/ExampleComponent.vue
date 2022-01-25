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
                        this is Vuex Module Example
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
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
            cart: (state) => state.user.cart,
        }),
        ...mapGetters({
            counterSqure: "counterSqure",
            counterPrice: "counterPrice",
        }),
    },
    methods: {
        sendArray() {
            this.$store.dispatch("sendArrayAction", this.proparray1);
        },
        ...mapActions({
            decreaseCounter: "decreaseCounter",
            increaseCounter: "increaseCounter",
            increaseCart: "increaseCart",
            decreaseCart: "decreaseCart",
        }),
        ...mapMutations({
            mutatedecreaseCounter: "increaseCounter",
            mutateincreaseCounter: "decreaseCounter",
            increaseCartMutate: "increaseCart",
            decreaseCartMutate: "decreaseCart",
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
    },
};
</script>
