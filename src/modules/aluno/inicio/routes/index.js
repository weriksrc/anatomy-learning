export default [
	{
		path: "/inicio",
		name: "Inicio",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  