export default [
	{
		path: "/trilha",
		name: "Trilhas",
		component: () => import("../views/Trilhas"),
		meta: { isAuthenticated: true }
	},
	{
		path: "/trilha/:idTrilha/modulos",
		name: "Modulos",
		component: () => import("../views/Modulos"),
		meta: { isAuthenticated: true }
	},
	{
		path: "/trilha/:idTrilha/modulos/:idModulo/topicos",
		name: "Topicos",
		component: () => import("../views/Topicos"),
		meta: { isAuthenticated: true }
	},
	{
		path: "/trilha/:idTrilha/modulos/:idModulo/topicos/:idTopico",
		name: "Topico",
		component: () => import("../views/Topico"),
		meta: { isAuthenticated: true }
	},
];
  