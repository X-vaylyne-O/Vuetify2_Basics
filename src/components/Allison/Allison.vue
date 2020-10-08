<template>
	<v-container fluid fill-height class="pa-5">
		<v-row class="ma-0" align="center" justify="center">
			<v-col>
				<v-card>
					<v-card-title class="deep-purple accent-1">
						<v-avatar
						 color="teal accent-2"
						 size="40">
							<img
							 src="./media/butterfly.png"
							 alt="Butterfly">
						</v-avatar>
						<v-spacer></v-spacer>
						Allison Broughton
					</v-card-title>
					<v-card-text class="pa-5">
						{{ cardText }}
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
// import AppBar from './components/appbar.vue';
// import Banner from './components/banner.vue';
export default {
	name: "Allisons_Page",
	components: {
		// AppBar,
		// Banner
	},
	data() {
		return {
			cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>