<template>
    <v-main>
        <v-container fluid class="outlined">
            <v-row dense max-height="80px">
                <v-col cols="3">
                    <h4>{{this.currentProject.ID}}- {{ this.currentProject.Name }}</h4>
                </v-col>
                <v-col>
                    <AddItem @board-update="getApiResult"/>
                </v-col>    
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <br>
        
            <v-row>
                <v-col>
                    <div>
                        <p id="header">New</p>
                    </div>
                <draggable v-model="newItems" :options="{group:'new'}" @change="addNew" style="min-height: 10px">                    
                    <div v-for="newItem in this.newItems" :key="newItem.ID">
                        <BoardItem @board-update="getApiResult" v-bind:item="newItem"/>                       
                    </div>
                </draggable>                    
                    <br>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p id="header">Active</p>
            <draggable v-model="activeItems" :options="{group:'new'}" @change="addActive" style="min-height: 10px">                    
                    <div id="spacingTest" v-for="activeItem in this.activeItems" :key="activeItem.ID">
                            <BoardItem @board-update="getApiResult" v-bind:item="activeItem"/>
                    </div>
            </draggable>                    
                </v-col>
            </v-row>
            <v-row>
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

<style >

.outlined {
    border: 10px green;
}
</style>

<script>
import axios  from 'axios'
import draggable from 'vuedraggable'
import BoardItem from '../components/BoardItem'
import AddItem from '../components/AddItem'


export default {
    name: 'ProjectView',

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
            allChildItems:[],
            currentProject:[],
            componentKey: 0,
            dialog: false,
        }
    },

    mounted(){
        this.getApiResult()

    },

    methods: {
        getApiResult: function () {
            axios.get("https://localhost:44374/BoardItem/searchByParentID/" + this.$route.params.id).then((response) => {
              //  console.log(response.data);
                this.allChildItems=response.data;
            })
            .catch(error => {
                console.log(error.response)
            });
            axios.get("https://localhost:44374/Project/" + this.$route.params.id).then((response) => {
             //   console.log(response.data);
                this.currentProject=response.data;
            })
            .catch(error => {
                console.log(error.response)
            });
            this.sortItems(this.allChildItems);

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
            axios.put("https://localhost:44374/BoardItem", item) 
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