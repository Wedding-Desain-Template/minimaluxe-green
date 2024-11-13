import { createRouter, createWebHistory } from 'vue-router';
import BlossomBlue from '@/components/blossom-blue/Template.vue';
import MinimaluxeGreen from '@/components/minimaluxe-green/Template.vue';

const routes = [
  {
    path: '/blossom-blue',
    component: BlossomBlue,
    beforeEnter: () => {
      // Tambahkan CSS untuk Blossom Blue
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/assets/blossom-blue/style.css';
      link.className = 'blossom-blue-css';
      document.head.appendChild(link);
    },
    beforeLeave: () => {
      // Hapus CSS Blossom Blue
      const link = document.querySelector('.blossom-blue-css');
      if (link) link.remove();
    },
  },
  {
    path: '/minimaluxe-green',
    component: MinimaluxeGreen,
    beforeEnter: () => {
      // Tambahkan CSS untuk Minimaluxe Green
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/src/assets/minimaluxe-green/style.css';
      link.className = 'minimaluxe-green-css';
      document.head.appendChild(link);
    },
    beforeLeave: () => {
      // Hapus CSS Minimaluxe Green
      const link = document.querySelector('.minimaluxe-green-css');
      if (link) link.remove();
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
