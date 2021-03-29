import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import find from '@/components/find'
import contact from '@/components/contact'
import my from '@/components/my'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
