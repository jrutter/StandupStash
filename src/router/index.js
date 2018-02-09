import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Callback from '@/components/Callback'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import Team from '@/components/Team'

Vue.use(Router)

export const routesArray = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: 'active'
    },
    {
      path: '/add',
      name: 'Add Stash',
      component: Add,
      meta: 'active'
    },
    {
      path: '/setup',
      name: 'Team',
      component: Team,
      meta: 'active'
    },
    {
      path: '/log/:id',
      name: 'My Stash',
      component: List,
      meta: 'active'
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: 'active'
    },
    {
      path: '/features',
      name: 'Features',
      component: Features,
      meta: 'active'
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
      meta: 'inactive'
    },
    {
      path: '/profile',
      name: 'My Profile',
      component: Profile,
      meta: 'active'
    }
  ]
}
export default new Router(routesArray)
