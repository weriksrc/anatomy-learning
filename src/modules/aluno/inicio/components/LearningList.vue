<template>
    <v-list dense  class="d-flex overflow-x-auto" max-width="100%">
      <v-card 
        v-for="(item, i) in items"
        :key="i"
        class="mr-2 pa-2"
        color="#D9D9D9"
        elevation="0"
        min-width="200px"
        min-height="130px"
      >
        <v-list-item-content class="card-list-content">
          <v-list-item-title v-text="item.text"  class="text-wrap"></v-list-item-title>
        </v-list-item-content>
        <div class="d-flex align-end justify-space-between elements-card">
          <div class="pa-0">
            <v-btn elevation="0" x-small color="#495054" class="white--text">Começar</v-btn>
          </div>
          <v-list-item-icon class="ma-0">
            <img
              width="60px"
              :src=teste
            >
          </v-list-item-icon>
        </div>
      </v-card>
    </v-list>
</template>

<script>
import teste from "../../../../assets/img/rim.png"
  export default {
    data: () => ({
      teste: teste,
      items: [
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
      ],
    }),
  }
</script>

<style>
  .card-list-content {
    max-height: 50px;
    min-height: 50px;
  }
</style>