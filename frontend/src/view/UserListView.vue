<!-- ItemList.vue -->
<template>
  <div>
    <h2>Item List</h2>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          userName
        </th>
        <th class="text-left">
          passWord
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in items"
        :key="user.id"
      >
        <td>{{ user.name }}</td>
        <td>{{ user.description }}</td>
        <td> <v-btn @click="editItem(user)">Edit</v-btn></td>
        <td> <v-btn @click="deleteItem(user.id)">Delete</v-btn></td>
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
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:3000/api/users")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    deleteUser(id) {
      axios.delete(`http://localhost:3000/api/users/${id}`).then(() => {
        this.fetchUsers();
      });
    },
    editUser(user) {
      this.$emit("edit-user", user);
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
  