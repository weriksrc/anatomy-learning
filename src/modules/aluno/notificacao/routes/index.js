export default [
	{
		path: "/notificacao",
		name: "Notificacao",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  