<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username</label>
        <input v-model="form.username" type="text" required />
      </div>
      <div>
        <label>Password</label>
        <input v-model="form.password" type="password" required />
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';
import axios from 'axios';

const form = reactive({
  username: '',
  password: '',
});

const loading = ref(false);
const error = ref('');
const router = useRouter();
const userStore = useUserStore();

const handleLogin = async () => {
  error.value = '';
  loading.value = true;
  try {
    const res = await axios.post('http://localhost:3000/api/auth/login', form);
    userStore.setUser(res.data);
    router.push('/'); // chuyển về homepage hoặc dashboard sau khi login
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
