<template>
        <v-main app >
            <v-row >
                <div class="pt-2 pl-5">
                    <p>ID#{{ $route.params.id }}</p>
                    <h3></h3>
                </div>
            </v-row>
            <br>
                    <AddItem style="max-height: 35px" />


        </v-main>
</template>

<style scoped>
</style>

<script>
import axios  from 'axios'
import AddItem from '../components/AddItem'

export default {
    name: 'ProjectView',

    components: {
        AddItem,
    },

    data(){
        return {
            newItems:[],
            activeItems:[],
            completedItems:[],
            allChildItems: [],
            

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
        axios.get("https://localhost:44382/BoardItem/searchByParentID/" + this.$route.params.id).then((response) => {
            console.log(response.data);
            this.allChildItems=response.data;
        })
        .catch(error => {
            console.log(error.response)
        })
    },

/*        getApiResult: function () {
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
        */
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