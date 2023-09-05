import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// import guards from "./guards";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
//   base: process.env.BASE_URL,
  routes
});

// (Router Guard)
// router.beforeEach((to, from, next) => {
//   guards.handleUserLoginStatus(to, from, next);
// });

export default router;