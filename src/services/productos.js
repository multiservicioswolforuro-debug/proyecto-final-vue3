import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

// 🔹 GET
export const getProductos = () => axios.get(`${API}/productos`)

// 🔹 GET por ID
export const getProductoById = (id) => axios.get(`${API}/productos/${id}`)

// 🔹 POST
export const createProducto = (data) => axios.post(`${API}/productos`, data)

// 🔹 PUT
export const updateProducto = (id, data) => axios.put(`${API}/productos/${id}`, data)

// 🔹 DELETE
export const deleteProducto = (id) => axios.delete(`${API}/productos/${id}`)