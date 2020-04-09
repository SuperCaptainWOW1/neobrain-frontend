import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Chat from '../views/Chat.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (store.state.loggedIn) {
      next();
    } else {
      router.push('/login');
    }
  } else {
    next();
  }
});

export default router;
