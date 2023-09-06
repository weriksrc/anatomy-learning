export default [
	{
		path: "/pergunta",
		name: "Pergunta",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  