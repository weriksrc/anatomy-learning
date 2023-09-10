export default [
	{
		path: "/perfil",
		name: "Perfil",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  