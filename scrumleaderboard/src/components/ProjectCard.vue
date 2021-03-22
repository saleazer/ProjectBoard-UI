<template>
  <div app v-if="item != null">
        <v-card tile>
          <v-row wrap>
            <v-col>
              <v-card-text class="titleSpacing">{{item.Name}}</v-card-text>
            </v-col>
            <v-col>
              <div class="right">
              </div>
            </v-col>
          </v-row>
        </v-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectCard',
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

  methods: {
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