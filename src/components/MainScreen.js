import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList, Image, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

          // onPressItem={console.log("*** on press item ***")}
          // selected={console.log("*:* on select item *:*")}
// onPress={() => {
//             this.setState({
//               type: 'other'
//             });
//           }}
const MainScreen = ({ counter, contentData, dispatch }) => (
  <View style={styles.container}>
    <FlatList
      data={contentData}
      renderItem={({ item }) => (
        <View style={{height: 200 }}>
          <ImageBackground
            style={{
              flex: 1,
              // resizeMode: 'cover',
            }}
            source={{uri: item.thumbnailUrl }}
            >
            <Text style={{ backgroundColor: 'transparent' }}>{item.title}</Text>
          </ImageBackground> 
        </View>
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

// , flexDirection: 'row'

// onPress={() =>
//               dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
//             }

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
