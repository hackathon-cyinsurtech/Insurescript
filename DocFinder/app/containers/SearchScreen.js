import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen',
    header: null
  };

  handleSearchClick() {
    this.props.navigation.navigate('SearchResults')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Feeling down? :(</Text>
        <Text>Describe your symptoms below and we'll try to find an appropriate healthcare professional to help!</Text>
        <TextInput style={styles.searchBox}/>
        <Button title="Search" onPress={this.handleSearchClick.bind(this)} />
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
