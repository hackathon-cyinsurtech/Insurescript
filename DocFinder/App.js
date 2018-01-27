import React from 'react';
import { StyleSheet, Text } from 'react-native'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen'
import SearchScreen from './containers/SearchScreen'

export const DocFinder = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchScreen: { screen: SearchScreen }
},
{
  headerMode: 'float',
  initialRouteName: 'HomeScreen'

});

export default class App extends React.Component {
  render() {
    return <DocFinder />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
