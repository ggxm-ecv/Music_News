import Router from 'vue-router'
import Vue from 'vue'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Concerts from '@/views/Concerts'
import Artistes from '@/views/Artistes'
import Groupes from '@/views/Groupes'

import auth from '@/api/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: Main,
      path: '/',
      meta: {
        auth: true,
      }
    },
    {
      component: Login,
      path: '/login',
    },
    {
      component: Concerts,
      path: '/concerts',
    },
    {
      component: Artistes,
      path: '/artistes',
    },
    {
      component: Groupes,
      path: '/groupes',
    },
    {
      component: Register,
      path: '/register',
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    try {
      await auth.get(`/users/${localStorage.getItem('vuejs_user_id')}`)
      return next()
    } catch (e) {
      localStorage.removeItem('vuejs_user_id')
      localStorage.removeItem('vuejs_token')
      return next('/login')
    }
  } else {
    return next()
  }
})

export default router
