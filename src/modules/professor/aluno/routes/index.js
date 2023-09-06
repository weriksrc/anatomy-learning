export default [
	{
		path: "/aluno",
		name: "Aluno",
		component: () => import("../views/Index"),
		meta: { isAuthenticated: true }
	},
];
  