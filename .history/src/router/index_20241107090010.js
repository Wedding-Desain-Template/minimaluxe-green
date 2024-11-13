import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/minimaluxe-green',
    component: () => import('../blossom-blue/Template.vue'),
  },
  {
    path: '/blossom-blue',
    component: () => import('../minimaluxe-green/Template.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
