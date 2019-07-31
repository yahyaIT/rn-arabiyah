<template>
	<nb-container>
		<header :nav="navigation">Menu</header>
		<nb-view class="screen">
			<nb-text class="main-text">Silakan Pilih Metode Belajar</nb-text>
			<nb-view class="button-container">
				<touchable-opacity class="main-button" :on-press="textSection">
					<nb-icon name="book" type="Entypo" class="main-icon"/>
					<nb-text class="white">Teks & Audio</nb-text>
				</touchable-opacity>
				<touchable-opacity class="main-button" :on-press="videoSection">
					<nb-icon name="clapperboard" type="Entypo" class="main-icon"/>
					<nb-text class="white">Video</nb-text>
				</touchable-opacity>
			</nb-view>
		</nb-view>
	</nb-container>
</template>

<script>
	import Header from '../components/Header';

	export default {
		components: {
			Header,
		},
		props: {
			navigation: Object,
		},
		data: {
			isConnected: ''
		},
		methods: {
			textSection() {
				this.navigation.navigate('PageList')
			},
			videoSection() {
				this.navigation.navigate('VideoSection')
			},
			handleConnectivityChange(isConnected) {
				alert(JSON.stringify(isConnected));
			},
		},
	}
</script>

<style>
	.screen {
		padding: 20;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.main-button {
		width: 47%;
		border-color: #b98068;
		background-color: #fffef7; 
		border-width: 1;
		border-radius: 25;
		padding-top: 25;
		padding-bottom: 25;
		align-items: center;
		justify-content: center;
	}
	.main-icon {
		color: #fff;
		font-size: 65;
		color: #b98068;
		margin-bottom: 10;
	}
	.button-container {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.main-text {
		position: absolute;
		top: 125;
		font-family: dmserif-regular;
		font-size: 25;
		margin-bottom: 35;
		align-self: center;
	}
	.white {
		color: #b98068;
		font-size: 18;
		font-family: gotham-regular;
		align-self: center;
	}
</style>