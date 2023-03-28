import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dataset from '../views/Dataset.vue';
import Preprocessing from '../views/Preprocessing.vue';
import Model from '../views/Model.vue';
import Feature from '../views/Feature.vue';
import Arimax from '../views/Arimax.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dataset',
    name: 'Dataset',
    component: Dataset,
  },
  {
    path: '/preprocessing',
    name: 'Preprocessing',
    component: Preprocessing,
  },
  {
    path: '/model',
    name: 'Model',
    component: Model,
  },
  {
    path: '/feature',
    name: 'Feature',
    component: Feature,
  },
  {
    path: '/arimax',
    name: 'Arimax',
    component: Arimax,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
