import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen',
    headerMode: 'float'
  };

  navigateHome() {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hey! are</Text>
        <Button title="Go to home screen" onPress={this.navigateHome.bind(this)} />
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
