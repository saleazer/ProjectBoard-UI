<template>
  <div id="app">
     <GridPractice></GridPractice><br>
  </div>
</template>

<script>
import GridPractice from './components/GridPractice'



export default {
  name: 'App',
  components: {
    GridPractice,
    
  }
}
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: rgb(39, 39, 39);
  margin-top: 15px;
 
}

#header {
  text-align: center;
  text-decoration: underline;
}


</style>
