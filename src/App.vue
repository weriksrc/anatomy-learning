<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      
    }
  },

  methods:{
    getRoles(){
      let roles = ["professor"];
      localStorage.setItem('roles', JSON.stringify(roles))
    }
  },

  created(){
    this.getRoles()
  }
};
</script>