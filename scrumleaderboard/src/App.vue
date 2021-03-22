<template>
<v-app>
  <div id="app">
    <nav><TopPanel/></nav>
    <div class="ml-2">
      
      <div>
    <router-view></router-view>
      </div>
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
    }
  },
}
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fafafa;
}

 .routerLink {
     text-decoration: none;
 }

#spacingTest {
    min-height: 100px;
    padding-right: 20px
}


</style>
