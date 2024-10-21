<template>
    <div>
      <h2>User List</h2>
      <router-link to="/users/add">Add New User</router-link>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }} - {{ user.email }}
          <router-link :to="'/users/edit/' + user.id">Edit</router-link>
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    methods: {
      fetchUsers() {
        axios.get('http://localhost:3000/api/users')
          .then(response => {
            this.users = response.data;
          });
      },
      deleteUser(id) {
        axios.delete(`http://localhost:3000/api/users/${id}`)
          .then(() => this.fetchUsers());
      }
    },
    mounted() {
      this.fetchUsers();
    }
  };
  </script>
  