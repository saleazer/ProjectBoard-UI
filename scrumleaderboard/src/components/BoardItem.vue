<template>
  <div app v-if="item != null">
    <v-dialog v-model="dialog" persistent max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-card :class="`cardSizing item ${item.Priority}`" elevation="5"  v-bind="attrs" v-on="on">
          <v-row wrap>
            <v-col>
              <v-card-text class="titleSpacing">{{item.Title}}</v-card-text>
            </v-col>
            <v-col>
              <div class="right">
                <v-card-text class="titleSpacing">Owner:</v-card-text>
                <v-card-text class="titleSpacing">{{item.OwnerName}}</v-card-text>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </template>
      <v-card>
        <v-card-title>
            <span class="headline">Add New Item</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8" md="8">
                  <v-text-field v-model="item.Title" label="Item Title*" required color="secondary">
                  </v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                  <v-text-field v-model="item.OwnerName" label="Item Owner" 
                    hint="You vow to complete this with honor." required color="secondary">
                  </v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-textarea v-model="item.Description" label="Description" color="secondary">
                  </v-textarea>                    
              </v-col>
              <v-col cols="4">
                  <v-select v-model="item.Priority" :items="itemPriority" hint="Item Priority"
                    persistent-hint single-line dense color="secondary">
                  </v-select>
              </v-col>
              <v-col cols="4">
                  <v-select v-model="item.Effort" :items="itemEffort" hint="Item Effort"
                    persistent-hint single-line dense color="secondary">
                  </v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="item.State" :items="itemState" hint="Item State"
                    persistent-hint single-line dense color="secondary">
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <small color="secondary">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click='deleteBoardItem'>DELETE</v-btn>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BoardItem',
  props: {
    item: {
      type: Object,
      default: null
      }
  },

  data(){
    return {
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
      axios.put("https://localhost:44382/BoardItem", this.item) 
        .then((response) => {
          console.log(response.data);
          console.log(this.item);
          this.close();
          window.location.reload();
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    deleteBoardItem: function () {
      axios.delete("https://localhost:44382/BoardItem/"+ this.item.ID) 
      .then((response) => {
        console.log(response.data);
        console.log(this.item);
        this.close();
        window.location.reload();


      })
      .catch(error => {
        console.log(error.response)
      })
    },

    close: function() {
      this.dialog = false;
    },



  }









}
</script>
<style>
.item.Low {
  border-left: 4px solid blue;
}
.item.Normal {
  border-left: 4px solid green;
}
.item.High {
  border-left: 4px solid red;
}
.titleSpacing {
  padding: 0px;
  margin-left: 16px;
}

.cardSizing {
  min-height: 60px;
}


</style>