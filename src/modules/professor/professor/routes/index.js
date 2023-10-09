export default [
	{
		path: "/professor",
		name: "Professor",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  