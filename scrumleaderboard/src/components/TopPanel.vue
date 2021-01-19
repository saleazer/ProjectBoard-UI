<template>
  <nav>
    <v-system-bar app height="50" color="teal lighten-2 white--text">
      <v-icon large outlined dark  @click="drawer = !drawer" >mdi-view-dashboard</v-icon>
        <v-row class="pl-2" justify="space-between">
          <v-col>
            <h2>SLeaderboard</h2>
            <small>v1.0</small>
          </v-col>
          <v-col >
            <v-btn small outlined color="white">
              <v-icon color="white">mdi-login</v-icon>
              LOGIN
            </v-btn>
          </v-col>
        </v-row>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app color="teal lighten-1">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
            <v-icon color="white">{{item.icon}}</v-icon>
            <!-- TODO: find vuetify way to color v-list text white -->
            <v-list-item>
              <label style="color:white">
              {{item.title}}
              </label>
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
      drawer: false,

      items: [
            { title: 'Board Items', icon: 'mdi-view-dashboard', link: '/' },
            { title: 'Backlog', icon: 'mdi-image', link: '/backlog' },
            { title: 'Help', icon: 'mdi-help-box', link: '/help' },       
      ]
    }
  },
}

</script>

