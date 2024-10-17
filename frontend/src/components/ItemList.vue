<template>
    <div>
        <h2>Item List</h2>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }} - {{ item.description }}
            </li>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return{
            items: []
        }
    },
    methods: {
        fetchItems() {
            axios.get(`http://localhost:3000/api/items/${id}`)
            .then(()=>{
                this.fetchItems();
            })
        },
        deleteItem(item) {
            axios.delete(`http://localhost:3000/api/items/${id}`)
            .then(()=>{
                this.fetchItems();
            })
        },
        editItem(item) {
            this.$emit('editItem',item)
    },
    mounted() {
        this.fetchItems();
    },
}
}
</script>