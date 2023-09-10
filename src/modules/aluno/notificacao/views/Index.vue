<template>
  <v-container class="pa-0 ma-0">
    <v-tabs
      v-model="tab"
      fixed-tabs
      color="#000000"
    >
      <v-tab>
        Mensagens
      </v-tab>
      <v-tab>
        Notificação
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <MessageList />
      </v-tab-item>
      <v-tab-item>
        <NotificationList />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import  MessageList  from "../components/MessageList";
import  NotificationList  from "../components/NotificationList";
export default {

  name: "NotificacaoView",

  components:{
    MessageList,
    NotificationList
  },

  data () {
    return {
      tab: null,
    }
  },

}
</script>

<style>

</style>