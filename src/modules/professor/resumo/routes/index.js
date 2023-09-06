export default [
	{
		path: "/resumo",
		name: "Resumo",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  