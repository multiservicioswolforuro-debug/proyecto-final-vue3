<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const producto = ref({
  nombre: '',
  precio: '',
  stock: '',
  categoriaId: ''
})

const categorias = ref([])

const cargarProducto = async () => {

  const res = await axios.get(
    `http://localhost:3001/productos/${route.params.id}`
  )

  producto.value = res.data
}

const cargarCategorias = async () => {

  const res = await axios.get(
    'http://localhost:3001/categorias'
  )

  categorias.value = res.data
}

const actualizarProducto = async () => {

  await axios.put(
    `http://localhost:3001/productos/${route.params.id}`,
    producto.value
  )

  alert('Producto actualizado 🚀')

  router.push('/productos')
}

onMounted(() => {
  cargarProducto()
  cargarCategorias()
})
</script>

<template>

  <div class="container">

    <div class="top">
      <h1>✏️ Editar Producto</h1>

      <button
        class="btn-back"
        @click="$router.push('/productos')"
      >
        ⬅ Volver
      </button>
    </div>

    <div class="card">

      <div class="form-group">
        <label>Nombre</label>

        <input
          v-model="producto.nombre"
          type="text"
        />
      </div>

      <div class="form-group">
        <label>Precio</label>

        <input
          v-model="producto.precio"
          type="number"
        />
      </div>

      <div class="form-group">
        <label>Stock</label>

        <input
          v-model="producto.stock"
          type="number"
        />
      </div>

      <div class="form-group">
        <label>Categoría</label>

        <select v-model="producto.categoriaId">

          <option
            v-for="c in categorias"
            :key="c.id"
            :value="c.id"
          >
            {{ c.nombre }}
          </option>

        </select>
      </div>

      <button
        class="btn-save"
        @click="actualizarProducto"
      >
        💾 Actualizar Producto
      </button>

    </div>

  </div>

</template>

<style scoped>

.container {
  padding: 40px;
  background: #f4f6f9;
  min-height: 100vh;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.card {
  background: white;
  width: 500px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #dcdde1;
}

.btn-save {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #f39c12;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn-back {
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  background: #3498db;
  color: white;
  cursor: pointer;
}

</style>