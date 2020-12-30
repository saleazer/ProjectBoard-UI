<template>
    <v-app>
        <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <p id="header">New</p>
                </v-col>
                <v-col>
                    <p id="header">Active</p>
                </v-col>
                <v-col>
                    <p id="header">Complete</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div v-for="newItem in this.newItems" :key="newItem.ID">
                        <router-link :to="{path: 'edit/' + newItem.ID}">
                            <BoardItem v-bind:item="newItem"/>
                        </router-link>
                    </div>
                </v-col>
                <v-col>
                    <div v-for="activeItem in this.activeItems" :key="activeItem.ID">
                        <router-link :to="{path: 'edit/' + activeItem.ID}">
                            <BoardItem v-bind:item="activeItem"/>
                        </router-link>
                    </div>
                </v-col>
                <v-col>
                    <div v-for="completedItem in this.completedItems" :key="completedItem.ID">
                        <router-link :to="{path: 'edit/' + completedItem.ID}">
                            <BoardItem v-bind:item="completedItem"/>
                        </router-link>
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