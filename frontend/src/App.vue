<template>
  <div>
    <ItemForm :itemToEdit="ItemToEdit" @refresh-items="fetchItems" />
    <ItemList ref="itemList" @edit-item="setItemToEdit" />
  </div>
</template>

<script>
import ItemForm from "./components/ItemForm.vue";
import ItemList from "./components/ItemList.vue";
import axios from "axios";
export default {
  components: {
    ItemForm,
    ItemList,
  },
  data() {
    return {
      ItemToEdit: null,
    };
  },
  methods: {
    setItemToEdit(item) {
      this.ItemToEdit = item;
    },
    fetchItems() {
      console.log("Fetching items...");
      axios
        .get("http://localhost:3000/api/items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    },
  },
};
</script>
