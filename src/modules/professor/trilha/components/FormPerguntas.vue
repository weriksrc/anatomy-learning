<template>
  <v-dialog v-model="dialogForm" persistent max-width="50%">
    <v-card>
      <v-toolbar color="#181818" class="white--text">
        <v-card-title class="pa-0">
          <span>
            {{
            labelBtn != "Salvar"
            ? `Editar ${titleDialog}`
            : `Cadastrar ${titleDialog}`
            }}
          </span>
        </v-card-title>
      </v-toolbar>
      <v-card-text class="mt-8 limited-card-text">
        <v-form ref="form">
          <v-row v-for="n in formCount" :key="n">
            <v-col cols="12">
              <v-text-field label="Pergunta"></v-text-field>
            </v-col>

            <v-col cols="12">
              <p>Tipo de pergunta</p>
              <v-radio-group v-model="radioValue" row>
                <v-radio label="verdadeiro ou falso" value="radio-1"></v-radio>
                <v-radio label="Múltipla Escolha" value="radio-2"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12" v-if="radioValue == 'radio-1'">
              <v-radio-group v-model="radioTrueFalse" column>
                <div v-for="n in 2" :key="n" class="d-flex">
                  <v-radio :label="labelRadio(n+1)" :value="labelRadio(n+1)"></v-radio>
                  <v-text-field placeholder="Digite a resposta" class="ml-4"></v-text-field>
                </div>
              </v-radio-group>
            </v-col>

            <v-col cols="12" v-if="radioValue == 'radio-2'">
              <v-radio-group v-model="radioAlternativa" column>
                <div v-for="n in 5" :key="n" class="d-flex">
                  <v-radio :label="labelRadio(n+1)" :value="labelRadio(n+1)"></v-radio>
                  <v-text-field placeholder="Digite a resposta" class="ml-4"></v-text-field>
                </div>
              </v-radio-group>
            </v-col>
          </v-row>
          <div class="d-flex align-center mt-8">
            <v-btn min-width="40" min-height="40" depressed class="pa-0 mr-4" @click="formCount++">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <span class="text-h6">Adicionar questão</span>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="close()">Fechar</v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="
            labelBtn != 'Salvar'
              ? edit()
              : save()
          "
        >{{ labelBtn }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "FormEditoromponent",
  props: {
    dialog: {
      type: Boolean,
      default: false
    },

    titleDialog: {
      type: String
    },

    labelBtn: {
      type: String
    }
  },

  data() {
    return {
      formCount: 1,
      radioValue: "",
      radioAlternativa: "",
      radioTrueFalse: ""
    };
  },

  watch: {
    radioAlternativa(value) {
      console.log("radioAlternativa ", value);
    }
  },

  computed: {
    dialogForm() {
      return this.dialog;
    }
  },

  methods: {
    labelRadio(value) {
      if (value == 1) {
        return `${String.fromCharCode(95)} )`;
      }
      return `${String.fromCharCode(95 + value)} )`;
    },
    save() {
      console.log("save");
    },

    edit() {
      console.log("edit");
    },

    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}

.limited-card-text {
  height: 70vh;
  overflow-y: scroll;
}
</style>