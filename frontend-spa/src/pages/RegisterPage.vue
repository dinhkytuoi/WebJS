<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label>Username</label>
        <input v-model="form.username" type="text" required />
      </div>
      <div>
        <label>Password</label>
        <input v-model="form.password" type="password" required />
      </div>
      <div>
        <label>Phone Number</label>
        <input v-model="form.phone_number" type="text" required />
      </div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Registering...' : 'Register' }}
      </button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const form = reactive({
  username: '',
  password: '',
  phone_number: '',
});

const loading = ref(false);
const error = ref('');
const router = useRouter();

const handleRegister = async () => {
  error.value = '';
  loading.value = true;
  try {
    await axios.post('http://localhost:3000/api/auth/register', form);
    router.push('/login'); // sau khi đăng ký thì chuyển sang login
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 50px auto;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
