import { createRouter, createWebHistory } from 'vue-router';
import DesainMinimaluxe from '../components/minimaluxe-one/Template.vue';
import DesainBlossomBlue from '../components/blossom-blue/Template.vue';

const routes = [
  {
    path: '/minimaluxe-one',
    component: DesainMinimaluxe,
    beforeEnter: (to, from, next) => {
      // Muat CSS khusus untuk desain minimaluxe
      import('/src/assets/minimaluxe-one/style.css');
      import('/src/assets/minimaluxe-one/custom.js');
      next();
    }
  },
  {
    path: '/blossom-blue',
    component: DesainBlossomBlue,
    beforeEnter: (to, from, next) => {
      // Muat CSS khusus untuk desain blossom-blue
      import('/src/assets/blossom-blue/style.css');
      import('/src/assets/blossom-blue/custom.js');
      next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
