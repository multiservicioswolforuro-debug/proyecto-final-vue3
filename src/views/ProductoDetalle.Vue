<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const producto = ref(null)
const categoria = ref(null)

const cargar = async () => {
  const res = await axios.get(`http://localhost:3001/productos/${route.params.id}`)
  producto.value = res.data

  // obtener categoría relacionada
  const cat = await axios.get(`http://localhost:3001/categorias/${producto.value.categoriaId}`)
  categoria.value = cat.data
}

onMounted(cargar)
</script>

<template>
  <div v-if="producto">
    <h1>DETALLE PRODUCTO 🧾</h1>

    <p><strong>Nombre:</strong> {{ producto.nombre }}</p>
    <p><strong>Precio:</strong> ${{ producto.precio }}</p>
    <p><strong>Stock:</strong> {{ producto.stock }}</p>
    <p><strong>Categoría:</strong> {{ categoria?.nombre }}</p>
  </div>
</template>