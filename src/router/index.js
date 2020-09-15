import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import me from '../views/me.vue'
import news from '../views/news.vue'
import weather from '../views/weather.vue'
import report from '../views/report.vue'
import video from '../views/video.vue'
import audio from '../views/audio.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/me', 
    name: 'me',
    component: me
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news/:id',
    name: 'news',
    component: news
  },
  {
    path: '/news/:id',
    name: 'news',
    component: news
  },
  {
    path: '/report',
    name: 'report',
    component: report,
    children: [{
      path: 'video',
      component: video
    },{
      path: 'audio',
      component: audio
    }]
  },
  {
    path: '/weather/:id',
    name: 'weather',
    component: weather
  }
]

const router = new VueRouter({
  routes
})

export default router
