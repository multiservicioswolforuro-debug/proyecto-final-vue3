<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>

  <nav class="navbar">

    <h2 class="logo">🛒 Mi Tienda</h2>

    <div class="menu">

      <button
        class="btn btn-primary"
        @click="$router.push('/')">

        Dashboard

      </button>

      <button
        class="btn btn-primary"
        @click="$router.push('/productos')">

        Productos

      </button>

      <button
        class="btn btn-success"
        @click="$router.push('/productos/create')">

        + Nuevo

      </button>

      <button
        class="btn btn-danger"
        @click="logout">

        Logout

      </button>

    </div>

  </nav>

</template>

<style scoped>

.navbar{
  background:#2c3e50;
  color:white;

  padding:20px 40px;

  display:flex;
  justify-content:space-between;
  align-items:center;
}

.logo{
  font-size:28px;
}

.menu{
  display:flex;
  gap:10px;
}

.btn{
  border:none;
  padding:10px 18px;
  border-radius:8px;
  cursor:pointer;
  font-weight:bold;
}

.btn-primary{
  background:#3498db;
  color:white;
}

.btn-success{
  background:#2ecc71;
  color:white;
}

.btn-danger{
  background:#e74c3c;
  color:white;
}

</style>