<template>
  <div>
    <quill-editor v-model="contentHtml"></quill-editor>
    <v-btn @click="teste()">teste</v-btn>
  </div>
</template>

<script>
export default {
  name: "BaseQuillEditor",

  data() {
    return {
      contentHtml: ""
    };
  },

  methods: {
    teste() {
      console.log("teste", this.contentHtml);
    }
  }
};
</script>

<style>
</style>