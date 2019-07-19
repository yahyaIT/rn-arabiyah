<template>	
	<nb-header :style="{ backgroundColor: '#fff' }">
		<nb-left :style="{ flex: 1 }">
			<nb-button transparent :on-press="() => nav.goBack()">
				<nb-icon :style="{ color: '#b98068' }" name="left" type="AntDesign"/>
			</nb-button>
		</nb-left>
		<nb-body :style="{ alignItems: center }">
			<nb-title class="this-header"><slot></slot></nb-title>
		</nb-body>
		<nb-right :style="{ flex: 1 }"/>
	</nb-header>
</template>

<script>
	export default {
		props: {
			nav: Object,
		}
	}
</script>

<style>
	.this-header {
		color: #b98068;
		font-family: gotham-regular;
	}
</style>