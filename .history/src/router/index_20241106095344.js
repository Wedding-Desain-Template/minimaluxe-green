import { createRouter, createWebHistory } from 'vue-router';
import MinimaluxeOne from '../components/minimaluxe-one/Template.vue';
import BlossomBlue from '../components/blossom-blue/Template.vue';

const routes = [
  {
    path: '/minimaluxe-one',
    component: MinimaluxeOne,
    beforeEnter: (to, from, next) => {
      // Muat CSS khusus untuk desain minimaluxe
    //   import('/src/assets/minimaluxe-one/style.css');
    //   import('/src/assets/minimaluxe-one/custom.js');
      next();
    }
  },
  {
    path: '/blossom-blue',
    component: BlossomBlue,
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
