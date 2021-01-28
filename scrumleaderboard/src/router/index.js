import Vue from 'vue'
import VueRouter from 'vue-router'
import GridView from '../views/GridView.vue'
import BackLog from '../views/BackLog.vue'
import HelpPage from '../views/HelpPage.vue'
import ProjectBoard from '../views/ProjectBoard.vue'
import ProjectView from '../views/ProjectView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProjectBoard
  },
  {
    path: '/items',
    name: 'Item Home',
    component: GridView,
    
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
    
  },

  {
  path: '/projects/:id',
  name: 'Project View',
  component: ProjectView,
  }

  

]

const router = new VueRouter({
  routes
})

export default router
