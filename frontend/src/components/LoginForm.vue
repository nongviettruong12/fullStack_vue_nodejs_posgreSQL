<template>
   <div>
     <h2>Login</h2>
     <form @submit.prevent="handleLogin">
       <div>
         <label for="username">Username:</label>
         <input type="text" id="username" v-model="username" required />
       </div>
       <div>
         <label for="password">Password:</label>
         <input type="password" id="password" v-model="password" required />
       </div>
       <button type="submit">Login</button>
     </form>
   </div>
 </template>
 
 <script>
 export default {
   name: 'LoginForm',
   data() {
     return {
       username: '',
       password: '',
     };
   },
   methods: {
     handleLogin() {
       // Xử lý logic đăng nhập ở đây
       console.log('Logging in with', this.username, this.password);
     },
   },
 };
 </script>
 
 <style scoped>
 /* Style cho Login nếu cần */
 </style>
 