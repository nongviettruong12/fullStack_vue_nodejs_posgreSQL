<template>
            <h1>Admin layout</h1>
            <router-link to="/admin/login">Login</router-link>
            <router-link to="/admin/register">Register</router-link>
            <router-view></router-view>
</template>
<script>
  export default {
    name: 'LayoutAdmin'
  }
</script>
<style scoped>
/* Style cho LayoutAdmin nếu cần */
</style>