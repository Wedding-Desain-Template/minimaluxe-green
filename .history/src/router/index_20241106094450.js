import { createRouter, createWebHistory } from 'vue-router'; // Perbaiki impor untuk Vue 3
import BlossomBlue from '@/components/blossom-blue/Template.vue';
import MinimaluxeOne from '@/components/minimaluxe-one/Template.vue';

const routes = [
  { path: '/blossom-blue', component: BlossomBlue },
//   { path: '/minimaluxe-one', component: MinimaluxeOne },
];

const router = createRouter({
  history: createWebHistory(), // Menggunakan createWebHistory untuk Vue 3
  routes,
});

export default router;
