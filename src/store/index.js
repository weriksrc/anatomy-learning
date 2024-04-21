import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem("token") || "",
    user: "",
  },

  actions: {
    auth({ commit }, token) {
      commit("setToken", token);
    },
    logout({ commit }) {
      commit("setToken", "");
      commit("setUser", "");
      window.localStorage.removeItem("currentUser");
    },
    userData({ commit }, user) {
      commit("setUser", user);
    },
  },

  mutations: {
    setToken: (state, payload) => {
      state.token = payload;
      window.localStorage.setItem("token", payload);
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
  },
  getters: {
    isLogged: (state) => {
      if (state.token != "") return true;
      return false;
    },
    getToken: (state) => state.token,
    getUser: (state) => {
      if (state.user != "") return state.user;
      return "";
    },
  },
});