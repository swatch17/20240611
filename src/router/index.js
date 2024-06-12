import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router;
