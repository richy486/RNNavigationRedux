import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator, MainNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Home screen, with the Main screen on top.
// Home is the holder to be able to display global modal screens such as the Login screen
// Main is a tab navigator that holds another Main stack navigator in it's first tab
const homeNavAction = AppNavigator.router.getActionForPathAndParams('Home');
const homeNavState = AppNavigator.router.getStateForAction(homeNavAction);
const mainNavAction = NavigationActions.navigate({ routeName: 'Main' })
const initialNavState = AppNavigator.router.getStateForAction(mainNavAction, homeNavState);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case '@@redux/INIT':
      console.log("#### INIT ####")
      break;
    default:
      console.log("==== default ====")
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  console.log("Route action: ", action, ", ", state)
  

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const loggedOutAuthState = { isLoggedIn: false, username: "n/a" };

function auth(state = loggedOutAuthState, action) {
  switch (action.type) {
    case 'Login':
      console.log("### Log ININ")
      return { ...state, isLoggedIn: true, username: "batman" };
    case 'Logout':
      console.log("### Log out")
      return { ...state, isLoggedIn: false, username: "---" };
    default:
      return state;
  }
}

const scoreInitialState = { counter: 3 };

function score(state = scoreInitialState, action) {
  switch (action.type) {
    case 'Increase':
      return { ...state, counter: state.counter + 1 };
    case 'Decrease':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  score,
});

export default AppReducer;