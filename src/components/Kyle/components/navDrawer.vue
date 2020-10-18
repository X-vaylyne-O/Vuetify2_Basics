<template>
	<v-navigation-drawer
		:value="value"
		@input="(v) => $emit('input', v)"
		absolute
		bottom
		temporary
	>
		<v-list nav dense>
			<v-list-item-group
				v-model="group"
				active-class="primary--text light-blue lighten-5"
			>
				<template v-for="(item, index) in menuItems">
					<v-list-item :key="index" @click="doSomething(item)">
						<v-list-item-title style="text-transform: capitalize">{{
							item.name
						}}</v-list-item-title>
					</v-list-item>
				</template>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	props: {
		value: Boolean,
	},
	data: () => ({
		//
		group: null,
		menuItems: [],
	}),
	methods: {
		doSomething(item) {
			console.log(item);
		},
		//
		generateMenuItems() {
			const items = require
				.context("../routes", true, /(\.vue)$/)
				.keys()
				.map((filename) => {
					const split = filename.split("/");
					return split[1].toLowerCase();
				})
				.map((item) => {
					const split = item.split(".");
					const menuItemObject = {
						name: split[0],
						component: `${split[0]}.${split[1]}`,
						path: `${split[0]}`,
					};
					return menuItemObject;
				});
			this.menuItems = items;
		},
	},
	watch: {
		group() {
			this.$emit("input", false);
		},
	},
	computed: {
		//
	},
	created() {
		//
	},
	mounted() {
		this.generateMenuItems();
	},
};
</script>

<style lang='scss' scoped>
</style>