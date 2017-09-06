import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ counter, dispatch }) => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
    <Text>
      {counter}
    </Text>
    <Button
      onPress={() =>
        dispatch({ type: 'Increase' })}
      title="Increase"
    />
    <Button
      onPress={() =>
        dispatch({ type: 'Decrease' })}
      title="Decrease"
    />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Main Screen',
};

MainScreen.propTypes = {
  //counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.score.counter
});

export default connect(mapStateToProps)(MainScreen);
