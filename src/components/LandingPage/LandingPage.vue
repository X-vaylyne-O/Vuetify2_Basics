<template>
	<v-container fluid fill-height align="center">
		<v-row class="ma-0" align="center" justify="center">
			<v-col v-for="(subject, index) in testSubjects" :key="`testSubject_${index}_${subject}`" cols="12" class="pa-0">
				<v-row class="ma-0" align="center" justify="center">
					<v-col cols="3">
						<v-btn block @click="$router.push({ path: `${subject}` })">{{subject}}</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "LandingPage",
	components: {
	},
	data() {
		return {
			testSubjects: [
				'Ian',
				'Kahlil',
				'Allison',
				'Brooke',
				'Alex',
				'Kyle',
				'Marvin',
				'Hunter',
				'Reagan',
				'Jon',
			]
		}
	},
	methods: {
	},
	computed: {
	},
	watch: {
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
