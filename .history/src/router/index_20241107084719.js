import { createRouter, createWebHistory } from 'vue-router';
import Template from '@/components/blossom-blue/Template.vue'; // Pastikan path benar
import MinimaluxeGreen from '@/components/minimaluxe-green/Template.vue'; // Pastikan path benar

const routes = [
  // Tema Blossom
  { path: '/blossom-blue', component: Template },

  // Tema Minimalist
  { path: '/minimaluxe-green', component: MinimaluxeGreen },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan createWebHistory untuk Vue 3
  routes,
});

export default router;
