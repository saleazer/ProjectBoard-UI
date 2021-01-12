<template>
  <nav>
    <v-system-bar app height="50" color="teal lighten-2 white--text">
      <v-icon large outlined dark  @click="drawer = !drawer" >mdi-view-dashboard</v-icon>
      <v-toolbar-title>
        <span>Project Title</span>
          <br>
        <h6>v1.0</h6>
      </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined color="white">
          <v-icon large color="white">mdi-login</v-icon>
          LOGIN
        </v-btn>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app color="teal lighten-1">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
            <v-icon>{{item.icon}}</v-icon>
            <v-list-item class="white--text">
              {{item.title}}
            </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script> 


export default {
  name: 'TopPanel',
  
  props: {
    
  },
  
  data(){
    return {
      drawer: true,

      items: [
            { title: 'Board Items', icon: 'mdi-view-dashboard', link: '/' },
            { title: 'Backlog', icon: 'mdi-image', link: '/backlog' },
            { title: 'Help', icon: 'mdi-help-box', link: '/help' },       
      ]
    }
  },
}

</script>

