import Vue from 'vue';
import VueRouter from 'vue-router';
import Template from '@/components/template/Template.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/blossom-blue', component: Template }, 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
