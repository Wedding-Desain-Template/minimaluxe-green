import { createRouter, createWebHistory } from 'vue-router';
import BlossomBlue from '@/components/blossom-blue/Template.vue'; // Pastikan path benar
import MinimaluxeGreen from '@/components/minimaluxe-green/Template.vue'; // Pastikan path benar

const routes = [
  // Tema Blossom
  { path: '/blossom-blue', component: BlossomBlue },

  // Tema Minimalist
  { path: '/minimaluxe-green', component: MinimaluxeGreen },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan createWebHistory untuk Vue 3
  routes,
});

export default router;
