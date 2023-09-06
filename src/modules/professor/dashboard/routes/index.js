export default [
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  