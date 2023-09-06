export default [
	{
		path: "/trilha",
		name: "Trilha",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  