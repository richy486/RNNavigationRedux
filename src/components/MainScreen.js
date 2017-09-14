import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';

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
    <FlatList
      data={[{key: 'a'}, {key: 'b'}]}
      renderItem={({item}) => <Text>{item.key}</Text>}/>
  </View>
);

MainScreen.navigationOptions = props => {
  const { navigation } = props;
  const { dispatch } = navigation;
  return {
    headerTitle: 'Main Screen',
    headerLeft: (
      <Button
        title='Menu'
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'SideMenu' }))
        }/>
    ),
  };
};

MainScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.score.counter
});

export default connect(mapStateToProps)(MainScreen);
