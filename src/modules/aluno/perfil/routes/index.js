export default [
	{
		path: "/perfil",
		name: "Inicio",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  