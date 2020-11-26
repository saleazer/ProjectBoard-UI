<template>
   <v-container>  
      <div v-if="item != null">
        <v-card id="card" elevation="4" height=100>
          <v-card-text>{{item.ID}}:{{item.Title}}</v-card-text>
        </v-card>
      </div>
   </v-container>
</template>
<script>


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
    }
  },
   
  mounted(){
    console.log(this.item);
  },
}

</script>