<template>
	<v-container fluid fill-height class="pa-5" id="allisonBackground">
		<v-row class="ma-0 white" align="center" justify="center">
			<v-col class="glow">
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
						T-Shirts!
					</v-card-title>
					<v-card-text class="pa-5">
						{{ cardText }}
					</v-card-text>
				</v-card>
			</v-col>
			<v-col class="glow">
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
						Lorem Ipsum
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
			cardText: 'Not gonna lie - I just want the tshirt.'
		}
	},
	methods: {},
	computed: {},
	watch: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#allisonBackground {
	background-image: url('./media/scavenger.jpg');
	background-repeat: no-repeat;
	background-size: cover;
}
.glow {
	/*box-shadow: 0px 0px 40px 20px #0ff;*/
	box-shadow:
        0 0 60px 30px #fff,  /* inner white */
        0 0 100px 60px #f0f, /* middle magenta */
        0 0 140px 90px #0ff; /* outer cyan */
}
</style>