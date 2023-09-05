<template>
  <v-container class="pa-0 ma-0">
    <Welcome />
    <div class="elements-home px-3">
      <TimeCard />
      <LearningList />
      <p class="pt-2 ma-0 font-weight-medium">Trilhas de aprendizado</p>
      <LearningCard />
      <div class="text-end pb-2">
        <v-btn small text>
          Veja Mais
        </v-btn>
      </div>
      <OrientationCard />
    </div>
  </v-container>
</template>

<script>
import Welcome from "../components/Welcome"
import TimeCard from "../components/TimeCard"
import LearningList from "../components/LearningList"
import LearningCard from "../components/LearningCard"
import OrientationCard from "../components/OrientationCard"
export default {

  name: "InicioView",

  components:{
    Welcome,
    TimeCard,
    LearningList,
    LearningCard,
    OrientationCard
  }

}
</script>

<style>
.elements-home {
  margin-top: -30px;
}
</style>