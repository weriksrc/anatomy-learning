<template>
  <v-container class="pa-4">
    <div class="d-flex justify-space-between align-center mb-4 px-4">
      <h2>Nome Tópico</h2>
      <div>
        <v-btn depressed color="success" class="mr-4" @click="openModalQuestionario()">
          <v-icon class="mr-2">mdi-plus</v-icon>Novo Questionário
        </v-btn>
        <v-btn depressed color="success" class="mr-4" @click="openModalArtigo()">
          <v-icon class="mr-2">mdi-plus</v-icon>Novo Artigo
        </v-btn>
        <v-btn depressed color="success" @click="openModalResumo()">
          <v-icon class="mr-2">mdi-plus</v-icon>Novo Resumo
        </v-btn>
      </div>
    </div>
    <v-container class="arquivos">
      Arquivos
      <Arquivos class="mt-4" />
    </v-container>

    <v-divider></v-divider>
    <v-container class="avaliacoes mt-4">
      <div class="d-flex justify-space-between align-center">
        Avaliações
        <v-btn depressed color="success" @click="openModalAvaliacao()">
          <v-icon class="mr-2">mdi-plus</v-icon>Nova Avaliação
        </v-btn>
      </div>
      <Avaliacoes class="mt-6" />
    </v-container>
    <FormQuillEditor
      :dialog="dialogArtigo"
      :titleDialog="titleDialog"
      :labelBtn="labelBtn"
      @close="dialogArtigo = false"
    />
    <FormPerguntas
      :dialog="dialogQuestionario"
      :titleDialog="titleDialog"
      :labelBtn="labelBtn"
      @close="dialogQuestionario = false"
    />
  </v-container>
</template>

<script>
import Arquivos from "../components/Arquivos.vue";
import Avaliacoes from "../components/Avaliacoes.vue";
import FormQuillEditor from "../components/FormQuillEditor.vue";
import FormPerguntas from "../components/FormPerguntas.vue";
export default {
  name: "ModulosView",

  components: {
    Arquivos,
    Avaliacoes,
    FormQuillEditor,
    FormPerguntas
  },

  data() {
    return {
      dialogQuestionario: false,
      dialogArtigo: false,
      dialogResumo: false,
      dialogAvaliacao: false,
      labelBtn: "",
      titleDialog: "",
      routerParams: "",
      idModulo: "",
      modulos: [{ name: "Anatomia dos Ossos" }, { name: "Fisiologia Muscular" }]
    };
  },

  methods: {
    openModalQuestionario() {
      this.dialogQuestionario = true;
      this.titleDialog = "perguntas";
      this.labelBtn = "Salvar";
    },

    openModalArtigo() {
      this.dialogArtigo = true;
      this.titleDialog = "Artigo";
      this.labelBtn = "Salvar";
    },

    openModalResumo() {},

    openModalAvaliacao() {}
  },

  mounted() {
    this.routerParams = this.$router.history.current.params;
  }
};
</script>

<style>
.arquivos {
  height: 40vh;
}
</style>