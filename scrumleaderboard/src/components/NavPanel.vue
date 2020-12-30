<template>
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
</template>

<script>


export default {
  name: 'NavPanel',
  
  props: {
    
  },
  
  data(){
    return {
        items: [
            { title: 'Board Items', icon: 'mdi-view-dashboard', link: '/' },
            { title: 'Backlog', icon: 'mdi-image', link: '/backlog' },
            { title: 'Help', icon: 'mdi-help-box', link: '/help' },
        ],

    }
  },
}

</script>

