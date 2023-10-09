<template>
  <v-dialog v-model="dialogForm" persistent max-width="80%">
    <v-card height="70vh">
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
        <BaseQuillEditor class="mt-8" />
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
import BaseQuillEditor from "@/components/BaseQuillEditor.vue";
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

  components: {
    BaseQuillEditor
  },

  data() {
    return {
      formFolder: {}
    };
  },

  computed: {
    dialogForm() {
      return this.dialog;
    }
  },

  methods: {
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
.ql-editor {
  height: 40vh;
}
</style>