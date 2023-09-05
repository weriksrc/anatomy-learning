<template>
  <v-list dense >
    <v-card 
      v-for="(item, i) in items"
      :key="i"
      class="pa-2 mb-1"
      color="#495054"
      elevation="0"
    >
      
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-progress-circular 
            class="mr-2"
            color="white"
            :size="20" 
            :value="item.progress" 
          ></v-progress-circular>
          <span class="white--text font-weight-light">{{ item.text }}</span>
        </div>
        <div class="pa-0">
          <span class="minuto-total">{{ item.value }}</span>
          <span class="minuto-restante">/{{ item.valueTotal }}</span>
        </div>
        
      </div>
    </v-card>
  </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'Trilha Renal', progress: 80, value: '30', valueTotal: '46' },
        { text: 'Trilha Pulmonar', progress: 85, value: '8', valueTotal: '18' },
        { text: 'Trilha Cardiovascular', progress: 60, value: '15', valueTotal: '24' },
        { text: 'Trilha Intestinal', progress: 30, value: '2', valueTotal: '16' },
      ],
    }),
  }
</script>

<style>

</style>