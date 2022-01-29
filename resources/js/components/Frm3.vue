<template>
    <h3>this is Form where Add and Remove button Added</h3>
    <div class="card">
        <Form @submit="onSubmit">
            <!-- custom input field  -->
            <div class="col-md-6 offset-m-3" style="margin: 0px auto">
                <div
                    class="form-group card"
                    v-for="(card, k) in cards"
                    :key="k"
                >
                    <div class="card-header"><h2>Enter Your Details</h2></div>
                    <div class="card-body">
                        <label>Insert name</label>
                        <Field
                            :name="`cards[${k}].name`"
                            type="text"
                            class="form-control"
                            v-bind="card.name"
                            rules="required|alpha"
                        />
                        <ErrorMessage
                            class="text-danger"
                            :name="`cards[${k}].name`"
                        />
                        <br />
                        <label>insert Image</label>
                        <Field
                            :name="`cards[${k}].file`"
                            type="file"
                            class="form-control"
                            v-bind="card.file"
                            rules="required|image"
                        />
                        <ErrorMessage
                            class="text-danger"
                            :name="`cards[${k}].file`"
                        />
                        <br />
                        <span>
                            <button
                                type="button"
                                class="btn btn-outline-primary mr-2"
                                @click="addCard(k)"
                                v-show="
                                    k == cards.length - 1 && cards.length < 3
                                "
                            >
                                add
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-warning"
                                @click="removeCard(k)"
                                v-show="k || (!k && card.length > 1)"
                            >
                                remove
                            </button>
                        </span>
                    </div>
                    <div class="card-footer">
                        <h5>verify the Details entered above the Card.</h5>
                    </div>
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
    // defining data for input field
    data() {
        return {
            cards: [
                {
                    name: "",
                    file: "",
                },
            ],
        };
    },

    methods: {
        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
            // console.log(values);
        },
        //methods to add and remove card
        addCard(index) {
            console.log(`card added on position ${index}`);
            this.cards.push(index);
        },
        removeCard(index) {
            console.log(`card is removed on position ${index}`);
            this.cards.splice(index, 1);
        },
    },
};
</script>
