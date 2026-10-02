import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MemberData from '../views/MemberData.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/register',
    name: 'member-data',
    component: MemberData
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router