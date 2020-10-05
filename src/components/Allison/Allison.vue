<template>
	<v-container fluid fill-height class="grey darken-4">
		<v-row class="ma-0" align="center" justify="center">
			<AppBar></AppBar>
			<!-- <Banner></Banner> -->
		</v-row>
		<v-row class="ma-0" align="center" justify="center">
			<v-card>
				<v-card-title>Testing</v-card-title>
				<v-card-text>
					bla bla bla bla bla bla bla bla bla
				</v-card-text>
			</v-card>
		</v-row>
	</v-container>
</template>
<script>
import AppBar from './components/appbar.vue';
// import Banner from './components/banner.vue';
export default {
	name: "Allisons_Page",
	components: {
		AppBar,
		// Banner
	},
	data() {
		return {}
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>