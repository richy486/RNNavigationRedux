import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginStatusMessage = ({ isLoggedIn, dispatch, username }) => {
  if (!isLoggedIn) {
    console.log("---  show log out")
    return (
      <View>
        <Text>Please log in</Text>
        <Button
          onPress={() =>
            dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
          title="Profile"/>
      </View>
    );
  }

  console.log("---  show log INININ")
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now'}
      </Text>
      <Text style={styles.welcome}>
        {username}
      </Text>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
        title="Profile"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  username: state.auth.username,
});

export default connect(mapStateToProps)(LoginStatusMessage);
