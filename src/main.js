import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';
import router from './router';
import store from './store';
import moment from 'moment';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;

const crypto = require('crypto');
Object.defineProperty(Vue.prototype, '$crypto', { value: crypto });


const formValidProps = Vue.observable({
	companyInfoValid: false,
	contactInfoValid: false,
	smartDriveInfoValid: false,
	vehicleInfoValid: false,
	driverInfoValid: false,
	paymentInfoValid: false,
	submitInfoValid: false,
});
const createOrderProps = Vue.observable({
	// companyInfo.vue
	requesterName: null,
	poRef: null,
	sR4Kits: null,
	carrierName: null,
	mailingAddress1: null,
	cityItems: [],
	mailingCity: null,
	mailingState: null,
	mailingPostCode: null,
	// contactInfo.vue
	companyContactName: null,
	companyContactPhone: null,
	companyContactPhoneExt: null,
	companyContactEmail: null,
	useDiff: false,
	recvContactName: null,
	recvContactPhone: null,
	recvContactPhoneExt: null,
	recvContactEmail: null,
	// contractInfo.vue
	participation: null,
	signatureFirstName: null,
	signatureLastName: null,
	signatureTitle: null,
	signatureDate: moment().format("MM/DD/YYYY"),
	// driverInfo.vue
	drivers: [
	    {
	        firstName: null,
	        middleInit: null,
	        lastName: null,
	        employeeID: null
	    }
	],
	// paymentInfo.vue
	selectedCard: null,
	termsAndConditions: null,
	// smartDriveUsers.vue
	portalUsers: [
		{
			firstName: null,
			middleInit: null,
			lastName: null,
			employeeID: null,
			userName: null,
			password: null,
			confirmPassword: null,
			email: null,
			phone: null,
			title: null,
			role: null,
		}
	],
	// vehicleInfo.vue
	vehicles: [
	    {
	        vehicleNumber: null,
	        vin: null,
	        vehicleMake: null,
	        vehicleModel: null,
	        vehicleYear: null
	    }
	],
});
Vue.prototype.$formValid = formValidProps;
Vue.prototype.$sdOrder = createOrderProps;


router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.isLoggedIn)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!store.state.auth.loggedIn) {
			next({
				path: '/',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

// Vue.filter('capitalize', function(str) {
// 	console.log(str);
// 	if (!str) {
// 		return str.charAt(0).toUpperCase() + str.slice(1);
// 	}
// 	return null;
// });
Vue.filter('momentDate', function(dateString) {
	if (dateString) {
		var dateObject = new Date(dateString);
		var momentObj = moment(dateObject);
		var momentString = momentObj.format('MM-DD-YYYY HH:mm');
		return momentString;
	}
	return '';
});
Vue.filter('usdFormat', function(amount) {
	console.log(amount);
	if (amount) {
		amount = parseInt(amount, 10)
		const formattedAmount = amount.toFixed(2)
		return `$ ${formattedAmount}`;
	}
	return '';
});

new Vue({
	created () {
		AOS.init();
	  },
	router,
	vuetify,
	store,
	render: (h) => h(App),
}).$mount('#app');
