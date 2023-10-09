<template>
  <v-dialog v-model="dialogForm" persistent max-width="40%">
    <v-card color="#202020">
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
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-text-field
                dark
                class="mt-6"
                label="Nome"
                v-model="formFolder.name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
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
import rules from "@/mixins/inputRules";
export default {
  name: "FormFolderComponent",
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
    },

    editFolder: {
      type: Object
    }
  },

  mixins: [rules],

  data() {
    return {
      formFolder: {}
    };
  },

  watch: {
    editFolder(value) {
      this.formFolder = value;
    }
  },

  computed: {
    dialogForm() {
      return this.dialog;
    }
  },

  methods: {
    save() {
      this.$emit("store", this.formFolder);
    },

    edit() {
      this.$emit("put", this.formFolder);
    },

    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>