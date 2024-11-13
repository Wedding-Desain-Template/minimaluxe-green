import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/minimaluxe-green',
    component: () => import('/src/components/minimaluxe-green/Template.vue'),
  },
  {
    path: '/blossom-blue',
    component: () => import('/src/components/blossom-blue/Template.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
