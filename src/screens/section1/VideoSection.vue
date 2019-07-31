<template>
	<nb-container>
		<header :nav="navigation">Video</header>
			<nb-view class="notice" v-if="nwtice">
				<nb-text class="txt-notice">Fitur ini membutuhkan akses internet</nb-text>
			</nb-view>
			<nb-view></nb-view>
			<nb-view :style="{ flex: 1 }">
				<web-view
					:source="{uri: 'https://pondokinformatika.com/video-arab'}"
					:style="{ height: '100%', width: '100%' }"
				/>
			</nb-view>
	</nb-container>
</template>

<script>
	import _ from 'lodash';
	import Header from '../../components/Header';
	import { WebView } from 'react-native-webview';

	export default {
		components: {
			Header,
			WebView,
		},
		data: () => ({
			nwtice: true,
		}),
		props: {
			navigation: Object,
		},
		mounted() {
			_.delay(() => {this.nwtice = false}, 5000)
		}
	}
</script>

<style>
	.notice {
		background-color: #ffc107;
		padding: 3;
	}
	.txt-notice {
		font-family: gotham-light;
		align-self: center;
		letter-spacing: 0;
	}
</style>