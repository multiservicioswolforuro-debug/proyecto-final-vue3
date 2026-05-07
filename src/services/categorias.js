import axios from 'axios'
const API = import.meta.env.VITE_API_URL

export const getCategorias = () => axios.get(`${API}/categorias`)
export const createCategoria = (data) => axios.post(`${API}/categorias`, data)
export const deleteCategoria = (id) => axios.delete(`${API}/categorias/${id}`)