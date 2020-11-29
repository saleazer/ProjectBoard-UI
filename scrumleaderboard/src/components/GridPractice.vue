<template>
    <v-app>
        <v-system-bar app window ></v-system-bar>
        <v-main>
            <v-navigation-drawer app>
                <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
            </v-navigation-drawer>
        <v-container>
            <v-row>
                <v-col>
                    <h4 id="header">New</h4>
                </v-col>
                <v-col>
                    <h4 id="header">Active</h4>
                </v-col>
                <v-col>
                    <h4 id="header">Complete</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <br>
                        <div v-for="newItem in this.newItems" :key="newItem.ID">
                            <BoardItem v-bind:item="newItem"/>

                        </div>
                </v-col>
                <v-col>
                    <br>
                        <div v-for="activeItem in this.activeItems" :key="activeItem.ID">
                            <BoardItem v-bind:item="activeItem"/>
                        </div>
                </v-col>
                <v-col>
                    <br>
                        <div v-for="completedItem in this.completedItems" :key="completedItem.ID">
                            <BoardItem v-bind:item="completedItem"/>
                        </div>
                </v-col>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
</template>


<style scoped>
   .container {
         
    border: 1px solid green;
  }

    .row {
    border: 1px solid red;
     }
  
    .col {
    border: 1px solid blue;
    }
 
</style>


<script>
import BoardItem from './BoardItem'
import axios  from 'axios'

export default {
  name: 'GridPractice',
  components: {
    BoardItem,
    },
    
 data(){
    return {
        newItems:[],
        activeItems:[],
        completedItems:[],
        items: [
        { title: 'Board Items', icon: 'mdi-view-dashboard' },
        { title: 'Backlog', icon: 'mdi-image' },
        { title: 'Help', icon: 'mdi-help-box' },
      ],
    }
  },

 mounted(){
    this.getApiResult()
  },

  methods: {
    getApiResult: function () {
        axios.get("https://localhost:44382/BoardItem/searchByState/active").then((response) => {
            console.log(response.data);
            this.activeItems=response.data;
        })
         
        .catch(error => {
            console.log(error.response)
        })
        
        axios.get("https://localhost:44382/BoardItem/searchByState/complete").then((response) => {
            console.log(response.data);
            this.completedItems=response.data;
            
        })
        .catch(error => {
            console.log(error.response)
        });


        axios.get("https://localhost:44382/BoardItem/searchByState/New").then((response) => {
            console.log(response.data);
            this.newItems=response.data;
        })
        .catch(error => {
            console.log(error.response)
        });
    }
  }
}
</script>