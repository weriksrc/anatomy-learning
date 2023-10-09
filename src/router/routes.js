import System from "@/layouts/Index";
import Inicio from "@/modules/aluno/inicio/routes/index"
import Meta from "@/modules/aluno/meta/routes/index"
import Notificacao from "@/modules/aluno/notificacao/routes/index"
import Perfil from "@/modules/aluno/perfil/routes/index"

import Dashboard from "@/modules/professor/dashboard/routes/index"
import Trilha from "@/modules/professor/trilha/routes/index"
import Agenda from "@/modules/professor/agenda/routes/index"
import Professor from "@/modules/professor/professor/routes/index"
import Aluno from "@/modules/professor/aluno/routes/index"
import Usuario from "@/modules/professor/usuario/routes/index"
// import Login from "@/views/login/routes/index"

const perfilProfessor = true
export default [
  {
    path: "/",
    name: "Home",
    redirect: perfilProfessor ?  "/dashboard" : "/meta",
    component: System,
    // meta: { isAuthenticated: true },
  },
  ...Inicio,
  ...Meta,
  ...Notificacao,
  ...Perfil,
  ...Dashboard,
  ...Trilha,
  ...Agenda,
  ...Professor,
  ...Aluno,
  ...Usuario
//   ...Login,
];