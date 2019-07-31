<template>
	<nb-container>
		<nb-header :style="{ backgroundColor: '#fff' }">
			<nb-left :style="{ flex: 1 }">
				<nb-button transparent :on-press="() => home()">
					<nb-icon :style="{ color: '#b98068' }" name="left" type="AntDesign"/>
				</nb-button>
			</nb-left>
			<nb-body :style="{ alignItems: center }">
				<nb-title class="this-header"><slot></slot></nb-title>
			</nb-body>
			<nb-right :style="{ flex: 1 }"/>
		</nb-header>
		<nb-content :style="{ backgroundColor: '#ffe6d6', padding: 11 }">
			<nb-text class="audio-text">{{ cells.title }}</nb-text>
			<nb-view class="bg-notes">
				<nb-text>
				</nb-text>
				<nb-view :style="{ flex: 1, marginBottom: 23 }" v-for="txt in cells.aside">
					<nb-text class="textbook arabic">{{ txt.a }}</nb-text>
					<nb-text class="textbook">({{ txt.i }})</nb-text>
				</nb-view>
			</nb-view>
			<nb-view class="bg-audio">
				<touchable-opacity v-if="!play" :on-press="() => playAudio()">
					<nb-icon name="play" type="AntDesign" :style="{ fontSize: 40 }" />
				</touchable-opacity>
				<touchable-opacity v-else :on-press="() => stopAudio()">
					<nb-icon name="closecircle" type="AntDesign" :style="{ fontSize: 40 }" />
				</touchable-opacity>
				<nb-text class="timestamp">{{ full }}</nb-text>
			</nb-view>
			<nb-view class="navicon-container">
				<touchable-opacity v-if="index > 0" class="nav-icon" :on-press="() => prev(index-1)">
					<nb-icon class="icony" name="doubleleft" type="AntDesign"/>
				</touchable-opacity>
				<nb-view v-else class="nav-icon disabled">
					<nb-icon class="icony" name="close" type="AntDesign"/>
				</nb-view>

				<touchable-opacity class="nav-icon" :on-press="() => home()">
					<nb-icon class="icony" name="bars" type="AntDesign"/>
				</touchable-opacity>

				<touchable-opacity v-if="index < all-1" class="nav-icon" :on-press="() => next(index+1)">
					<nb-icon class="icony" name="doubleright" type="AntDesign" />
				</touchable-opacity>
				<nb-view v-else class="nav-icon disabled">
					<nb-icon class="icony" name="close" type="AntDesign" />
				</nb-view>
			</nb-view>
		</nb-content>
	</nb-container>
</template>

<script>
	import { BackHandler } from 'react-native';
	import Sound from 'react-native-sound';
	import textbook from '../../db/textbook';

	export default {
		props: {
			navigation: Object,
		},
		data: {
			play: false,
			audio: null,
		},
		computed: {
			cells() {
				let index = this.navigation.state.params.pageNumber;
				return textbook[index];
			},
			cellsFull() {
				return textbook;
			},
			index() {
				return this.navigation.state.params.pageNumber;
			},
			all() {
				return textbook.length;
			},
			full() {
				let taim = this.audio !== null ? this.audio.getDuration() : ''

				return this.timeFormat(taim)
			},
			part() {
				let taim = this.audio !== null ? this.audio.getCurrentTime() : '00'

				return this.timeFormat(taim)
			},
		},
		methods: {
			replace(val) {
				alert(val);
			},
			timeFormat(param) {
				let min = Math.floor( param / 60 ) == 0 ? '00' : Math.floor( param / 60 )
				let sec = Math.round( param % 60 ) == 0 ? '00' : Math.round( param % 60 )

				return min+':'+sec
			},
			setAudio() {
				let audio = new Sound( this.cells.sound, Sound.MAIN_BUNDLE, (error) => {
					if (error) {
						alert('failed to load the sound');
						return;
					}

					this.audio = audio;
				});
			},
			playAudio() {
				this.play = true;
				this.audio.stop();

				this.audio.play(() => {
					this.audio.stop();
					this.play = false;
				});
			},
			stopAudio() {
				this.audio.stop()
				this.play = false
			},
			prev(param) {
				this.stopAudio()
				this.navigation.replace('PageViewer', { pageNumber: param})
			},
			home() {
				this.stopAudio()
				this.navigation.goBack()
			},
			next(param) {
				this.stopAudio()
				this.navigation.replace('PageViewer', { pageNumber: param})
			}
		},
		created() {
			this.setAudio();
		},
		mounted() {
			BackHandler.addEventListener('hardwareBackPress', () => {this.home()});
		}
	}
</script>

<style>
	.this-header {
		color: #b98068;
		font-family: gotham-regular;
	}
	.audio-text {
		font-family: gotham-regular;
		align-self: center;
		font-size: 28;
		margin-top: 28;
		margin-bottom: 28;
		color: #272727;
	}
	.textbook {
		font-family: gotham-light;
		font-size: 14;
		line-height: 19;
	}
	.arabic {
		font-size: 21;
		margin-bottom: 7;
		line-height: 33;
	}
	.bg-notes {
		background-color: #fff;
		border-radius: 9;
		padding: 15;
		padding-top: 23;
		padding-bottom: 23;
		margin-bottom: 15;
		z-index: -1;
	}
	.bg-audio {
		flex-direction: row;
		justify-content: space-between;
		background-color: #fff;
		border-radius: 45;
		padding: 8;
		padding-left: 25;
		padding-right: 25;
		z-index: -1;
		margin-bottom: 10;
	}
	.timestamp {
		font-family: gotham-regular;
		font-size: 22;
		align-self: center;
	}
	.navicon-container {
		flex-direction: row;
		flex: 1;
		justify-content: center;
		margin-bottom: 55;
	}
	.nav-icon {
		padding: 15;
		border-radius: 55;
		margin: 5;
		background-color: #b98068;
	}
	.disabled {
		background-color: #b0b0b0;		
	}
	.icony {
		color: white;
	}
</style>