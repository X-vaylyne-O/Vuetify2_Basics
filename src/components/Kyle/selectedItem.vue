<template>
	<v-col class="d-flex text-center">
		<v-scroll-y-transition mode="out-in">
			<div
				v-if="!selected"
				class="title grey--text text--lighten-1 font-weight-light"
				style="align-self: center"
			>
				Select a User
			</div>
			<v-card
				v-else
				:key="selected.id"
				class="pt-6 mx-auto"
				flat
				max-width="400"
			>
				<v-card-text>
					<v-avatar v-if="avatar" size="88">
						<v-img
							:src="`https://avataaars.io/${avatar}`"
							class="mb-6"
						></v-img>
					</v-avatar>
					<h3 class="headline mb-2">
						{{ selected.name }}
					</h3>
					<div class="blue--text mb-2">
						{{ selected.email }}
					</div>
					<div class="blue--text subheading font-weight-bold">
						{{ selected.username }}
					</div>
				</v-card-text>
				<v-divider></v-divider>
				<v-row class="text-left" tag="v-card-text">
					<v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
						Company:
					</v-col>
					<v-col>{{ selected.company.name }}</v-col>
					<v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
						Website:
					</v-col>
					<v-col>
						<a :href="`//${selected.website}`" target="_blank">{{
							selected.website
						}}</a>
					</v-col>
					<v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
						Phone:
					</v-col>
					<v-col>{{ selected.phone }}</v-col>
				</v-row>
			</v-card>
		</v-scroll-y-transition>
	</v-col>
</template>

<script>
const avatars = [
	"?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
	"?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
	"?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
	"?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
	"?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly",
];

export default {
	props: {
		value: Object,
	},
	data: () => ({
		//
		avatar: null,
	}),
	methods: {
		//
		randomAvatar() {
			this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
		},
	},
	computed: {
		//
		selected() {
			return this.value;
		},
	},
	watch: {
		selected: {
			immediate: true,
			handler(value) {
				this.randomAvatar();
			},
		},
	},
	created() {
		//
	},
};
</script>

<style lang='scss' scoped>
</style>