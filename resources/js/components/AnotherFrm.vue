<template>
    <h4>current user data stored {{ count }}</h4>
    <h4>current user data stored {{ datashow }}</h4>
    <h3>this is Form</h3>
    <div class="card">
        <Form @submit="onSubmit">
            <div class="col-md-6 offset-md-3">
                <label for="email">Insert Email</label>
                <Field
                    name="emails"
                    class="form-control"
                    type="email"
                    rules="required|email"
                />
                <ErrorMessage class="text-danger" name="emails" />
            </div>
            <div class="col-md-6 offset-md-3">
                <label for="email">Insert number between 1 to 10</label>
                <Field
                    name="number"
                    class="form-control"
                    rules="required|between:1,10"
                />
                <ErrorMessage class="text-danger" name="number" />
            </div>
            <!-- <div class="col-md-6 offset-md-3">
                <label for="input">Insert Image</label>
                <Field
                    name="image input"
                    class="form-control"
                    type="file"
                    rules="required|image"
                />

                <ErrorMessage class="text-danger" name="image input" />
            </div> -->
            <!-- <div class="col-md-6 offset-md-3">
                <label for="doc">Insert File</label>
                <Field
                    name="doc"
                    class="form-control"
                    type="file"
                    rules="required|mimes:application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />

                <ErrorMessage class="text-danger" name="doc" />
                <br />
                <br />
            </div> -->
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
// import { required, email, min } from "@vee-validate/rules";
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
    computed: {
        ...mapState({
            count: (state) => state.frm.count,
            datashow: (state) =>
                state.frm.count > 0 ? state.frm.userData : "No Entry",
        }),
    },
    methods: {
        ...mapActions({
            addUser: "frm/AddData",
        }),
        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
            this.addUser(JSON.stringify(values, null, 2));
            // console.log(values);
        },
    },
};
</script>
