<template>
        <v-main app >
            <v-row >
                <v-col>
                    <div>
                    <p id="header">New</p>
                    </div>
            <draggable v-model="newItems" :options="{group:'new'}" @change="addNew" style="min-height: 10px">                    
                    <div id="spacingTest" v-for="newItem in this.newItems" :key="newItem.ID">
                            <BoardItem @board-update="getApiResult" v-bind:item="newItem"/>                       

                    </div>
            </draggable>                    
                    <br>
                    <AddItem @board-update="getApiResult"/>

                    <div>
                      <v-btn outlined color="teal" :to="{path: 'new/'}">New Item</v-btn>
                    </div>
                </v-col>
                <v-col>
                    <p id="header">Active</p>
            <draggable v-model="activeItems" :options="{group:'new'}" @change="addActive" style="min-height: 10px">                    

                    <div id="spacingTest" v-for="activeItem in this.activeItems" :key="activeItem.ID">
                            <BoardItem @board-update="getApiResult" v-bind:item="activeItem"/>
                    </div>
            </draggable>                    

                </v-col>
                <v-col>
                    <p id="header">Complete</p>
            <draggable v-model="completedItems" :options="{group:'new'}" @change="addCompleted" style="min-height: 10px">                    

                    <div id="spacingTest" v-for="completedItem in this.completedItems" :key="completedItem.ID">
                            <BoardItem @board-update="getApiResult" v-bind:item="completedItem"/>
                    </div>
            </draggable>                    

                </v-col>
            </v-row>
        </v-main>
</template>

<style scoped>
</style>

<script>
import axios  from 'axios'
import draggable from 'vuedraggable'
import BoardItem from '../components/BoardItem'
import AddItem from '../components/AddItem'

export default {
    name: 'GridView',

    components: {
        BoardItem,
        AddItem,
        draggable
    },

    data(){
        return {
            newItems:[],
            activeItems:[],
            completedItems:[],
            

            itemPriority: [
                "Low",
                "Normal",
                "High"
            ],
            itemState: [
                "New",
                "Active",
                "Complete"
            ],
            itemEffort: [               
                "1","2","3","4","5","6","7","8","9","10",
            ],
            componentKey: 0,
            
            dialog: false,
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
        },

        itemMoved: function (evt, state){
             if (evt.added != undefined){
                evt.added.element.State = state;
                this.saveBoardItem(evt.added.element);
            }
        },
        addNew: function (evt) {
            this.itemMoved(evt, "New");
        },
        addActive: function (evt) {
            this.itemMoved(evt, "Active");
        },
        addCompleted: function (evt) {
            this.itemMoved(evt, "Complete");
        },
        saveBoardItem: function (item) {
            axios.put("https://localhost:44382/BoardItem", item) 
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response)
            })
        },


    }
}
</script>