import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

export default class SearchResults extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen'
  };

  handleSearchClick() {
    this.props.navigation.navigate('SearchResults')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You have cancer</Text>
        <Text>Dr. Fankenstein is your nearest doctor</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBox: {
    width: 380,
    height: 80,
    backgroundColor: '#fff',
    borderColor: 'pink',
    borderWidth: 1
  }
});
