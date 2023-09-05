export default [
	{
		path: "/meta",
		name: "Meta",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  