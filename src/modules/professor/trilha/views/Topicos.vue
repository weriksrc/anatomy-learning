<template>
  <v-container class="pa-4">
    <div class="d-flex justify-space-between align-center">
      <h2>Nome Pasta</h2>

      <v-btn depressed color="success" @click="openModal()">
        <v-icon class="mr-2">mdi-plus</v-icon>Novo Tópico
      </v-btn>
    </div>
    <p class="gray--text mb-8">Tópicos</p>
    <v-row>
      <v-col cols="6" md="2" lg="2" v-for="(folder, index) in modulos" :key="index">
        <v-card
          :to="`/trilha/${routerParams.idTrilha}/modulos/${routerParams.idModulo}/topicos/${index}`"
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
      :titleDialog="'tópico'"
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
  name: "ModulosView",

  components: {
    FormFolder
  },

  data() {
    return {
      dialog: false,
      labelBtn: "",
      routerParams: "",
      idModulo: "",
      modulos: [{ name: "Anatomia dos Ossos" }, { name: "Fisiologia Muscular" }]
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
  },

  mounted() {
    this.routerParams = this.$router.history.current.params;
  }
};
</script>

<style>
</style>