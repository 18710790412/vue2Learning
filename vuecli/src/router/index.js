import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import News from '@/components/news'
import Home1 from '@/components/home1'
import First from '@/components/first'
import FirstSon1 from '@/components/firstSon1'
import FirstSon2 from '@/components/firstSon2'
import LeftRoute from '@/components/leftRoute'
import RightRoute from '@/components/rightRoute'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        home:Home,
        left: LeftRoute,
        right: RightRoute
      }
    },
    {
      path: '/goHome',
      redirect:'/'
    },
    {
      path: '/home1',
      name: 'home1',
      components: {
        home:Home1,
        left: RightRoute,
        right: LeftRoute,
      }
    },
    {
      path: '/news/:newsId/:newsTitle',
      component: News
    },
    {
      path: '/goNews/:newsId/:newsTitle',
      redirect: '/news/:newsId/:newsTitle'
    },
    {
      path: '/firstPage',
      component: First,
      children:[{
        path: '/firstPage',
        name: 'first',
        component: First,
      },
      {
        path: 'firstSon1',
        name: 'firstSon1',
        component: FirstSon1,
      },
      {
        path: 'firstSon2',
        name: 'firstSon2',
        component: FirstSon2,
      }],
      alias: '/hxx'
    },
    {
      path: '*',
      component: Error,
    },
  ]
})
