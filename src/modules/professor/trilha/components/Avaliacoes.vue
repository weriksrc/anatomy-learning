<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(itemAvaliacoes, index) in avaliacoes" :key="index">
      <v-expansion-panel-header class="expansion-panel-avaliacao">{{ itemAvaliacoes.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list>
          <v-list-item v-for="(itemContent, i) in itemAvaliacoes.content" :key="i">
            <v-icon class="mr-4">{{ itemContent.icon }}</v-icon>
            <span>{{ itemContent.title }}</span>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  name: "AvaliacoesComponent",

  data() {
    return {
      avaliacoes: [
        {
          name: "Avaliação inicial do coteudo de anatomia - 24h",
          content: [
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            },
            {
              icon: "mdi-format-list-bulleted-square",
              title: "Questionário sobre a anatomia óssea"
            },
            {
              icon: "mdi-cube-outline",
              title: "Objeto 3D - esqueleto"
            },
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            }
          ]
        },
        {
          name: "Avaliação inicial do coteudo de anatomia - 7 dias",
          content: [
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            },
            {
              icon: "mdi-format-list-bulleted-square",
              title: "Questionário sobre a anatomia óssea"
            },
            {
              icon: "mdi-cube-outline",
              title: "Objeto 3D - esqueleto"
            },
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            }
          ]
        },
        {
          name: "Avaliação inicial do coteudo de anatomia - 30 dias",
          content: [
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            },
            {
              icon: "mdi-format-list-bulleted-square",
              title: "Questionário sobre a anatomia óssea"
            },
            {
              icon: "mdi-cube-outline",
              title: "Objeto 3D - esqueleto"
            },
            {
              icon: "mdi-file-document",
              title: "Artigo sobre a anatomia óssea"
            }
          ]
        }
      ]
    };
  },

  methods: {}
};
</script>

<style>
.expansion-panel-avaliacao {
  background-color: #181818;
  color: #ffffff;
}
.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: #ffffff90;
}
</style>