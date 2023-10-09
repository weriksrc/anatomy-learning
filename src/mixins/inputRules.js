const inputRules = {
  data() {
    return {
      rules: {
        required: v => !!v || "Campo não pode ser vazio",
        email: v => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
        numeric: v => (v && !isNaN(v)) || "Campo deve ser numérico",
        password: v =>
          /^[A-Za-z\S]{8,}$/.test(v) ||
          "A senha deve conter no mínimo 8 caracteres",
      }
    };
  }
};

export default inputRules;
