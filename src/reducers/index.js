import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator, MainNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.

// navigation.dispatch({ type: 'Main' })}
        // dispatch(NavigationActions.navigate({ routeName: 'Main' }))}

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

// const mainAction = AppNavigator.router.getActionForPathAndParams('Home');
// const mainNavState = AppNavigator.router.getStateForAction(mainAction);
// const initialNavState = mainNavState;

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
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

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