export default [
	{
		path: "/agenda",
		name: "Agenda",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  