import Vue from 'vue'
import VueRouter from 'vue-router'
import GridView from '../views/GridView.vue'
import BackLog from '../views/BackLog.vue'
import HelpPage from '../views/HelpPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GridView
  },

  {
    path: '/backlog',
    name: 'Back Log',
    component: BackLog
  },

  
  {
    path: '/help',
    name: 'Help Page',
    component: HelpPage,
    
  }

]

const router = new VueRouter({
  routes
})

export default router
