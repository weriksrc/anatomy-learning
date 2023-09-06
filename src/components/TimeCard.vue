<template>
  <v-card elevation="0" class="pa-3" color="#495054">
    <v-card-subtitle class="pa-0 pb-2 time-card-title">Tempo de estudo hoje</v-card-subtitle>
    <span class="minuto-total">46min</span>
    <span class="minuto-restante">/60min</span>
    <v-progress-linear color="#FFFFFF" :value="70"></v-progress-linear>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
  .time-card-title {
    color: #B8B8D2 !important;
  }
  .minuto-total {
    color: #FFFFFF;
  }
  .minuto-restante {
    color: #B8B8D2;
    font-size: 12px;
  }
</style>

