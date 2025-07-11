import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import('@/views/Protected.vue'),
    meta:{
        requiresAuth: true,
    }
  },
  {
    path:'/login',
    name: 'login',
    component: ()=> import('@/views/Login.vue')
  },
  {
    path:'/invoices',
    name: 'invoices',
    component: ()=> import('@/views/Invoices.vue'),
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exists) {
        return {
          name: 'Not Found',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        }
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('@/views/NotFound.vue')
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes ,
    linkActiveClass: 'vue-countries-active-link',
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || new Promise((resolve)=>{
            setTimeout(()=> resolve({top:0, behavior: 'smooth'}), 300)
        })
    }
})
router.beforeEach((to)=>{
    if(to.meta.requiresAuth && !window.user){
        return {name: 'login', query:{redirect: to.fullPath}}
    }
})
export default router