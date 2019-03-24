import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

// TODO : add categories
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    
    {
      path: '/',
      name: 'Main',
      component: App
    },
    {
      path: '/catId=:category',
      name: 'AnotherCat',
      component: App
    },
  ]
});

export default router;
