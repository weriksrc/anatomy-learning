<template>
  <v-list dense  class="d-flex overflow-x-auto">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="text-center"
    >
      <v-card 
        class="mr-2 pa-2"
        color="#828282"
        elevation="0"
      >
        <v-list-item-icon class="ma-0">
          <img
            width="80px"
            height="80px"
            :src=teste
          >
        </v-list-item-icon>
      </v-card>
      <p class="mt-1 subtitle-2">{{item.text}}</p>
    </div>
  </v-list>
</template>

<script>
import teste from "../../../../assets/img/rim.png"
export default {

  data(){
    return{
      teste:teste,
      items: [
        { text: 'Rim' },
        { text: 'Rim' },
        { text: 'Rim' },
        { text: 'Rim' },
      ],
    }
  }
}
</script>

<style>
  .card-list-content {
    max-height: 50px;
    min-height: 50px;
  }
</style>