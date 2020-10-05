import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto'

import LandingPage from './components/LandingPage/LandingPage.vue';

const Ian = () => import(/* webpackChunkName: "services" */ './components/Ian/Ian.vue')
const Kahlil = () => import(/* webpackChunkName: "services" */ './components/Kahlil/Kahlil.vue')
const Allison = () => import(/* webpackChunkName: "services" */ './components/Allison/Allison.vue')
const Brooke = () => import(/* webpackChunkName: "services" */ './components/Brooke/Brooke.vue')
const Alex = () => import(/* webpackChunkName: "services" */ './components/Alex/Alex.vue')
const Kyle = () => import(/* webpackChunkName: "services" */ './components/Kyle/Kyle.vue')
const Marvin = () => import(/* webpackChunkName: "services" */ './components/Marvin/Marvin.vue')
const Hunter = () => import(/* webpackChunkName: "services" */ './components/Hunter/Hunter.vue')
const Reagan = () => import(/* webpackChunkName: "services" */ './components/Reagan/Reagan.vue')
const Jon = () => import(/* webpackChunkName: "services" */ './components/Jon/Jon.vue')

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'LandingPage',
			component: LandingPage,
		},
		{
			path: '/Ian',
			name: 'Ian',
			component: Ian,
		},
		{
			path: '/Kahlil',
			name: 'Kahlil',
			component: Kahlil,
		},
		{
			path: '/Allison',
			name: 'Allison',
			component: Allison,
		},
		{
			path: '/Brooke',
			name: 'Brooke',
			component: Brooke,
		},
		{
			path: '/Alex',
			name: 'Alex',
			component: Alex,
		},
		{
			path: '/Kyle',
			name: 'Kyle',
			component: Kyle,
		},
		{
			path: '/Marvin',
			name: 'Marvin',
			component: Marvin,
		},
		{
			path: '/Hunter',
			name: 'Hunter',
			component: Hunter,
		},
		{
			path: '/Reagan',
			name: 'Reagan',
			component: Reagan,
		},
		{
			path: '/Jon',
			name: 'Jon',
			component: Jon,
		},
	],
	scrollBehavior: (to, from, savedPosition) => {
		let scrollTo = 0

		if (to.hash) {
			return { selector:to.hash}
		//   scrollTo = to.hash
		} else if (savedPosition) {
		//   scrollTo = savedPosition.y
			return savedPosition
		} else {
			return{ x:0, y:0 }
		}

		// return goTo(scrollTo)
	  },
})

export default router;
