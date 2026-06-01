import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
const routes = [
  {
    name: 'Signup',
    path: '/signup',
    component: Signup
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
   {
    name: 'Login',
    path: '/Login',
    component: Login
  },
  {
    name: 'Add',
    path: '/Add',
    component: Add
  },
{
  path: '/update/:id',
  name: 'Update',
  component: Update
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router