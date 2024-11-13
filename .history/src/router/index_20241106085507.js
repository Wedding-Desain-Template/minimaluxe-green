import Vue from 'vue';
import VueRouter from 'vue-router';
import Template from '@/components/template/Template.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/template', component: Template }, // Hanya ada satu route
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
