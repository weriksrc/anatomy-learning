<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="2" lg="2" v-for="(archive, index) in arquivos" :key="index">
        <v-card elevation="0" class="d-flex align-center flex-column">
          <v-icon size="64px">{{archive.icon}}</v-icon>
          <p class="text-center">{{ archive.name }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ArquivosComponent",

  data() {
    return {
      arquivos: [
        {
          icon: "mdi-file-document",
          name: "Artigo estrutura anatomia óssea"
        },
        {
          icon: "mdi-file-question",
          name: "Questionário"
        },
        {
          icon: "mdi-file-image",
          name: "Imagem crânio"
        },
        {
          icon: "mdi-file-table",
          name: "Esqueleto 3D"
        },
        {
          icon: "mdi-file-video",
          name: "Vídeo estrutura anatomia óssea"
        },
        {
          icon: "mdi-file-video",
          name: "Vídeo estrutura anatomia óssea 2"
        },
        {
          icon: "mdi-file-image",
          name: "Imagem esqueleto"
        },
        {
          icon: "mdi-file-image",
          name: "Anatomia Humana"
        },
        {
          icon: "mdi-file-document",
          name: "Resumo estrutura anatomia óssea"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style>
</style>