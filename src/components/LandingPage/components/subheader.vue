<template>
	<div class="headerPos headerText animated-text-fill">
		2020
	</div>
</template>

<script>

export default {
	name: "SubHeader",
	components: {
	},
	data() {
		return {
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
.headerText {
	/*font-family: 'Josefin Sans', sans-serif;*/
	font-size: 3em;
	line-height: 1em;
	color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
}
.animated-text-fill {
  background-image: -webkit-linear-gradient(transparent 50%, black 50%);
  background-position: 0 1000px;
  background-size: 1000px 1000px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-animation: stripes 5s linear;
  animation: stripes 5s linear;
  animation-fill-mode: forwards;
}

/* With minus the effect moves up, positive moves down */

@-webkit-keyframes stripes {
  0% {
    background-position: 0 0;
  }
}
@keyframes stripes {
  10% {
    background-position: 0 15%;
  }
}
@keyframes stripes {
  25% {
    background-position: 0 25%;
  }
}
@keyframes stripes {
  50% {
    background-position: 0 45%;
  }
}
@keyframes stripes {
  75% {
    background-position: 0 45%;
  }
}
@keyframes stripes {
  100% {
    background-position: 0 100%;
  }
}
</style>
