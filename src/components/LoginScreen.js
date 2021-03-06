import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

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

const LoginScreen = ({ navigation, dispatch }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"/>
    <Button
      onPress={() => 
        // navigation.dispatch({ type: 'Main' })}
        dispatch(NavigationActions.navigate({ routeName: 'ForgotPassword' }))}
      title="Forgot password"/>
  </View>
);

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LoginScreen);
