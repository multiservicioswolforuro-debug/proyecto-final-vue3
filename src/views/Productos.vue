<script setup>
import { ref, onMounted } from 'vue'
import { getProductos, deleteProducto } from '../services/productos'
import axios from 'axios'

const productos = ref([])
const productosOriginal = ref([])
const categorias = ref([])

const search = ref('')
const categoriaSeleccionada = ref('')

// 🔹 Cargar datos
const cargarDatos = async () => {
  try {
    const res = await getProductos()

    productos.value = res.data
    productosOriginal.value = res.data

    const cat = await axios.get('http://localhost:3001/categorias')
    categorias.value = cat.data

  } catch (error) {
    console.error(error)
    alert('Error al cargar productos')
  }
}

// 🔎 FILTRO + BUSCADOR
const filtrar = () => {
  let data = productosOriginal.value

  // 🔍 Buscar por nombre
  if (search.value) {
    data = data.filter(p =>
      p.nombre.toLowerCase().includes(search.value.toLowerCase())
    )
  }

  // 🧩 Filtrar por categoría
  if (categoriaSeleccionada.value) {
    data = data.filter(p =>
      p.categoriaId == categoriaSeleccionada.value
    )
  }

  productos.value = data
}

// 🗑 Eliminar
const eliminar = async (id) => {
  try {
    if (confirm('¿Eliminar producto?')) {
      await deleteProducto(id)
      cargarDatos()
    }
  } catch (error) {
    console.error(error)
    alert('Error al eliminar producto')
  }
}

onMounted(cargarDatos)
</script>

<template>

  <div class="container">

    <!-- 🔥 HEADER -->
    <div class="header">
      <h1>📦 PRODUCTOS</h1>

      <button
        class="btn btn-success"
        @click="$router.push('/productos/create')">
        ➕ Agregar Producto
      </button>
    </div>

    <!-- 🔎 FILTROS -->
    <div class="filtros">

      <input
        v-model="search"
        @input="filtrar"
        placeholder="🔍 Buscar producto..."
      />

      <select
        v-model="categoriaSeleccionada"
        @change="filtrar">

        <option value="">Todas las categorías</option>

        <option
          v-for="c in categorias"
          :key="c.id"
          :value="c.id">

          {{ c.nombre }}

        </option>
      </select>

    </div>

    <!-- 📋 TABLA -->
    <div class="tabla-container">

      <table>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="p in productos"
            :key="p.id">

            <td>{{ p.nombre }}</td>

            <td>
              Bs. {{ p.precio }}
            </td>

            <td>{{ p.stock }}</td>

            <td>
              {{ categorias.find(c => c.id == p.categoriaId)?.nombre }}
            </td>

            <td class="acciones">

              <!-- 👁 VER -->
              <button
                class="btn btn-primary"
                @click="$router.push(`/producto/${p.id}`)">

                👁 Ver

              </button>

              <!-- ✏ EDITAR -->
              <button
                class="btn btn-secondary"
                @click="$router.push(`/productos/edit/${p.id}`)">

                ✏ Editar

              </button>

              <!-- ❌ ELIMINAR -->
              <button
                class="btn btn-danger"
                @click="eliminar(p.id)">

                ❌ Eliminar

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</template>

<style scoped>

.container{
  padding: 40px;
}

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}

.header h1{
  color:#2c3e50;
}

.filtros{
  display:flex;
  gap:15px;
  margin-bottom:25px;
}

input,
select{
  padding:12px;
  border-radius:8px;
  border:1px solid #ccc;
  min-width:220px;
  font-size:14px;
}

.tabla-container{
  background:white;
  border-radius:15px;
  overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

table{
  width:100%;
  border-collapse:collapse;
}

thead{
  background:#2c3e50;
  color:white;
}

th,
td{
  padding:15px;
  text-align:center;
}

tbody tr{
  border-bottom:1px solid #eee;
  transition:0.2s;
}

tbody tr:hover{
  background:#f4f6f8;
}

.acciones{
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
}

.btn{
  border:none;
  padding:10px 16px;
  border-radius:8px;
  cursor:pointer;
  font-weight:bold;
  transition:0.3s;
}

.btn:hover{
  transform:translateY(-2px);
}

.btn-primary{
  background:#3498db;
  color:white;
}

.btn-secondary{
  background:#f39c12;
  color:white;
}

.btn-danger{
  background:#e74c3c;
  color:white;
}

.btn-success{
  background:#2ecc71;
  color:white;
}

</style>