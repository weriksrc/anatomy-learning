<template>
  <v-menu :close-on-content-click="false" top right>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </template>
    <v-card class="py-0 px-4" elevation="0">
      <v-text-field
        v-model="text"
        :label="label"
        :placeholder="placeholder"
        clearable
        @click:clear="clearable()"
        @keydown="keyDown()"
        @keyup="keyUp()"
      ></v-text-field>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },

  data() {
    return {
      text: "",
      typingTimer: "",
    };
  },

  methods: {
    clearable() {
      this.text = "";
      this.$emit("texValue", {
        [`${this.query}`]: `%${this.text.toUpperCase()}%`,
      });
    },

    keyDown() {
      clearTimeout(this.typingTimer);
    },

    keyUp() {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => {
        this.$emit("texValue", {
          [`${this.query}`]: `%${this.text.toUpperCase()}%`,
        });
      }, 1000);
    },
  },
};
</script>

<style></style>
