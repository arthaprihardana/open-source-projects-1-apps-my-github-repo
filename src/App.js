/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, UIManager, View, StatusBar} from 'react-native';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {connect, Provider} from 'react-redux';
import {Scene, Router, Actions, Reducer, ActionConst, Overlay, Modal, Tabs, Drawer, Stack, Lightbox} from 'react-native-router-flux';

import configureStore from './store';
const store = configureStore();
const mapStateToProps = state => ({
    state: state.nav,
});
const RouterWithRedux = connect(mapStateToProps)(Router);

import { STATUSBAR_COLOR } from './assets/colors';

// PAGES
import SplashScreen from './containers/pages/splashscreen';
import Login from './containers/pages/login';
import Home from './containers/pages/home';
import { NavBar, Drawer as DrawerView } from './containers/components';
// import OAuthManager from 'react-native-oauth';

// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// 	android:
// 		'Double tap R on your keyboard to reload,\n' +
// 		'Shake or press menu button for dev menu',
// });

const transitionConfig = () => ({
    screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#FFFFFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

let exitCount = 0;
const onBackPress = () => {
    let route = Actions.state.routes;
    let main = route[0].routes[0].routes;
	console.log('router ==>', route);
	console.log('main ==>', main);
};

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {

	// componentDidMount() {
	// 	const manager = new OAuthManager('repoapps');
	// 	const config =  {
	// 		github: {
	// 			client_id: '434b4fbde35ce7216907',
	// 			client_secret: '110a33378b37d8d06b58c84b13a453d5ab1fd681'
	// 		}
	// 	}
	// 	manager.configure(config);

	// 	manager.authorize('github')
	// 		.then(resp => console.log(resp))
	// 		.catch(err => console.log(err));
	// }

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={STATUSBAR_COLOR} barStyle="dark-content" />
				<Provider store={store.store}>
					<RouterWithRedux createReducer={reducerCreate} getSceneStyle={getSceneStyle} backAndroidHandler={onBackPress}>
						<Modal key="modal" hideNavBar transitionConfig={transitionConfig}>
							<Scene key="splashscreen" component={SplashScreen} hideNavBar hideTabBar initial />
							<Scene key="login" component={Login} hideNavBar hideTabBar />
							<Lightbox key="lightbox">
								<Stack key="root">
									<Scene key="main" hideNavBar type={ActionConst.RESET} panHandlers={null}>
										<Drawer
											ref={ref => this._drawermenu = ref}
											hideNavBar
											key="menu"
											drawerPosition="left"
											onExit={() => console.log('Drawer closed')}
											onEnter={() => console.log('Drawer opened')}
											contentComponent={() => <DrawerView />}
											drawerWidth={300}>
											<Scene key="home" component={Home} navBar={() => <NavBar title="Home" isMenu={true} onPressMenu={() => Actions.drawerOpen()} />}  />
										</Drawer>
									</Scene>
								</Stack>
							</Lightbox>
						</Modal>
					</RouterWithRedux>
				</Provider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: '#F5FCFF',
	},
	// welcome: {
	// 	fontSize: 20,
	// 	textAlign: 'center',
	// 	margin: 10,
	// },
	// instructions: {
	// 	textAlign: 'center',
	// 	color: '#333333',
	// 	marginBottom: 5,
	// },
});
