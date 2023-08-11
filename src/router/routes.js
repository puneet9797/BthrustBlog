const routes = [
	
	{
		path: '/',
		component: () => import('../login/Login.vue'),
		name: 'login',
		meta: {
			noheader: true,
			guest: true
		}
	},
	
	{
		path: '/:pathMatch(.*)*',
		component: () => import('../pages/error/Error.vue'),
		name: 'not-found',
		meta: {
			noheader: true,
			guest: true
		}
	},

	{
		path: "/",
		component: () => import('../pages/PosLayout.vue'),
		meta: { noheader: true, requiresAuth: true },//, redirectIfAuthenticated: true },
		children: [
			{
				path: '/dashboard',
				component: () => import('../pages/Dashboard.vue'),
				name: 'dashboard',
				meta: {
					noheader: true,
					guest: true
				}
			},
		
		
			{
				path: '/master',
				component: () => import('../pages/master/Master.vue'),
				name: 'master',
				meta: {
					noheader: true,
					guest: true
				}
			},
		]
	},
]
export default routes;
