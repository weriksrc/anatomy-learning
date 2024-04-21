export default [
	{
		path: "/login",
		name: "Login",
		component: () => import("@/layouts/auth/Login.vue"),
	},
	{
		path: "/login/:token",
		name: "Auth",
		component: () => import("@/layouts/auth/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/layouts/auth/Register.vue"),
	},
];