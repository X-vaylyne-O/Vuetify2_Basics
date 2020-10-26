<template>
	<div>
		<v-toolbar>
			<v-toolbar-title> Kyle's Page</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-icon @click="navDrawer = true">mdi-menu</v-icon>
		</v-toolbar>
		<NavDrawer v-model="navDrawer" />
		<v-container fluid fill-height>
			<v-row justify="center">
				<v-col cols="10">
					<v-card>
						<v-card-title class="indigo white--text headline">
							User Directory
						</v-card-title>
						<v-row class="pa-4" justify="space-between">
							<v-col cols="5">
								<v-treeview
									:active.sync="active"
									:items="items"
									:load-children="fetchUsers"
									:open.sync="open"
									activatable
									color="primary"
									open-on-click
									transition
								>
									<template v-slot:prepend="{ item }">
										<v-icon v-if="!item.children">
											mdi-account
										</v-icon>
									</template>
								</v-treeview>
							</v-col>

							<v-divider vertical></v-divider>

							<SelectedItem v-if="selected" v-model="selected" />
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import NavDrawer from "./components/navDrawer";
import Users from "./userData";
import SelectedItem from "./selectedItem";

export default {
	name: "Kyles_Page",
	components: { SelectedItem, NavDrawer },
	data: () => ({
		active: [],
		open: [],
		users: [],
		navDrawer: false,
	}),

	computed: {
		items() {
			return [
				{
					name: "Users",
					children: this.users,
				},
			];
		},
		selected() {
			if (!this.active.length) return undefined;

			const id = this.active[0];

			return this.users.find((user) => user.id === id);
		},
	},

	watch: {},
	methods: {
		async fetchUsers(item) {
			const pause = (ms) =>
				new Promise((resolve) => setTimeout(resolve, ms));
			try {
				//
				await pause(1500);
				this.users = Users;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
