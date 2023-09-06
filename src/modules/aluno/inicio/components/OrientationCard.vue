<template>
  <v-card
    class="pa-2 d-flex align-end justify-space-between"
    color="#495054"
    elevation="0"
  >
    <div>
      <v-card-title class="white--text">Orientações</v-card-title>
      <v-card-subtitle class="white--text">Fale com um professor especialista</v-card-subtitle>
    </div>
    <div>
      <img
        width="60px"
        :src=avatars
      >
    </div>
  </v-card>
</template>

<script>
import avatars from "../../../../assets/img/avatars.png"
export default {

  data(){
    return{
      avatars: avatars,
      items: [
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
        { text: 'Introdução a Anatomia Renal' },
      ],
    }
  },
}
</script>

<style>

</style>