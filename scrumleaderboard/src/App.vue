<template>
<v-app>
  <div id="app">
    <nav><TopPanel/></nav>
    <nav><NavPanel></NavPanel></nav>
    <router-view></router-view><br>
  </div>
</v-app>
</template>

<script>
import TopPanel from './components/TopPanel'
import NavPanel from './components/NavPanel'

export default {
  name: 'App',
  components: {
    TopPanel,
    NavPanel
  },

 data(){
    return {
        newItems:[],
        activeItems:[],
        completedItems:[],
    }
  },
}
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
}




</style>
