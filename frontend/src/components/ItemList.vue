<!-- ItemList.vue -->
<template>
    <div>
      <h2>Item List</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.description }}
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: []
      };
    },
    methods: {
      fetchItems() {
        axios.get('http://localhost:3000/api/items') // Không cần id ở đây
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            console.error('Error fetching items:', error);
          });
      },
      deleteItem(id) {
        axios.delete(`http://localhost:3000/api/items/${id}`)
          .then(() => {
            this.fetchItems();
          });
      },
      editItem(item) {
        this.$emit('edit-item', item);
      },
    },
    mounted() {
      this.fetchItems(); // Gọi hàm fetchItems khi component được mount
    },
  }
  </script>
  