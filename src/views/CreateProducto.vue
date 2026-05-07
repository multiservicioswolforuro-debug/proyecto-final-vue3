<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const nombre = ref('')
const precio = ref('')
const stock = ref('')
const categoriaId = ref('')

const categorias = ref([])

// 🔥 Cargar categorías
const cargarCategorias = async () => {
  const res = await axios.get('http://localhost:3001/categorias')
  categorias.value = res.data
}

// 🔥 Guardar producto
const guardarProducto = async () => {

  const nuevoProducto = {
    nombre: nombre.value,
    precio: Number(precio.value),
    stock: Number(stock.value),
    categoriaId: Number(categoriaId.value)
  }

  await axios.post(
    'http://localhost:3001/productos',
    nuevoProducto
  )

  alert('Producto creado correctamente 🚀')

  router.push('/productos')
}

onMounted(cargarCategorias)
</script>

<template>

  <div class="container">

    <!-- 🔥 HEADER -->
    <div class="top">
      <h1>➕ Nuevo Producto</h1>

      <button
        class="btn-back"
        @click="$router.push('/productos')"
      >
        ⬅ Volver
      </button>
    </div>

    <!-- 🔥 CARD -->
    <div class="card">

      <div class="form-group">
        <label>Nombre</label>

        <input
          v-model="nombre"
          type="text"
          placeholder="Ingrese nombre del producto"
        />
      </div>

      <div class="form-group">
        <label>Precio</label>

        <input
          v-model="precio"
          type="number"
          placeholder="Ingrese precio"
        />
      </div>

      <div class="form-group">
        <label>Stock</label>

        <input
          v-model="stock"
          type="number"
          placeholder="Ingrese stock"
        />
      </div>

      <div class="form-group">
        <label>Categoría</label>

        <select v-model="categoriaId">

          <option disabled value="">
            Seleccione categoría
          </option>

          <option
            v-for="c in categorias"
            :key="c.id"
            :value="c.id"
          >
            {{ c.nombre }}
          </option>

        </select>
      </div>

      <!-- 🔥 BOTÓN -->
      <button
        class="btn-save"
        @click="guardarProducto"
      >
        💾 Guardar Producto
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

.top h1 {
  color: #2c3e50;
  font-size: 38px;
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
  color: #2c3e50;
}

input,
select {
  width: 100%;

  padding: 14px;

  border-radius: 10px;

  border: 1px solid #dcdde1;

  font-size: 15px;

  outline: none;

  transition: 0.3s;
}

input:focus,
select:focus {
  border-color: #3498db;
}

.btn-save {
  width: 100%;

  padding: 14px;

  border: none;

  border-radius: 10px;

  background: #2ecc71;

  color: white;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;
}

.btn-save:hover {
  background: #27ae60;
}

.btn-back {
  border: none;

  padding: 12px 18px;

  border-radius: 10px;

  background: #3498db;

  color: white;

  font-weight: bold;

  cursor: pointer;
}

.btn-back:hover {
  background: #2980b9;
}

</style>