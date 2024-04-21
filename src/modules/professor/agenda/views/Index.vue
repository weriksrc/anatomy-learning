<template>
  <v-container class="pa-8">
    <v-row>
      <v-col cols="12" md="3">
        <Calendario />
      </v-col>
      <v-col cols="12" md="9">
        <Agenda />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Agenda from "../components/Agenda.vue";
import Calendario from "../components/Calendario.vue";
export default {
  name: "AgendaView",

  components: {
    Agenda,
    Calendario
  }
};
</script>

<style>
</style>