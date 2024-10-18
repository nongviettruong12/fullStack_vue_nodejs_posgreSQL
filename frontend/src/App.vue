<template>
  <div>
    <ItemForm :itemToEdit="ItemToEdit" @refresh-items="fetchItems" />
    <ItemList ref="itemList" @edit-item="setItemToEdit" /> <!-- Đổi từ ItemEdit thành ItemList -->
  </div>
</template>

<script>
import ItemForm from './components/ItemForm.vue';
import ItemList from './components/ItemList.vue'; // Kiểm tra lại tên file cho chính xác
import axios from 'axios';
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
      this.ItemToEdit = item; // Đặt giá trị cho ItemToEdit
    },
    fetchItems() {
  console.log('Fetching items...');
  axios.get('http://localhost:3000/api/items')
    .then(response => {
      this.items = response.data;
    })
    .catch(error => {
      console.error('Error fetching items:', error);
    });
}
  },
}
</script>
