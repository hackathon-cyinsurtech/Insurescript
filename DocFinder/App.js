import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './app/reducers'

import { StyleSheet, Text } from 'react-native'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/containers/HomeScreen'
import SearchScreen from './app/containers/SearchScreen'
import SearchResults from './app/containers/SearchResults'
import * as 'firebase' from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAWDYFao_OwSOfbqE8G8EZQDSAM6BLFogw",
  authDomain: "docfinder-16e52.firebaseapp.com",
  databaseURL: "https://docfinder-16e52.firebaseio.com",
  projectId: "docfinder-16e52",
  storageBucket: "docfinder-16e52.appspot.com",
  messagingSenderId: "986856275247"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const DocFinder = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchScreen: { screen: SearchScreen },
  SearchResults: { screen: SearchResults }
},
{
  headerMode: 'float',
  initialRouteName: 'HomeScreen'

});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DocFinder />
      </Provider>
    );
  }
}

export const DocStorage {
  var config = {
  apiKey: "AIzaSyAWDYFao_OwSOfbqE8G8EZQDSAM6BLFogw",
  authDomain: "docfinder-16e52.firebaseapp.com",
  databaseURL: "https://docfinder-16e52.firebaseio.com",
  projectId: "docfinder-16e52",
  storageBucket: "docfinder-16e52.appspot.com",
  messagingSenderId: "986856275247"
};
