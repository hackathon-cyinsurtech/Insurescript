import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchScreen',
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      currentText: ''
    }
  }

  handleTextUpdate(event) {
    this.setState({currentText: event.nativeEvent.text})
  }

  handleSearchClick() {
    let symptomsList = this.state.currentText.split(',').map(symptom => symptom.replace(/^\s+|\s+$/g, ''));
    this.props.matchSymptoms(symptomsList, this.props.retrievedSymptoms)
    this.props.navigation.navigate('SearchResults')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Feeling down? :(</Text>
        <Text>Describe your symptoms below and we'll try to find an appropriate healthcare professional to help!</Text>
        <TextInput style={styles.searchBox} onChange={this.handleTextUpdate.bind(this)} value={this.state.currentText}/>
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

function mapStateToProps(state) {
  return {
    retrievedSymptoms: state.retrievedSymptoms,
    matchedSymptoms: state.matchedSymptoms,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
