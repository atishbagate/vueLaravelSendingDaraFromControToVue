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
                            @click="decreaseCounter(2)"
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
                            this is user 2
                            <h3>form user 2 -> {{ alias }}</h3>
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
        ...mapState(["counter", "arrayData", "vueData"]),
        ...mapGetters({ counterSqure: "counterSqure" }),
    },
    methods: {
        sendArray() {
            this.$store.dispatch("sendArrayAction", this.proparray1);
        },
        ...mapActions({
            decreaseCounter: "decreaseCounter",
            increaseCounter: "increaseCounter",
        }),
        ...mapMutations({
            mutatedecreaseCounter: "increaseCounter",
            mutateincreaseCounter: "decreaseCounter",
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
