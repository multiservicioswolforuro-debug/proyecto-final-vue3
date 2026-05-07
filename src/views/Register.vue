<script setup>
import { ref } from 'vue'
import { register } from '../services/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await register({
      email: email.value,
      password: password.value
    })

    alert('Usuario creado 🚀')
    router.push('/login')

  } catch (error) {
    alert('Error al registrar')
  }
}
</script>

<template>
  <h1>REGISTRO 📝</h1>

  <input v-model="email" placeholder="Email" />
  <br /><br />

  <input v-model="password" type="password" placeholder="Password" />
  <br /><br />

  <button @click="handleRegister">Registrar</button>
</template>