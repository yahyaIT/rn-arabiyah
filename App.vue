<template>
	<app-navigation></app-navigation>
</template>

<script>
	import React from 'react';
	import Vue from 'vue-native-core';
	import { VueNativeBase } from 'native-base';
	import AppNavigation from './src/router.js';

	Vue.use(VueNativeBase);

	export default {
		components: { AppNavigation }
	}
</script>