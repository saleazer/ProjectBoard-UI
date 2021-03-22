<template>
  <div id="app">
    <v-app>
        <v-row>
            <v-dialog v-model="dialog" persistent max-width="900px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="grey darken-1 white--text" dark v-bind="attrs" v-on="on">
                    New Project
                    </v-btn>
                </template>
            <v-card>
                <v-card-title>
                    <span >Create New Project</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="8" md="8">
                                <v-text-field v-model="newItem.Title" label="Project Title*" required color="secondary">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="4">
                                <v-text-field v-model="newItem.OwnerName" label="Project Owner" 
                                    hint="You vow to complete this with honor." required color="secondary">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea v-model="newItem.Description" label="Description" color="secondary">
                                </v-textarea>                    
                            </v-col>
                            <v-col cols="4">
                                <v-select v-model="newItem.Priority" :items="itemPriority" hint="Priority"
                                    persistent-hint single-line dense color="secondary">
                                </v-select>
                            </v-col>
                            <v-col cols="4">
                                <v-select v-model="newItem.Effort" :items="itemEffort" hint="Effort"
                                    persistent-hint single-line dense color="secondary">
                                </v-select>
                            </v-col>
                            <v-col cols="4">
                                <v-select v-model="newItem.State" :items="itemState" hint="State"
                                    persistent-hint single-line dense color="secondary">
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small color="secondary">*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal lighten-2 white--text" outlined @click="close">
                    Close
                    </v-btn>
                    <v-btn color="teal lighten-2 white--text" outlined @click='saveBoardItem'>
                    Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-row>
    </v-app>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'AddItem',
  
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
                ItemType: "Project",
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
    methods: {
        saveBoardItem: function () {
            axios.put("https://localhost:44382/BoardItem", this.newItem) 
            .then((response) => {
                console.log(response.data);
                this.$emit("board-update");
                this.close();
                
            })
            .catch(error => {
                console.log(error.response)
            })
        },
        close: function() {
            this.dialog = false;
            this.newItem = {
                ID: 0,
                ItemType: "Project",
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
            }
        },
  }
}
</script>

<style scoped>

</style>