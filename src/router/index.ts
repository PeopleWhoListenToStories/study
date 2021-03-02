import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/canvas',
    name: 'Home',
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/Home.vue'),
    children: [
      {
        path: '/home/one',
        name: 'One',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/one/JsonEditer.vue'),
      },
      {
        path: '/home/one2',
        name: 'One2',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/one/Count.vue'),
      },
      {
        path: '/home/one3',
        name: 'One3',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/one/Drag.vue'),
      },
      {
        path: '/home/one4',
        name: 'One4',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/one/Drags.vue'),
      },
      {
        path: '/home/one5',
        name: 'One5',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/one/RecursionItem.vue'),
      },
      {
        path: '/home/two',
        name: 'Two',
        component: () => import(/* webpackChunkName: 'about' */ '../views/home/two/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/canvas',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index.vue'),
  },
  {
    path: '/canvas1',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index1.vue'),
  },
  {
    path: '/canvas2',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index2.vue'),
  },
  {
    path: '/canvas3',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index3.vue'),
  },
  {
    path: '/canvas4',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index4.vue'),
  },
  {
    path: '/canvas5',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index5.vue'),
  },
  {
    path: '/canvas6',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/canvas/index6.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
