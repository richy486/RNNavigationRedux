import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const HomeScreen = ({ navigation, dispatch }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Home Screen, This is just a holder so we can display modal screens on top
    </Text>
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
