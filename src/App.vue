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

  data: () => ({
    //
  }),
};
</script>