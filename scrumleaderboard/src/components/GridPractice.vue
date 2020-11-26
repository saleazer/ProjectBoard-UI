<template>
        <v-container >
            <v-row>
                <v-col>
                    <h4>New</h4>
                </v-col>
                <v-col>
                    <h4>Current</h4>
                </v-col>
                <v-col>
                    <h4>Complete</h4>
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
                        <div v-for="currentItem in this.currentItems" :key="currentItem.ID">
                            <BoardItem v-bind:item="currentItem"/>
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
</template>

<style scoped>
   .container {
    border: 1px solid green;
  }
  /*
  .row {
    border: 1px solid red;
  }
  .col {
    border: 1px solid blue;
  } */
</style>


<script>
import BoardItem from './BoardItem'
import axios  from 'axios'

export default {
  name: 'GridPractice',
  components: {
    BoardItem
    },
    
 data(){
    return {
        newItems:[],
        currentItems:[],
        completedItems:[]
    }
  },

 mounted(){
    this.getApiResult()
  },

  methods: {
    getApiResult: function () {
        axios.get("https://localhost:44382/BoardItem/searchByState/current").then((response) => {
            console.log(response.data);
            this.currentItems=response.data;
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