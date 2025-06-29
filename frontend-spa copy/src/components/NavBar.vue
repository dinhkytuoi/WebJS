<template>
  <nav class="navbar">
    <router-link to="/home">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #eee;
}
</style>
