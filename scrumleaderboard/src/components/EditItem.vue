<template>
    <v-main app>
        <div>
            <p>#{{ $route.params.id }}</p>
            <h1><input v-model="singleItem.Title"></h1>
        </div>
        <br>
        <div>
            <p>Description</p>
            <textarea v-model="singleItem.Description"></textarea>
        </div>
        <br>
        <div>
            <p>Priority</p>
            <select v-model="singleItem.Priority">
                <option disabled value="">Please select one</option>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
            </select>
        </div>
        <br>
        <div>
            <p>State</p>
            <select v-model="singleItem.State">
                <option disabled value="">Please select one</option>
                <option>New</option>
                <option>Active</option>
                <option>Complete</option>
            </select>
        </div>
        <br>
        <br>
        <div>
            <button @click='saveBoardItem'>Save</button>
            <br>
            <br>
            <button @click='displayTheItem'>Console.log</button>
            <br>
            <br>
            <button @click='deleteBoardItem'>DELETE</button>


        
        </div>
    </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditItem',
  
  props: {
    item: {
      type: Object,
      default: null
      }
  },
  
   data(){
    return {
        singleItem: {
            ItemType: "",
            Title: "",
            Description: "",
            State: "",
            Priority: "",
            Effort: 0
        },
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

<style scoped>
.header {
    text-align: center;
}

</style>