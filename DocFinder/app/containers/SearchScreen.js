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
        <Text style={styles.header}>Feeling down? :(</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    alignSelf: 'flex-start',
    color: 'blue',
    fontSize: 34,
    marginTop: 50
  },
  searchBox: {
    backgroundColor: '#fff',
    width: 300,
    height: 30
  }
});
