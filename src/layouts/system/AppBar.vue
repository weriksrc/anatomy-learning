<template>
  <v-app-bar color="#D9D9D9" elevation="0" class="app-bar">
    <v-app-bar-nav-icon @click="activeDrawer" v-can:roles="['professor']"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {

  name: 'AppBar',

  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },

  data(){
    return{
      drawerData: true,
    }
  },

  watch: {
    drawer(value) {
      this.drawerData = value;
    },
  },

  methods: {
    activeDrawer() {
      this.drawerData = !this.drawerData;
      this.$emit("setDrawer", this.drawerData);
    },
  },
}
</script>

<style scoped>
.app-bar{
  position: absolute;
  top: 0;
  z-index: 3;
}

</style>