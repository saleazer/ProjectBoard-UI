<template>
      <div app v-if="item != null">
        <v-card :class="`cardSizing item ${item.Priority}`" elevation="5">
          <v-row wrap>
            <v-col xs6>
              <v-card-text class="titleSpacing">{{item.Title}}</v-card-text>
            </v-col>
            <v-col  xs6>
              <div class="right">
              <v-card-text class="titleSpacing">Owner:</v-card-text>
              <v-card-text class="titleSpacing">{{item.OwnerName}}</v-card-text>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
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