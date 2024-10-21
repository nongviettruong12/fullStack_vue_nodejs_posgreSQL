<!-- ItemList.vue -->
<template>
  <div>
    <h2>Item List</h2>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          description
        </th>
        <th class="text-left">
          action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td> <v-btn @click="editItem(item)">Edit</v-btn></td>
        <td> <v-btn @click="deleteItem(item.id)">Delete</v-btn></td>
      </tr>
    </tbody>
    </v-table>
    
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchItems() {
      axios
        .get("http://localhost:3000/api/items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    },
    deleteItem(id) {
      axios.delete(`http://localhost:3000/api/items/${id}`).then(() => {
        this.fetchItems();
      });
    },
    editItem(item) {
      this.$emit("edit-item", item);
    },
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
  