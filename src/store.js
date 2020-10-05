import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		auth: {
			loggedIn: localStorage.loggedIn || false,
			token: localStorage.token,
			uuid: localStorage.uuid,
			ppsAccountID: localStorage.ppsAccountID,
			validated: localStorage.validated,
			//
			email: localStorage.email,
			fullname: localStorage.fullname,
			firstName: localStorage.firstName,
			lastName: localStorage.lastName,
			//
			usDotNumber: localStorage.usDotNumber,
			mcNumber: localStorage.mcNumber,
			//
			carrierName: localStorage.carrierName,
			carrierCode: localStorage.carrierCode,
			doingBusinessAs: localStorage.doingBusinessAs,
			//
			mailingAddress: localStorage.mailingAddress,
			physicalAddress: localStorage.physicalAddress,
			contact: localStorage.contact,
			//
			leadType: localStorage.leadType,
			intrastate: localStorage.intrastate,
			fleetSize: localStorage.fleetSize,
			spanishSpeaking: localStorage.spanishSpeaking,
			//
			expTime: parseInt(localStorage.expTime, 10), // when token expires in Epoch Time (seconds from 1970 something)
			refreshTime: parseInt(localStorage.refreshTime, 10)
		}
	},
	mutations: {

	},
	getters: {

	}
})
