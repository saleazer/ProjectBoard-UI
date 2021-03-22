<template>
  <nav>
    <v-app-bar app color="teal lighten-4" dense>
        <v-row class="pl-2" justify="space-between" align="center">
                <v-icon large @click="drawer = !drawer" color="grey darken-3">mdi-view-dashboard</v-icon>

          <v-col>
            <h4>Project Board</h4><small>v1.0</small>
              <small></small>
          </v-col>
          <v-col offset-sm="6">
            <v-btn small outlined color="grey darken-4">
              <v-icon color="grey darken-4">mdi-login</v-icon>
              LOGIN
            </v-btn>
          </v-col>
        </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="#1c1c1c">

      <v-list dense>
        <v-list-item  v-for="item in items" :key="item.title" :to="item.link" link>
            <v-icon color="teal">{{item.icon}}</v-icon>
            <!-- TODO: find vuetify way to color v-list text white -->
            <v-list-item>
              <label style="color:#dedede">
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
      drawer: true,

      items: [
            { title: 'Project Home', icon: 'mdi-view-dashboard', link: '/' },
            { title: 'All Items', icon: 'mdi-view-dashboard', link: '/items' },
            { title: 'Backlog', icon: 'mdi-image', link: '/backlog' },
            { title: 'Help', icon: 'mdi-help-box', link: '/help' },       
      ]
    }
  },
}

</script>

