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
                            {{ $store.state.vueData }}
                        </h2>
                        <h2>{{ $store.state.counter }}</h2>
                        <button
                            type="button"
                            @click="$store.dispatch('increaseCounter')"
                            name="button"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            @click="$store.dispatch('decreaseCounter')"
                            name="button"
                        >
                            -
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
                            v-for="itm in $store.state.arrayData"
                            :key="itm"
                        >
                            <h2>name: {{ itm }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    methods: {
        sendArray() {
            this.$store.dispatch("sendArrayAction", this.proparray1);
        },
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
