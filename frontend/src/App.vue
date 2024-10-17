<template>
          <div>
            <ItemForm :itemToEdit="ItemToEdit" @refresh-items="fetchItems"/>
            <ItemEdit @edit-item="ItemToEdit"/>
          </div>
</template>
<script>
import ItemForm from './components/ItemForm.vue';
import ItemEdit from './components/ItemList.vue';
export default {
  components: {
    ItemForm,
    ItemEdit,
  },
  data() {
    return {
      ItemToEdit: null,
    };
  },
  methods: {
   setItemToEdit(item) {
    this.itemToEdit = item;
   },
   fetchItems() {
    this.$ref.itemList.fetchItems();
   },
  },
}
</script>