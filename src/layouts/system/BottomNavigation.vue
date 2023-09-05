<template>
  <v-bottom-navigation
    :value="value"
    color="#000000"
    class="bottom-navigation"
  >
    <v-btn icon to="/inicio">
      <span>Início</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn icon to="/meta">
      <span>Metas</span>

      <v-icon>mdi-compass</v-icon>
    </v-btn>

    <v-btn icon to="/notificacao">
      <span>Notificações</span>

      <v-icon>mdi-email</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

  name: 'BottomNavigation',

  data: () => ({ value: 0 }),


}
</script>

<style scoped>
.bottom-navigation{
  background-color: #D9D9D9;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: transparent;
}

.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #858585 !important;
}
</style>