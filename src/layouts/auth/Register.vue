<template>
  <v-container class="fill-height backgound" fluid>
    <v-row>
      <v-col class="align-center d-flex flex-column">
        <v-overlay :value="loading">
          <v-progress-circular size="120" indeterminate
            >Cadastrando...
          </v-progress-circular>
        </v-overlay>
        <v-card class="col-md-5 col-sm-12 col-lg-5 card-register" width="800">
          <v-card-title class="d-flex justify-center mb-3">
            <h2 color="#0d47a1">Cadastro</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    class="mb-2"
                    v-model="form.nome"
                    :rules="[rules.required]"
                    label="Nome Completo"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    class="mb-2"
                    v-model="form.username"
                    :rules="[rules.required]"
                    label="Nome de Usuário"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    class="mb-2"
                    v-model="form.student_registration"
                    :rules="[rules.required]"
                    label="Matrícula"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    class="mb-2"
                    v-model="maskedCpf"
                    :rules="[rules.required]"
                    v-mask="['###.###.###-##']"
                    label="CPF"
                    placeholder="999.999.999-99"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    class="mb-2"
                    v-model="form.email"
                    :rules="[rules.required, rules.emailCometa]"
                    label="E-mail"
                    type="email"
                    placeholder="informe um e-mail válido"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    class="mb-8"
                    v-model="form.password"
                    :rules="[rules.required, rules.password]"
                    label="Senha"
                    :type="passwordInput"
                    :append-icon="passwordInputIcon"
                    @click:append="showPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    class="mb-8"
                    v-model="confirmPassword"
                    :rules="[rules.required, rules.password, rule.passwordConfirm]"
                    label="Confirme a senha"
                    :type="passwordInput"
                    :append-icon="passwordInputIcon"
                    @click:append="showPassword"
                  ></v-text-field>
                </v-col>

              </v-row>
            </v-form>
          </v-card-text>
          <v-row justify="center">
            <v-col cols="12" md="3" sm="6" lg="3">
              <v-btn
                class="white--text"
                block
                @click="cadastrar"
                color="#9f9f9f"
                >{{ loading ? "Carregando" : "Cadastrar" }}</v-btn
              >
            </v-col>
            <v-col cols="12" md="3" sm="6" lg="3">
              <v-btn block color="#9f9f9f" outlined :to="{ path: '/login' }"
                >Voltar</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from "@/mixins/inputRules";
import registration from "@/service/http/registration";

export default {
  name: "LayoutRegister",

  mixins: [rules],

  data() {
    return {
      form: {},
      confirmPassword: "",
      maskedCpf: "",
      show: false,
      passwordInput: "password",
      passwordInputIcon: "mdi-eye-off",
      loading: false,
      rule: {
        passwordConfirm: v => (v === this.form.password) || "As senhas devem ser iguais"
      }
    };
  },

  watch: {
    maskedCpf(value) {
      this.form.cpf = value.replace(/[^\d]/g, "");
    },
  },

  methods: {
    showPassword() {
      this.show = !this.show;
      this.passwordInputIcon = this.show ? "mdi-eye" : "mdi-eye-off";
      this.passwordInput = this.show ? "text" : "password";
    },

    async cadastrar() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          await registration().store(this.form, {
            notification: true,
            message: "Usuário cadastrado, verifique sua caixa de e-mail"
          });
        } catch (error) {
          console.log(error);
        }
        this.loading = false;
      }
    },

    
    goToHome() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.backgound {
  background-image: linear-gradient(to bottom, #d9d9d9 35%, #ffffff 35%);
}

.card-register {
  position: absolute;
  top: 15%;
}
</style>