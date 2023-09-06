<template>
  <div>
    <v-navigation-drawer app v-model="drawerData" @input="updateDrawer">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Anatomy Learning</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group>
          <div v-for="(item, x) in itemsMenu" :key="x">
            <v-list
              v-if="!item.hasOwnProperty('children')"
              v-can:roles="item.role"
            >
              <router-link :to="item.route">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list>
          </div>

          <v-list>
            <v-list-item @click="logout()">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Sair</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {

  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },

  data(){
    return{
      drawerData: false,
      itemsMenu: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/dashboard",
          role: ["professor"],
        },
        {
          text: "Trihas",
          icon: "mdi-file-certificate",
          route: "/trilha",
          role: ["professor"],
        },
        {
          text: "Resumos",
          icon: "mdi-file-document-multiple",
          route: "/resumo",
          role: ["professor"],
        },
        {
          text: "Perguntas",
          icon: "mdi-help-rhombus",
          route: "/pergunta",
          role: ["professor"],
        },

        {
          text: "Alunos",
          icon: "mdi-account-multiple",
          route: "/aluno",
          role: ["professor"],
        },
        {
          text: "Usuários",
          icon: "mdi-account",
          route: "/usuario",
          role: ["admin"],
        },
      ],
    }
  },

  methods: {
    updateDrawer(value) {
      this.drawerData = value;
      this.$emit("setDrawerResponsiveness", value);
    },
    logout() {

      // this.$store.dispatch("logout");
      // this.$router.push("/login");
    },
  },

  watch: {
    drawer(value) {
      this.drawerData = value;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
