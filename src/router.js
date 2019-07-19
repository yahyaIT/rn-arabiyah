import { StackNavigator } from 'vue-native-router';

import Home from './Home.vue';
import About from './About.vue';
import Main from './screens/Main.vue';

import PageList from './screens/PageList.vue';
import PageViewer from './screens/section0/PageViewer.vue';

import VideoSection from './screens/section1/VideoSection.vue';

const AppNavigation = StackNavigator(
	{
		Home,
		About,
		Main,

		PageList,
		PageViewer,

		VideoSection,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

export default AppNavigation;