import System from "@/layouts/Index";
import Inicio from "@/modules/aluno/inicio/routes/index"
import Meta from "@/modules/aluno/meta/routes/index"
import Notificacao from "@/modules/aluno/notificacao/routes/index"
import Perfil from "@/modules/aluno/perfil/routes/index"
// import Login from "@/views/login/routes/index"
export default [
  {
    path: "/",
    name: "Home",
    redirect: "/inicio",
    component: System,
    // meta: { isAuthenticated: true },
  },
  ...Inicio,
  ...Meta,
  ...Notificacao,
  ...Perfil,
//   ...Login,
];