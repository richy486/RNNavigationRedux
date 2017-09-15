import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ counter, contentData, dispatch }) => (
  <View style={styles.container}>
    <FlatList
      data={contentData}
      renderItem={({ item }) => (
            <View>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: item.thumbnailUrl }}/>
              <Text>{item.title}</Text>
            </View>
          )}
      keyExtractor={item => item.id}

      />
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
  counter: state.score.counter,
  contentData: state.content.data,
});

export default connect(mapStateToProps)(MainScreen);
