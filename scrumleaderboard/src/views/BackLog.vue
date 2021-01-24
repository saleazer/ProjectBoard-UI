<template>
    <v-app>
        <v-main>
        <v-container>
            <v-row>
                <v-col>
                    <div>
                        <h4 id="header">All Board Items</h4>
                    </div>
                        <br>
                            <div class="spacingTest" v-for="allItem in this.allItems" :key="allItem.ID">
                                <BoardItem @board-update="getApiResult" v-bind:item="allItem"/>
                            </div>
                </v-col>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
</template>


<style scoped>

/*  TODO: Rename styles    */
.spacingTest {
    min-height: 100px;
    padding-right: 20px
}

</style>


<script>
import BoardItem from '../components/BoardItem'
import axios  from 'axios'

export default {
  name: 'BackLog',
  components: {
    BoardItem,
    },
    
 data(){
    return {
        allItems:[],
    }
  },

 mounted(){
    this.getApiResult()
  },

  methods: {
    getApiResult: function () {
        axios.get("https://localhost:44382/BoardItem/all").then((response) => {
            console.log(response.data);
            this.allItems=response.data;
        })
        .catch(error => {
            console.log(error.response)
        });


    }
  }
}
</script>