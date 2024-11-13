import { createRouter, createWebHistory } from 'vue-router';
import Template from '@/components/blossom-blue/Template.vue'; // Pastikan path benar

const routes = [
  { path: '/blossom-blue', component: Template },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan createWebHistory untuk Vue 3
  routes,
});

export default router;
