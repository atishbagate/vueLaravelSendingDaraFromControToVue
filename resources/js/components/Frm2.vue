<template>
    <h3>this is Form where Add and Remove button Added</h3>
    <div class="card">
        <Form @submit="onSubmit">
            <!-- custom input field  -->
            <div class="col-md-6 offset-md-3">
                <div class="form-group" v-for="(input, k) in inputs" :key="k">
                    <label :for="`inputs[${k}].name`">Insert Email</label>
                    <Field
                        :name="`inputs[${k}].name`"
                        type="email"
                        class="form-control"
                        v-bind="input.name"
                        rules="required|email"
                    />
                    <span>
                        <button
                            type="button"
                            class="btn btn-outline-light text-dark"
                            @click="add(k)"
                            v-show="k == inputs.length - 1 && inputs.length < 3"
                        >
                            add
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-light text-dark"
                            @click="remove(k)"
                            v-show="k || (!k && inputs.length > 1)"
                        >
                            remove
                        </button>
                    </span>
                    <ErrorMessage
                        class="text-danger"
                        :name="`inputs[${k}].name`"
                    />
                </div>
            </div>
            <div class="col-md-6 offset-md-3">
                <button class="btn btn-primary">Sign up</button>
            </div>
        </Form>
        <br />
    </div>
</template>
<script>
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
        defineRule,
    },
    data() {
        return {
            inputs: [
                {
                    name: "",
                },
            ],
        };
    },

    methods: {
        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
            // console.log(values);
        },
        // methods for input value
        add(index) {
            console.log(`email added on position : ${index}`);
            this.inputs.push({ name: "" });
        },
        remove(index) {
            console.log(`email removed on position : ${index}`);
            this.inputs.splice(index, 1);
        },
    },
};
</script>
