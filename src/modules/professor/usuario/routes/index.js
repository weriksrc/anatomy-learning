export default [
	{
		path: "/usuario",
		name: "Usuario",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  