<script setup>
import { ref } from 'vue'
import { login } from '../services/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await login({
      email: email.value,
      password: password.value
    })

    // ⚠️ depende de tu service
    const token = res.token || res.data?.token || '123'

    localStorage.setItem('token', token)

    alert('Login correcto 🚀')
    router.push('/')

  } catch (error) {
    alert('Credenciales incorrectas ❌')
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>🔐 Login</h2>

      <!-- 🔥 AHORA SÍ FUNCIONA -->
      <input 
        v-model="email"
        placeholder="Email"
      />

      <input 
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <!-- 🔥 EJECUTA LOGIN -->
      <button class="btn primary" @click="handleLogin">
        Ingresar
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ecf0f1;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 350px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.login-box h2 {
  margin-bottom: 25px;
  color: #2c3e50;
}

input {
  width: 100%;
  margin: 12px 0;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #dcdde1;
  font-size: 15px;
}

.btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
}

.primary {
  background: #3498db;
  color: white;
}
</style>