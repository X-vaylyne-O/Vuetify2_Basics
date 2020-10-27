<template>
	<v-container fluid fill-height class="pa-0">
		<v-row
			v-on:wheel="doSomething"
			:style="currentSlide.class"
			class="ma-0 fill-height"
			justify="center"
			align-content="center"
		>
			<v-col cols="12" class="text-center someBigText">
				{{currentSlide.title}}
			</v-col>
			<v-col cols="12" class="text-center">
				{{currentSlide.subTitle}}
			</v-col>
			<v-col cols="12" class="text-center" align-self="end">
				<!-- {{currentSlide.subTitle}} -->
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SlideContent from './data/slideContent.js';

export default {
	name: "Brookes_Page",
	components: {
	},
	data() {
		return {
			scrollTimeout: null,
			position: 0,
			currentSlide: {}
		}
	},
	methods: {
		doSomething(event) {
			let direction;

			if (this.scrollTimeout) {
				clearTimeout(this.scrollTimeout);
			}

			if (event.deltaY > 0) direction = true;
			if (event.deltaY < 0) direction = false;

			this.scrollTimeout = setTimeout(() => {
				if (direction && this.position < this.slideContent.length - 1) this.position = this.position + 1;
				if (!direction && this.position > 0) this.position = this.position - 1;

				this.currentSlide = this.slideContent[this.position]
			}, 1000)

		}
	},
	computed: {
		slideContent() {
			const { content } = SlideContent;
			return content;
		}
	},
	watch: {
	},
	mounted() {
		this.currentSlide = this.slideContent[0];
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.someBigText {
	font-size: 3em;
	font-weight: 600;
}
</style>
