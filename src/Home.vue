<template>
	<nb-container class="container">
		<nb-view padder class="container">
			<nb-icon name="book" type="AntDesign" class="big-icon"/>
			<nb-text class="title">Arabiyyah App</nb-text>
			<nb-text class="tagline">'Al-Arobiyyah bayna Yadaik'</nb-text>
			<touchable-opacity :on-press="menu">
				<nb-view class="button-regular colored">
					<nb-text class="color0 font-gotham">Menu</nb-text>
				</nb-view>
			</touchable-opacity>
			<touchable-opacity :on-press="start">
				<nb-view class="button-regular outline">
					<nb-text class="color font-gotham">About</nb-text>
				</nb-view>
			</touchable-opacity>
		</nb-content>
	</nb-container>
</template>

<script>
	export default {
		props: {
			navigation: Object,
		},
		methods: {
			menu() {
				this.navigation.navigate('Main')
			},
			start() {
				this.navigation.navigate('About')
			}
		}
	}
</script>

<style>
	.container {
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.big-icon {
		font-size: 110;
		color: #b98068;
		align-self: center;
	}
	.button-regular {
		border-radius: 40;
		padding: 14;
		width: 275;
		align-items: center;
		justify-content: center;
		margin-top: 10;
	}
	.colored {
		background-color: #b98068;
	}
	.outline {
		background-color: #fff;
		border-width: 1;
		border-color: #b98068;
	}
	.color0 {
		color: #fff;
	}
	.color {
		color: #b98068;
	}
	.title {
		align-self: center;
		font-family: dmserif-regular;
		font-size: 45;
		margin-top: 17;
	}
	.tagline {
		align-self: center;
		font-family: gotham-regular;
		font-size: 14;
		margin-top: 4;
		margin-bottom: 115;
	}
	.font-gotham {
		font-family: gotham-regular;
	}
</style>
