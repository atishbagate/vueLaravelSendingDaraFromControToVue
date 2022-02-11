<template>
    <h1>This is Demo From For Appending Data From Store to Input Field.</h1>
    <h4>current user data stored {{ count }}</h4>
    <h3>this is Form</h3>
    <button @click="addExtraData" class="btn btn-danger">AddData</button>
    <button @click="changeData(this.outer)" class="btn btn-danger">
        Click
    </button>
    <button @click="callData()" class="btn btn-danger">Click call</button>
    <button @click="changeBoolean()" class="btn btn-danger">False</button>
    <div class="card">
        <Form @submit="onSubmit">
            <div class="col-md-6 offset-md-3">
                <label for="email">Insert Email</label>
                <Field
                    name="emails"
                    class="form-control"
                    type="email"
                    rules="required"
                    v-model="input1"
                />
                <ErrorMessage class="text-danger" name="emails" />
            </div>
            <div class="col-md-6 offset-md-3">
                <label for="email">Insert number between 1 to 10</label>
                <Field
                    name="number"
                    class="form-control"
                    rules="required|between:1,10"
                    v-model="one"
                />
                <ErrorMessage class="text-danger" name="number" />
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
import { mapActions, mapState } from "vuex";
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
            input1: "test@gmail.com",
            input2s: null,
            one: null,
            outer: 500,
        };
    },

    computed: {
        ...mapState({
            // count: (state) => state.frm.count,
            count: (state) => {
                return state.frm.input1;
                //  return state.frm.input2;
            },
            inputdata: (state) => {
                return state.frm.input2;
            },
        }),
        countM() {
            for (let i = 0; i < this.count.length; i++) {
                this.input1 += this.count[i];
                console.log("input updated");
            }
        },
        countsM() {
            console.log("countsM entered");
            console.log(this.input2s); //local var
            console.log(this.inputdata); //vuex Data
            this.input2s = JSON.stringify(this.inputdata);

            for (var name in this.inputdata) {
                this[name] = this.inputdata[name];
            }
        },
        calculate() {
            let storedata = this.$state.frm.input2;
            console.log(storedata);
        },
    },
    methods: {
        ...mapActions({
            addUser: "frm/GetFrmData",
            GetFrmUser: "frm/GetFrmUser",
            changeData: "frm/changeData",
            changeBoolean: "frm/changeBoolean",
            callData: "frm/callData",
        }),
        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
            this.addUser(JSON.stringify(values, null, 2));
        },
        addExtraData() {
            this.GetFrmUser("extra@gmail.com");
        },
    },
};
</script>
