<template>
	<nb-container>
		<header :nav="navigation">About</header>
		<nb-content class="container">
			<nb-text class="title">Arabiyah App</nb-text>
			<nb-view class="card">
				<nb-text class="text">
					Aplikasi ini bersumber dari buku Al-‘Arbiyyatu baina Yadaika ( Bahasa Arab dihadapan Anda ) yang merupakan buku program belajar Bahasa Arab untuk segala tingkatan yang disusun berdasarkan penelitian mendalam tentang pengajaran Bahasa Arab yang disusun oleh pakar Bahasa Arab yang sangat kompeten dibidangnya.

					Bertujuan untuk memudahkan pengajaran Bahasa Arab untuk orang asing dengan memanfaatkan teknologi modern demi kemajuan (pengajaran) Bahasa Arab.
				</nb-text>
			</nb-view>
		</nb-content>
	</nb-container>
</template>

<script>
	import Header from './components/Header.vue';

	export default {
		components: {
			Header,
		},
		props: {
			navigation: Object,
		}
	}
</script>

<style>
	.container {
		padding: 11;
		background-color: #ffe6d6;
	}
	.title {
		font-family: gotham-regular;
		align-self: center;
		font-size: 28;
		margin-top: 28;
		margin-bottom: 28;
		color: #272727;
	}
	.card {
		background-color: #fff;
		border-radius: 9;
		padding: 15;
		padding-top: 23;
		padding-bottom: 23;
		margin-bottom: 15;
		z-index: -1;
	}
	.text {
		font-family: gotham-light;
		font-size: 14;
		margin-bottom: 17;
	}
</style>