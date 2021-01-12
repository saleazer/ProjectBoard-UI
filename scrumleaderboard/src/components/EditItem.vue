<template>
    <v-main app>
        <div class="pa-2">
            <v-card class="py-6" elevation="6">
                <v-row>
                    <v-col cols="6">
                        <div>
                            <h6>Board Item #{{ $route.params.id }}</h6>
                            <v-text-field 
                                v-model="singleItem.Title"
                            ></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <h6><i>Owner</i></h6>
                        <input v-model="singleItem.OwnerName">
                    </v-col>
                    <v-col cols="2">
                        <div class="py-1">
                        <v-select
                            v-model="singleItem.Priority"
                            :items="itemPriority"
                            label="Priority"
                            outlined
                            dense
                        ></v-select>
                        </div>
                    </v-col>
                    <v-col cols="2">
                        <div class="py-1">                  
                        <v-select 
                            v-model="singleItem.State"
                            :items="itemState"
                            label="State"
                            outlined
                            dense
                        ></v-select>
                        </div>
                    </v-col>

                <v-col cols="3">
                    <div class="pb-2">    
                    </div>
                </v-col>
                </v-row>
<v-divider></v-divider>
                <v-row>     
                    <v-col cols="6">
                        <h6><i>Description</i></h6>
                        <div>
                        <v-text-field v-model="singleItem.Description"></v-text-field>
                        </div>
                    </v-col>
                </v-row>



                <br>
                <br>
                <br>
            </v-card>
        </div>
    <br>

        <div>
        <v-btn class="green" @click='saveBoardItem'>Save</v-btn>
        <v-btn class="red" @click='deleteBoardItem'>DELETE</v-btn>
    </div>
    </v-main>
</template>



<style scoped>

#textarea {
    min-width: 250px;
    min-height: 140px;
}


</style>


<script>
import axios from 'axios'

export default {
  name: 'EditItem',
  
  props: {
    item: {
      type: Object,
      default: null
      },
  },
  
   data(){
    return {
        singleItem: {
            ItemType: "",
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
    this.getApiResult()
  },

  methods: {
    getApiResult: function () {
        axios.get("https://localhost:44382/BoardItem/"+ this.$route.params.id).then((response) => {
            console.log(response.data);
            this.singleItem=response.data;
        })
        .catch(error => {
            console.log(error.response)
        })
    },

    displayTheItem: function () {
        console.log(this.singleItem)
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