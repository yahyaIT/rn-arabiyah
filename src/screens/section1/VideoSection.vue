<template>
	<nb-container>
		<header :nav="navigation">Video</header>
			<nb-view :style="{ flex: 1 }">
				<web-view
					:source="{uri: 'https://www.youtube.com/channel/UCo4LK8NYLkjXovZyjAgp75g'}"
					:style="{ height: '100%', width: '100%' }"
				/>
			</nb-view>
	</nb-container>
</template>

<script>
	import Header from '../../components/Header';
	import { WebView } from 'react-native-webview';

	export default {
		components: {
			Header,
			WebView,
		},
		props: {
			navigation: Object,
		},
	}
</script>