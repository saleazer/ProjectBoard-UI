import Vue from 'vue'
import VueRouter from 'vue-router'
import GridPractice from '../components/GridPractice.vue'
import BackLog from '../components/BackLog.vue'
import EditItem from '../components/EditItem.vue'
import HelpPage from '../components/HelpPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GridPractice
  },

  {
    path: '/backlog',
    name: 'Back Log',
    component: BackLog
  },

  {
    path: '/edit/:id',
    name: 'Edit Item',
    component: EditItem,
    
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
