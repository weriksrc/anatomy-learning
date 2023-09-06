<template>
  <v-container class="pa-0 ma-0">
    <AppBar @setDrawer="drawer = $event" :drawer="drawer" />
    <LeftBar @setDrawerResponsiveness="drawer = $event" :drawer="drawer"/>
    <v-container class="px-0 pt-14 ma-0 limited-height">
      <router-view></router-view>
    </v-container>
  </v-container>
</template>

<script>
import AppBar from '@/layouts/system/AppBar';
import LeftBar from '@/layouts/system/LeftBar';
export default {

  name: 'AnatomyLearningApp',

  components:{
    AppBar,
    LeftBar
  },

  data(){
    return{
      drawer: true,
    }
  }

}
</script>

<style>

.limited-height{
  height: 92vh;
  overflow-y: scroll;
}
  @media (min-width: 1264px){
    .container {
      max-width: 100%;
    }

  }
  @media (min-width: 960px){
    .container {
      max-width: 100%;
    }
  }
</style>