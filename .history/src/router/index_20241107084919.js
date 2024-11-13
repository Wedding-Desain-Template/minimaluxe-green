import { createRouter, createWebHistory } from 'vue-router';
// import BlossomBlue from '@/components/blossom-blue/Template.vue'; 
import MinimaluxeGreen from '@/components/minimaluxe-green/Template.vue'; 

const routes = [
  // Tema Blossom
  { path: '/blossom-blue', component: BlossomBlue },

  // Tema Minimalist
  { path: '/minimaluxe-green', component: MinimaluxeGreen },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
