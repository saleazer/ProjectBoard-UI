<template>
        <v-main app >
            <v-row>
                <v-col>
                    <div>
                    <p id="header">New</p>
                    </div>
                    <div id="spacingTest" v-for="newItem in this.newItems" :key="newItem.ID">
                            <BoardItem v-bind:item="newItem"/>                       

                    </div>
                    <AddItem/>
                    <br>
                    <div>
                      <v-btn outlined color="teal" :to="{path: 'new/'}">New Item</v-btn>
                    </div>
                </v-col>
                <v-col>
                    <p id="header">Active</p>

                    <div id="spacingTest" v-for="activeItem in this.activeItems" :key="activeItem.ID">
                            <BoardItem v-bind:item="activeItem"
                            
                            
                            />
                    </div>
                </v-col>
                <v-col>
                    <p id="header">Complete</p>

                    <div id="spacingTest" v-for="completedItem in this.completedItems" :key="completedItem.ID">
                            <BoardItem v-bind:item="completedItem"/>
                    </div>
                </v-col>
            </v-row>
        </v-main>
</template>

<style scoped>
</style>

<script>
import axios  from 'axios'
import BoardItem from '../components/BoardItem'
import AddItem from '../components/AddItem'

export default {
    name: 'GridView',

    components: {
        BoardItem,
        AddItem
    },

    data(){
        return {
            newItems:[],
            activeItems:[],
            completedItems:[],
            currentItem: {
                ID: 0,
                ItemType: "Task",
                Title: "",
                Description: "",
                State: "",
                Priority: "",
                Effort: "0",
                CreateDate: Date,
                LastUpdated: Date,
                Iteration: 0,
                OwnerName: "",
                ParentID: ""
            },
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

        saveBoardItem: function () {
            axios.put("https://localhost:44382/BoardItem", this.singleItem) 
            .then((response) => {
                console.log(response.data);
                console.log(this.singleItem);
            })
            .catch(error => {
                console.log(error.response)
            })
        },

        deleteBoardItem: function () {
            axios.delete("https://localhost:44382/BoardItem/"+ this.singleItem.ID) 
            .then((response) => {
                console.log(response.data);
                console.log(this.singleItem);
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
}
</script>