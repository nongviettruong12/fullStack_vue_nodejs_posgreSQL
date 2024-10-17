<template>
  <div>
    <h2>{{ isEditMode ? "Edit" : "Add" }} Item</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="item.name" placeholder="Name" required />
      <input v-model="item.description" placeholder="Description" required />
      <button type="submit">{{ isEditMode ? "Update" : "Add" }}</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["itemToEdit"],
  data() {
    return {
      item: {
        id: null,
        name: "",
        description: "",
      },
      isEditMode: false,
    };
  },
  watch() {
    itemToEdit: {
      immediate: true,
        handler(newValue),
        {
          if(newValue) {
            this.item = { ...newValue };
            this.isEditMode = true;
          },
        };
    }
  },
  methods: {
    handleSubmit() {
      if (this.isEditMode) {
        axios
          .put(`http://localhost:3000/api/items/${this.item.id}`, this.item)
          .then(() => this.resetForm());
      } else {
        axios
          .post("http://localhost:3000/api/items", this.item)
          .then(() => this.resetForm());
      }
    },
    resetForm() {
      this.item = { id: null, name: "", description: "" };
      this.isEditMode = false;
      this.$emit("refresh-items");
    },
  },
};
</script>