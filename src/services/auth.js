import axios from 'axios'

const API = 'http://localhost:3001'

// 🔹 REGISTRO
export const register = async (user) => {
  return await axios.post(`${API}/users`, user)
}

// 🔹 LOGIN (CORRECTO)
export const login = async (user) => {
  // Trae todos los usuarios
  const res = await axios.get(`${API}/users`)

  // Busca coincidencia manualmente
  const found = res.data.find(
    u =>
      u.email === user.email.trim() &&
      u.password === user.password.trim()
  )

  // Si existe → login OK
  if (found) {
    return {
      token: 'fake-token',
      user: found
    }
  }

  // Si no existe → error
  throw new Error('Credenciales incorrectas')
}