<template>
  <v-container class="px-2 ma-0 container-perfil">
    <div>
      <h4>Olá, Weriks</h4>
      <span class="body-2">Aprenda com o Anatomy Learning</span>
    </div>
    <div>
      <v-card 
        elevation="0" 
        color="transparent" 
        class="rounded-circle" 
        to="/perfil" 
      >
        <v-avatar>
          <img
            src="https://avatars.githubusercontent.com/u/60294975?v=4"
          >
        </v-avatar>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "BemVindoView"
}
</script>

<style>
  .container-perfil {
    background-color: #D9D9D9;
    display: flex;
    justify-content: space-between;
    padding-bottom: 54px;
  }
</style>