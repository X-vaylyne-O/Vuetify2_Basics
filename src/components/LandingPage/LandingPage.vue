<template>
	<v-row class="ma-0" style="position: relative;" justify="center">
		<AwesomeBg></AwesomeBg>

		<v-col cols="6" align-self="center" class="text-right pa-0">
			<SubHeader data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1200"></SubHeader>
		</v-col>
		<v-col cols="8" align-self="center" class="text-center pa-0">
			<Header data-aos="flip-up" data-aos-delay="1000" data-aos-duration="800"></Header>
		</v-col>

		<v-col cols="11" class="pt-12 mt-12" data-aos="flip-down" data-aos-delay="2500" data-aos-duration="1000">
			<v-row class="ma-0" justify="end">
				<v-col cols="4" class="roundedCorner elevation-5 pa-5">
					<v-row class="ma-0 headerContainer" align="center" justify="center">
						<v-col
							v-for="(subject, index) in testSubjects"
							:key="`testSubject_${index}_${subject}`"
							cols="6"
						>
							<v-btn
								block
								@click="$router.push({ path: `${subject}` })"
							>
								{{subject}}
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import AwesomeBg from './components/awesomeBg.vue';
import Header from './components/header.vue';
import SubHeader from './components/subheader.vue';

export default {
	name: "LandingPage",
	components: {
		AwesomeBg,
		Header,
		SubHeader
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
	},
	mounted() {

	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roundedCorner {
	border-radius: 15px;
}
</style>
