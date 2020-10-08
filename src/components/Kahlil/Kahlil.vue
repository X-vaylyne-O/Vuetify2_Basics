<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <!-- <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        >
		<img src="" alt="">
		</v-avatar> -->

      <v-btn elevation="2" fab icon
   @click="$router.push({ path: '/' })"
	  >home</v-btn>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent" rounded>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>
                     {{item}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AboutMe from './aboutMe'
export default {
	name: "Kahlils_Page",
	components: {
		
	},
	data() {
		return {
			isLoaded: false,
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
			],
			items: [
				'About Me',
				'something',
				'something',
				'something'
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
