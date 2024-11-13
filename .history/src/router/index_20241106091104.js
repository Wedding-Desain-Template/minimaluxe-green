import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Template from '@/components/blossom-blue/Template.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/blossom-blue', component: Template }, 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
