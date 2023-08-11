import {
	createWebHistory,
	createRouter
} from 'vue-router';
import routes from './routes';

const history = createWebHistory();


const router = createRouter({
	history,
	routes
});




router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('token') == null) {
			next({
				path: '/',
				params: { nextUrl: to.fullPath }
			})
		} else {
			let user = localStorage.getItem('user')
			if (to.matched.some(record => record.meta.is_admin)) {
				if (user.is_admin == 1) {
					next()
				} else {
					next({ name: 'dashboard' })
				}
			} else {
				next()
			}
		}
	} else if (to.matched.some(record => record.meta.guest)) {
		if (localStorage.getItem('token') == null) {
			next()
		} else {
			next({ name: 'dashboard' })
		}
	} else {
		next()
	}
})



export default router;
