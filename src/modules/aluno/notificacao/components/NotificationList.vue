<template>
  <v-container class="pa-0 ma-0 overflow-x-auto">
    <v-list dense v-if="mensagens.length != 0 ">
      <v-list-item v-for="(mensagem, i) in mensagens" :key="i">
        <v-card
          elevation="0"
          color="#828282"
          class="pa-3 mb-3"
        >
          <div class="d-flex">
            <v-card elevation="0" color="#495054" class="pa-3">
              <v-icon large color="#FFFFFF">mdi-message-text</v-icon>
            </v-card>
            <v-card-text class="white--text px-2 py-0 text-truncate">
              <p>{{ mensagem.text }}</p>
              <div class="d-flex">
                <v-icon small color="#FFFFFF" class="mr-2">mdi-clock-time-four</v-icon>
                <p class="ma-0">{{ mensagem.hour }}</p>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
    <v-card v-else elevation="0" height="70vh" class="d-flex justify-center align-center">Não há notificações</v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{ 
      mensagens:[
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // },
        // {
        //   text: "Congratulations on completing the firts module", hour: "Just now"
        // }
      ]
    }
  }
}
</script>

<style>

</style>