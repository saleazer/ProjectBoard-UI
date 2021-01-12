<template>
    <v-main app>
        <div id="item-name">
            <h6>Board Item #{{ newItem.ID }}</h6>
            <h2><input v-model="newItem.Title"></h2>
        </div>
        <br>
        <div>
            <h6><i>Description</i></h6>
            <textarea v-model="newItem.Description"></textarea>
        </div>
        <br>
        <div>
            <v-row>
            <v-col cols="2">
            <label>Priority</label>
            <v-select
                v-model="newItem.Priority"
                :items="itemPriority"
                label="Select"
                single-line
            ></v-select>
        <br>
            <label>State</label>
            <v-select 
                v-model="newItem.State"
                :items="itemState"
                single-line
            ></v-select>
            </v-col>
            </v-row>
        </div>
        <div>
            <h5><i>Owner</i></h5>          
            <p><input v-model="newItem.OwnerName"></p>
        </div>
        <br>
        <br>
        <div>
            <h5><i>Parent ID</i></h5>          
            <p><input v-model="newItem.ParentID"></p>
        </div>
        <br>
        <div>
            <v-btn class="green" @click='saveBoardItem'>Save</v-btn>
        </div>
    </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewItem',
  
  props: {
    item: {
      type: Object,
      default: null
      }
  },
  
   data(){
    return {
        newItem: {
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
        ]
    }
  },

 mounted(){

    },

  methods: {
     
    saveBoardItem: function () {
        axios.put("https://localhost:44382/BoardItem", this.newItem) 
        .then((response) => {
            console.log(response.data);
            console.log(this.newItem);
        })
        .catch(error => {
            console.log(error.response)
        })
    },
  }
}

</script>

<style scoped>

#item-name {
    background-color: cadetblue;
}




</style>