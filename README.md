# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
# 🛒 Sistema de Gestión de Productos (Vue.js)

## 📌 Descripción

Aplicación web desarrollada en Vue 3 para la gestión de productos, que permite realizar operaciones CRUD completas, autenticación de usuarios y filtrado dinámico.

---

## 🚀 Tecnologías utilizadas

* Vue 3 (Composition API)
* Vue Router
* Axios
* JSON Server (API simulada)
* SweetAlert2 (alertas modernas)
* CSS personalizado

---

## 🔐 Funcionalidades

### ✔ Autenticación

* Login de usuario
* Protección de rutas
* Logout

### ✔ Gestión de Productos (CRUD)

* Crear productos
* Listar productos
* Editar productos ✏️
* Eliminar productos ❌
* Ver detalle 👁️

### ✔ Categorías

* Relación producto-categoría
* Filtro por categoría

### ✔ Búsqueda

* Buscador en tiempo real

### ✔ Mejoras UX/UI

* Alertas con SweetAlert2
* Estados de carga (loading)
* Manejo de errores con try/catch
* Diseño tipo dashboard

---

## 📂 Estructura del proyecto

```
src/
 ├── views/
 ├── components/
 ├── services/
 ├── router/
 ├── assets/
```

---

## ⚙️ Instalación

```bash
npm install
npm run dev
```

---

## 🗄️ Backend (JSON Server)

```bash
npx json-server db.json --port 3001
```

---

## 🔐 Variables de entorno

Crear archivo `.env`:

```
VITE_API_URL=http://localhost:3001
```

---

## 📸 Capturas

* Login
* Dashboard
* Productos
* CRUD completo

---

## 👨‍💻 Autor

Proyecto desarrollado como sistema académico de gestión de productos utilizando Vue.js.

---

## 🎯 Estado del proyecto

✅ Funcional
✅ Completo
✅ Listo para presentación

---

## 🚀 Mejoras futuras

* Dashboard con estadísticas
* Modo oscuro
* Roles de usuario
* Backend real (Node / Laravel)
