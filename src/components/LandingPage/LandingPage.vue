<template>
	<div style="position: relative; height: 100%">
		<AwesomeBg></AwesomeBg>

		<v-row class="ma-0" style="height: 100%" justify="center" align="end">
			<v-col cols="12">
				<v-row class="ma-0" justify="center">
					<v-col cols="6" class="text-right pa-0">
						<SubHeader data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1200"></SubHeader>
					</v-col>
					<v-col cols="8" class="text-center pa-0">
						<Header data-aos="flip-up" data-aos-delay="1000" data-aos-duration="800"></Header>
					</v-col>
				</v-row>
			</v-col>

			<v-col cols="11">
				<v-row class="ma-0" justify="end">
					<v-col cols="8" class="pa-0">
						<v-row class="ma-0" style="height: 100%">
							<v-col cols="12">
							</v-col>
							<v-col cols="12" class="designBg">
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="4" class="pa-0">
						<v-row class="ma-0">
							<v-col cols="12" class="roundedCorner elevation-5 pa-5"  data-aos="flip-down" data-aos-delay="2500" data-aos-duration="1000">
								<v-row class="ma-0 headerContainer" align="center" justify="center">
									<v-col
										v-for="(subject, index) in testSubjects"
										:key="`testSubject_${index}_${subject}`"
										cols="6"
										class="text-center"
									>
										<v-btn
											block
											class="gradient-button gradient-button-1"
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
			</v-col>
		</v-row>
	</div>
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
	background-color: #222;
	border-radius: 15px;
}
.designBg {
	height: 400px;
	background-image: url('../../assets/design.svg');
	background-repeat: no-repeat;
	background-size: contain;
}

.gradient-button {
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #FFF;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    display: inline-block;
    border-radius: 25px;
}
.gradient-button:hover{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.gradient-button-1 {background-image: linear-gradient(to right, #2BCECD 0%, #1C6EA4 50%, #8D3DC5 100%);}
.gradient-button-1:hover { background-position: right center; }
</style>
