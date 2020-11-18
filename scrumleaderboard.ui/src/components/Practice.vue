<template>
  <label>{{this.getApiResult()}}</label>
</template>

<script>

import axios  from 'axios'
export default {
  name: 'Practice',
  data(){
    return{
      test: "New Test does this work"
    }
  },
  methods: {
    getApiResult: function () {
      axios.get("https://localhost:44382/BoardItem/1").then((response) => {
          console.log(response.data);
        })
        .catch(error => {
            console.log(error.response)
        });       
    }
  }
}
</script>


