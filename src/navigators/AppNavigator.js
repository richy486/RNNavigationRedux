import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

export const MainNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
  }
);

// export const ProfileNavigator = StackNavigator(
//   {
//     Profile: { screen: ProfileScreen },
//   },
//   {
//     mode: 'card',
//     headerMode: 'float',
//   }
// );

export const AppNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Main: { screen: MainNavigator },
    // Main: { screen: MainScreen },
    Login: { screen: LoginScreen },
    // Profile: { screen: ProfileNavigator },
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
