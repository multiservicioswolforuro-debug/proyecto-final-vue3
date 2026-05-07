import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import PublicLayout from '../layouts/PublicLayout.vue'
import PrivateLayout from '../layouts/PrivateLayout.vue'

// Views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Productos from '../views/Productos.vue'
import Categorias from '../views/Categorias.vue'
import CreateProducto from '../views/CreateProducto.vue'
import EditProducto from '../views/EditProducto.vue'
import ProductoDetalle from '../views/ProductoDetalle.vue'

const routes = [

  // 🔓 LOGIN
  {
    path: '/login',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Login
      }
    ]
  },

  // 🔓 REGISTER
  {
    path: '/register',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Register
      }
    ]
  },

  // 🔐 PRIVADO
  {
    path: '/',
    component: PrivateLayout,
    meta: { requiresAuth: true },

    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'productos',
        component: Productos
      },
      {
        path: 'categorias',
        component: Categorias
      },
      {
        path: 'productos/create',
        component: CreateProducto
      },
      {
        path: 'productos/edit/:id',
        component: EditProducto
      },
      {
        path: 'producto/:id',
        component: ProductoDetalle
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 GUARD
router.beforeEach((to) => {

  const token = localStorage.getItem('token')

  // 🔒 PROTEGER PRIVADAS
  if (to.meta.requiresAuth && !token) {
    return '/login'
  }

  // 🚫 SI YA ESTÁ LOGUEADO
  if (
    (to.path === '/login' || to.path === '/register')
    && token
  ) {
    return '/'
  }

})

export default router