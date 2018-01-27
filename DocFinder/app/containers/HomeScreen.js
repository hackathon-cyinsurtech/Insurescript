import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  navigateToSearch() {
    this.props.navigation.navigate('SearchScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Go to search screen</Text>
        <Button title="Go to search screen" onPress={this.navigateToSearch.bind(this)} />
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
  }
});
