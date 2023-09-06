<template>
  <v-container class="pa-0 ma-0">
    <div class="px-3" >
      <TimeCard class="mt-4" />
      <LearningColumn />
      <p class="mt-3 mb-1">Busque por trilha</p>
      <LearningList />
    </div>
  </v-container>
</template>

<script>
import TimeCard from "@/components/TimeCard"
import LearningColumn from "../components/LearningColumn"
import LearningList from "../components/LearningList"
export default {

  name: "MetaView",

  components:{
    TimeCard,
    LearningColumn,
    LearningList
  }

}
</script>

<style>

</style>