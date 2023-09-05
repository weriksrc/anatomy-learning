<template>
  <v-container class="pa-0 ma-0">
    <AppBar />
      <v-container class="px-0 pt-14 ma-0 limited-height">
        <router-view></router-view>
      </v-container>
    <BottomNavigation />
  </v-container>
</template>

<script>
import AppBar from '@/layouts/system/AppBar';
import BottomNavigation from '@/layouts/system/BottomNavigation';
export default {

  name: 'AnatomyLearningApp',

  components:{
    AppBar,
    BottomNavigation
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