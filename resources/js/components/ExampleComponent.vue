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
                        <h3>sending Object = {{ foo1 }}</h3>
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
    },
    data() {
        return {
            name: "under component",
            count: 2,
        };
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
        foo1: {
            type: Object,
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
    },
};
</script>
