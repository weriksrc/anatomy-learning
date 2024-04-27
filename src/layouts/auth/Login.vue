<template>
  <v-container class="fill-height backgound" fluid>
    <v-row>
      <v-col class="align-center d-flex flex-column">
        <!-- <div class="logo-sistema">
          <v-img
            class="image-background"
            :src="require('@/assets/revisanatomy.svg')"
          >
          </v-img>
        </div> -->
        <v-card width="350" class="card-login align-center">
          <!-- <v-card-title class="title-login mb-8">
            <div>
              <v-img :src="require('@/assets/revisanatomy.svg')">
              </v-img>
            </div>
          </v-card-title> -->
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                class="mb-2"
                autocomplete="off"
                v-model="form.username"
                :rules="[rules.required]"
                label="Usuário"
                outlined
              ></v-text-field>
              <v-text-field
                class="mb-3"
                v-model="form.password"
                :rules="[rules.required]"
                label="Senha"
                type="password"
                outlined
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="align-center d-flex flex-column">
            <v-btn
              big
              block
              color="#9f9f9f"
              class="mb-2 white--text"
              @click="login"
              >Entrar</v-btn
            >
            <v-btn
              big
              block
              color="#9f9f9f"
              outlined
              class="mb-4 ml-0"
              :to="{ path: '/register' }"
              >Cadastrar</v-btn
            >
            <!-- <p>
              Esqueceu senha?
              <a @click="goToResetPassword()">
                Clique para redefinir
              </a>
            </p> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from "@/mixins/inputRules";
import login from "@/service/http/login/login";

export default {
  name:"LayoutLogin",

  mixins: [rules],

  data() {
    return {
      form: {},
    };
  },

  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        try {
          let { data } = await login().accessToken().store(this.form)
          console.log(data);
          this.fetchCurrentUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    },

    async fetchCurrentUser(data) {
      const userData = JSON.stringify(data.user);
      localStorage.setItem("currentUser", userData);
      data.user.role_name == 'aluno'
        ? this.$router.push("/inicio")
        : this.$router.push("/dashboard");
    },

    goToResetPassword() {
      this.$router.push("/cadastro/solicita-redefinicao-senha");
    }
  }
};
</script>

<style scoped>
.backgound {
  background-image: linear-gradient(to bottom, #d9d9d9 35%, #ffffff 35%);
}

.card-login {
  position: absolute;
  top: 28%;
}
</style>
