<script setup>
import { ref, onMounted } from 'vue'
import { getCategorias, createCategoria, deleteCategoria } from '../services/categorias'

const categorias = ref([])
const nombre = ref('')

const cargar = async () => {
  const res = await getCategorias()
  categorias.value = res.data
}

const guardar = async () => {
  await createCategoria({ nombre: nombre.value })
  nombre.value = ''
  cargar()
}

const eliminar = async (id) => {
  await deleteCategoria(id)
  cargar()
}

onMounted(cargar)
</script>

<template>
  <h2>Categorías</h2>

  <input v-model="nombre" placeholder="Nueva categoría" />
  <button class="btn btn-success" @click="guardar">Agregar</button>

  <ul>
    <li v-for="c in categorias" :key="c.id">
      {{ c.nombre }}
      <button class="btn btn-danger" @click="eliminar(c.id)">X</button>
    </li>
  </ul>
</template>