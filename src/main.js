const Vue = require('nativescript-vue');
import App from './App';

import VueRouter from 'vue-router'

import PageOne from "./components/PageOne.vue"
import PageTwo from "./components/PageTwo.vue"

import apolloProvider from "./graphql-provider"

Vue.config.silent = false
PageOne.apolloProvider = apolloProvider

Vue.use(VueRouter)

const router = new VueRouter({
  pageRouting: true,
  routes: [{
      path: '/page-1',
      component: PageOne
    },
    {
      path: '/page-2',
      component: PageTwo
    },
    {
      path: '*',
      redirect: '/page-1'
    }
  ]
})
import './styles.scss';

router.replace('/page-1')
new Vue({
  router,
  apolloProvider,
}).$start();