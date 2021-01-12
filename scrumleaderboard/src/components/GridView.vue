<template>
        <v-main app>
            <v-row>
                <v-col>
                    <div>
                    <p id="header">New</p>
                    </div>
                    <div id="spacingTest" v-for="newItem in this.newItems" :key="newItem.ID">
                        <router-link class="routerLink" :to="{path: 'edit/' + newItem.ID}">
                            <BoardItem v-bind:item="newItem"/>                       
                        </router-link>
                    </div>
                    <br>
                    <div>
                      <v-btn outlined color="teal" :to="{path: 'new/'}">New Item</v-btn>
                    </div>
                </v-col>
                <v-col>
                    <p id="header">Active</p>

                    <div id="spacingTest" v-for="activeItem in this.activeItems" :key="activeItem.ID">
                        <router-link class="routerLink" :to="{path: 'edit/' + activeItem.ID}">
                            <BoardItem v-bind:item="activeItem"/>
                        </router-link>
                    </div>
                </v-col>
                <v-col>
                    <p id="header">Complete</p>

                    <div id="spacingTest" v-for="completedItem in this.completedItems" :key="completedItem.ID">
                        <router-link class="routerLink" :to="{path: 'edit/' + completedItem.ID}">
                            <BoardItem v-bind:item="completedItem"/>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </v-main>
</template>
<style scoped>






</style>

<script>
import axios  from 'axios'
import BoardItem from './BoardItem'


export default {
  name: 'GridView',
  components: {
      BoardItem
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