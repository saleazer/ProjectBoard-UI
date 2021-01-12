import Vue from 'vue'
import VueRouter from 'vue-router'
import GridView from '../components/GridView.vue'
import BackLog from '../components/BackLog.vue'
import EditItem from '../components/EditItem.vue'
import HelpPage from '../components/HelpPage.vue'
import newItem from '../components/NewItem.vue'

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
    path: '/edit/:id',
    name: 'Edit Item',
    component: EditItem,
    
  },
  {
    path: '/new',
    name: 'New Item',
    component: newItem,
    
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
