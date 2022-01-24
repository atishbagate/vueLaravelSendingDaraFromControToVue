<template>
    <div class="">
        <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                placeholder="Enter Name"
                class="form-control"
                v-model="item.name"
            />
        </div>
        <div class="form-group">
            <label for="name">Phone</label>
            <input
                type="text"
                id="phone"
                placeholder="Enter Phone"
                class="form-control"
                v-model="item.phone"
            />
        </div>
        <button @click="save" class="btn btn-sucess btn-block">
            {{ this.isEditing ? "Update" : "save" }}
        </button>

        <div class="col-md-12 mt-5" v-if="list.length > 0">
            <h2 class="text-center">Telephone Numbers</h2>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in list" :key="item.id">
                    {{ item.name }} - {{ item.phone }}
                    <span class="" style="float: right">
                        <button
                            @click="editTel(item)"
                            class="btn btn-warning btn-sm mr-2"
                            style="background: #ef6a6a"
                        >
                            Edit
                        </button>
                        <button
                            @click="deleteTel(item.id)"
                            class="btn btn-warning btn-sm mr-2"
                            style="background: #2f8ce9"
                        >
                            Delete
                        </button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Directory",
    data() {
        return {
            list: [],
            item: {
                name: "",
                phone: "",
            },
            temp_id: null,
            isEditing: false,
        };
    },
    mounted() {
        this.fetchAll();
    },
    methods: {
        save() {
            let method = axios.post;
            let url = "api/tel";
            if (this.isEditing) {
                method = axios.put;
                url = `api/tel/${this.temp_id}`;
            }
            try {
                method(url, this.item)
                    .then((result) => {
                        console.log(result);
                        this.fetchAll();
                        this.item = {
                            name: "",
                            phone: "",
                        };
                        this.temp_id = null;
                        this.isEditing = false;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (e) {
                console.log(e);
            }
        },
        fetchAll() {
            axios
                .get("api/tel")
                .then((res) => (this.list = res.data))
                .catch((er) => console.log(err));
        },
        deleteTel(id) {
            try {
                axios.delete(`api/tel/${id}`).then((res) => this.fetchAll());
            } catch (e) {
                console.log(e);
            }
        },
        editTel(tel) {
            this.item = {
                name: tel.name,
                phone: tel.phone,
            };
            this.temp_id = tel.id;
            this.isEditing = true;
        },
    },
};
</script>
<style scoped></style>
