<template>
  <v-app>
    <v-main>
      <AnatomyLearningApp />
    </v-main>
  </v-app>
</template>

<script>
import AnatomyLearningApp from '@/layouts/Index'

export default {
  name: 'App',

  components: {
    AnatomyLearningApp,
  },

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