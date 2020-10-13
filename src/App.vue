<template>
	<v-app>
		<v-main>
			<v-container fluid class="ma-0 pa-0" fill-height>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
	},
	mixins: [
	],
	data() {
		return {
		}
	},
	methods: {
	},
	computed: {
	},
	created() {
	},
	destroyed() {
	}
};
</script>

<style>
#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #000 !important;
}
body::-webkit-scrollbar {
  width: 11px;
  background: transparent;
}
body::-webkit-scrollbar-track {
	background: #BDBDBD;
}
body::-webkit-scrollbar-thumb {
	background-color: #222;
}
a:hover {
	text-decoration: none !important;
	color: inherit;
}
</style>