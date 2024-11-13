import { createRouter, createWebHistory } from 'vue-router'; // Perbaiki impor untuk Vue 3
import Template from '@/components/blossom-blue/Template.vue';

const routes = [
  { path: '/blossom-blue', component: Template },
  { path: '/blossom-blue', component: Template },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan createWebHistory untuk Vue 3
  routes,
});

export default router;
