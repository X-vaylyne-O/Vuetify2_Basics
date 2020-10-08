<template>
	<div>
		<v-app-bar
		 absolute
		 color="deep-purple"
		 dark
		 shrink-on-scroll
		 src="https://picsum.photos/1920/1080?random">
			<template v-slot:img="{ props }">
				<v-img
				 v-bind="props"
				 gradient="to top right, rgba(124, 77, 255,.8), rgba(179, 136, 255,.6)"></v-img>
			</template>
			<v-btn to="/" icon>
				<v-icon>mdi-skip-backward-outline</v-icon>
			</v-btn>
			<v-toolbar-title>Allison Broughton</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-coffee</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>