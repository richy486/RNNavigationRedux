import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


const SideMenuScreen = ({ counter, dispatch }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      SideMenu Screen
    </Text>
    <LoginStatusMessage />
    <AuthButton />
    <Text>
      {counter}
    </Text>
    <Button
      onPress={() =>
        dispatch({ type: 'Increase' })}
      title="Increase"/>
    <Button
      onPress={() =>
        dispatch({ type: 'Decrease' })}
      title="Decrease"/>
    <Button
      title="Close"
      onPress={() =>
        dispatch(NavigationActions.back())}/>
  </View>
);

SideMenuScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.score.counter
});

SideMenuScreen.navigationOptions = {
  title: 'SideMenu',
};

export default connect(mapStateToProps)(SideMenuScreen);