<template>
<v-app>
  <div id="app">
    <nav><TopPanel/></nav>
    <div class="ml-2">
    <router-view></router-view>
    </div>
  </div>
</v-app>
</template>

<script>
import TopPanel from './components/TopPanel'

export default {
  name: 'App',
  components: {
    TopPanel,
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

 .routerLink {
     text-decoration: none;
 }

#spacingTest {
    min-height: 100px;
    padding-right: 20px
}


</style>
