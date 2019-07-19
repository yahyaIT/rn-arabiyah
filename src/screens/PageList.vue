<template>
	<nb-container>
		<header :nav="navigation">Daftar Pelajaran</header>
		<nb-content class="container">
			<nb-view class="list-container" v-for="(data, index) in cells">
				<touchable-opacity class="list-button" :on-press="() => dead(index)">
					<nb-text class="list-text">{{ data.title }}</nb-text>
				</touchable-opacity>
			</nb-view>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from '../components/Header.vue';
	import textbook from '../db/textbook';

	export default {
		components: {
			Header,
		},
		props: {
			navigation: Object,
		},
		computed: {
			cells() {
				return textbook;
			}
		},
		methods: 
		{
			dead(param) {
				this.navigation.navigate('PageViewer', { pageNumber: param});
			}			
		}
	}
</script>

<style>
	.container {
		padding: 15;
		background-color: white;
	}
	.list-button {
		padding: 15;
		border-radius: 15;
		background-color: #b98068;
		margin-bottom: 15;
	}
	.list-text {
		font-family: gotham-regular;
		align-self: center;
		color: white;
	}
</style>