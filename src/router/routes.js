import System from "@/layouts/Index";
import Inicio from "@/modules/aluno/inicio/routes/index"
import Meta from "@/modules/aluno/meta/routes/index"
import Notificacao from "@/modules/aluno/notificacao/routes/index"
import Perfil from "@/modules/aluno/perfil/routes/index"

import Dashboard from "@/modules/professor/dashboard/routes/index"
import Trilha from "@/modules/professor/trilha/routes/index"
import Resumo from "@/modules/professor/resumo/routes/index"
import Pergunta from "@/modules/professor/pergunta/routes/index"
import Aluno from "@/modules/professor/aluno/routes/index"
import Usuario from "@/modules/professor/usuario/routes/index"
// import Login from "@/views/login/routes/index"

const teste = false
export default [
  {
    path: "/",
    name: "Home",
    redirect: teste?  "/inicio" : "/meta",
    component: System,
    // meta: { isAuthenticated: true },
  },
  ...Inicio,
  ...Meta,
  ...Notificacao,
  ...Perfil,
  ...Dashboard,
  ...Trilha,
  ...Resumo,
  ...Pergunta,
  ...Aluno,
  ...Usuario
//   ...Login,
];