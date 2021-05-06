import Router from 'vue-router'
import Vue from 'vue'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Concerts from '@/views/Concerts'
import Artistes from '@/views/Artistes'
import Artiste from '@/views/Artiste'
import Admin from '@/views/Admin'

import auth from '@/api/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [

    // Front Office

    {
      component: Main,
      path: '/',
    },
    {
      component: Login,
      path: '/login',
    },
    {
      component: Register,
      path: '/register',
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
      component: Artiste,
      path: '/artiste/:id',
    },

    // Back Office

    {
      component: Admin,
      path: '/admin',
      meta: {
        auth: true,
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    try {
      const res = await auth.get(`/users/${localStorage.getItem('vuejs_user_id')}`)
      
      if (res.data.role === 'admin') {
        return next()
      } else {
        return next('/login')
      }
    } catch (e) {
      localStorage.removeItem('vuejs_user_id')
      localStorage.removeItem('vuejs_token')
      
      return next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        }
      })
    }
  } else {
    return next()
  }
})

export default router
