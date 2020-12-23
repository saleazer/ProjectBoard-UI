<template>
  <div id="app">
            <v-system-bar app window ></v-system-bar>

            <v-navigation-drawer app>
                <v-list nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
            </v-navigation-drawer>
     <router-view></router-view><br>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
    
  },

 data(){
    return {
        newItems:[],
        activeItems:[],
        completedItems:[],
        items: [
        { title: 'Board Items', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Backlog', icon: 'mdi-image', link: '/backlog' },
        { title: 'Help', icon: 'mdi-help-box', link: '/' },
      ],
    }
  },
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
