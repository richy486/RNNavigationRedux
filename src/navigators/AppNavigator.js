import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import SecondScreen from '../components/SecondScreen';
import DetailScreen from '../components/DetailScreen';
import SideMenuScreen from '../components/SideMenuScreen';

export const MainStackNavigator = StackNavigator(
  {
    MainScrn: { screen: MainScreen },
    Detail: { screen: DetailScreen },
  }
);

export const MainTabNavigator = TabNavigator(
  {
    MainStack: { 
      screen: MainStackNavigator,
    },
    SecondScreen: { 
      screen: SecondScreen,
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export const LoginNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
  }
);

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Main: { screen: MainTabNavigator, },
    Login: { screen: LoginNavigator },
    SideMenu: { screen: SideMenuScreen },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
