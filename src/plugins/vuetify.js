import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const options = {
	breakpoint: {
		thresholds: {
			xl: 2400,
		},
	},
	icons: {
		iconfont: 'fa' || 'mdi',
	},
	theme: {
		themes: {
			light: {
				knightRed: '#b10021',
				knightGold: '#fe9915',
				knightGrey: '#222222',
				knightLightGrey: '#d9d9d9',
				primary: '#0069bd',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#0069bd',
				success: '#4CAF50',
				warning: '#FFC107',
			},
		},
	},
};

export default new Vuetify(options);
