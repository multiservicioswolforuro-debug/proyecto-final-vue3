<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <div class="home-container">
    <h1>🏠 Dashboard</h1>
    <p>Panel de administración del sistema</p>

    <div class="cards">
      <div class="card">
        <h3>📦 Productos</h3>
        <p>Gestiona todos los productos</p>
        <button class="btn primary" @click="$router.push('/productos')">
          Ver productos
        </button>
      </div>

      <div class="card">
        <h3>➕ Nuevo Producto</h3>
        <p>Agrega productos al sistema</p>
        <button class="btn success" @click="$router.push('/productos/create')">
          Crear producto
        </button>
      </div>

      <div class="card">
        <h3>🔐 Sesión</h3>
        <p>Cierra tu sesión actual</p>
        <button class="btn danger" @click="logout">
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 50px;
  text-align: center;
  background: #f4f6f9;
  min-height: 100vh;
}

.home-container h1 {
  font-size: 45px;
  color: #2c3e50;
}

.home-container p {
  color: #7f8c8d;
  margin-top: 10px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.card {
  background: white;
  padding: 30px;
  width: 300px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.card p {
  margin-bottom: 20px;
}

.btn {
  padding: 12px 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

.primary {
  background: #3498db;
  color: white;
}

.success {
  background: #2ecc71;
  color: white;
}

.danger {
  background: #e74c3c;
  color: white;
}
</style>