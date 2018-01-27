import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  navigateToSearch() {
    this.props.fetchSymptoms();
    // this.props.navigation.navigate('SearchScreen')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Go to search screen</Text>
        <Text>{this.props.retrievedSymptoms}</Text>
        <Button title="Go to search screen" onPress={this.navigateToSearch.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return {
    symptoms: state.symptoms,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
