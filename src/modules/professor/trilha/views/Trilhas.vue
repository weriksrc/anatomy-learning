<template>
  <v-container class="pa-4">
    <div class="d-flex justify-space-between align-center mb-8">
      <h2>Trilhas</h2>
      <v-btn depressed color="success" @click="openModal()">
        <v-icon class="mr-2">mdi-plus</v-icon>Nova Trilha
      </v-btn>
    </div>
    <v-row>
      <v-col cols="6" md="2" lg="2" v-for="(folder, index) in trilhas" :key="index">
        <v-card
          :to="`/trilha/${index}/modulos`"
          elevation="0"
          class="d-flex align-center flex-column"
        >
          <v-icon size="64px">mdi-folder</v-icon>
          <p class="text-center">{{ folder.name }}</p>
        </v-card>
      </v-col>
    </v-row>
    <FormFolder
      :dialog="dialog"
      :titleDialog="'trilha'"
      :labelBtn="labelBtn"
      @store="store($event)"
      @put="put(Eevent)"
      @close="dialog = false"
    />
  </v-container>
</template>

<script>
import FormFolder from "../components/FormFolder.vue";
export default {
  name: "TrilhasView",

  components: {
    FormFolder
  },

  data() {
    return {
      dialog: false,
      labelBtn: "",
      trilhas: [
        { name: "Anatomia Humana" },
        { name: "Fisiologia Médica" },
        { name: "Patologia Clínica" },
        { name: "Farmacologia" },
        { name: "Bioquímica Médica" },
        { name: "Histologia e Citologia" },
        { name: "Microbiologia Médica" },
        { name: "Epidemiologia e Saúde Pública" },
        { name: "Medicina Interna" },
        { name: "Cirurgia Geral" },
        { name: "Pediatria" },
        { name: "Ginecologia e Obstetrícia" },
        { name: "Psiquiatria Clínica" },
        { name: "Radiologia e Imagem Médica" },
        { name: "Medicina de Emergência" }
      ]
    };
  },

  methods: {
    openModal() {
      this.dialog = true;
      this.labelBtn = "Salvar";
    },

    store(value) {
      console.log("store", value.name);
    },

    put(value) {
      console.log("put", value);
    }
  }
};
</script>

<style>
</style>