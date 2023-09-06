<template>
  <v-row class="pt-3">
    <v-col cols="6" v-for="(item, i) in items" :key="i">
      <v-card
        elevation="0"
        color="#D9D9D9"
        class="pa-3"
      >
        <v-card-title class="subtitle-2 pa-0">{{ item.text }}</v-card-title>
        <v-progress-linear class="mt-8" color="#000000" :value="item.progress"></v-progress-linear>
        <div class="d-flex align-end justify-space-between">
          <div>
            <p class="mt-4 mb-0 caption">Conluído</p>
            <p class="white--text subtitle-1  font-weight-bold mb-0">{{ item.value }}/{{ item.valueTotal }}</p>
          </div>
          <div>
            <v-icon large="">mdi-play-circle</v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {

  data(){
    return{
      items: [
        { text: 'Trilha Renal', progress: 80, value: '30', valueTotal: '46' },
        { text: 'Trilha Pulmonar', progress: 85, value: '8', valueTotal: '18' },
        { text: 'Trilha Cardiovascular', progress: 60, value: '15', valueTotal: '24' },
        { text: 'Trilha Intestinal', progress: 30, value: '2', valueTotal: '16' },
      ],
    }
  }
}
</script>

<style>

</style>