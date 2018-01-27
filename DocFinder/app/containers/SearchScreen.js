import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import _ from 'lodash'

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
    if (this.state.currentText === '') {
      return Alert.alert('', 'You need to type at least one symptom')
    }

    if (_.isEmpty(this.props.retrievedSymptoms)) {
      return Alert.alert('', 'An error has occured retrieving symptoms')
    }
    let symptomsList = this.state.currentText.split(',').map(symptom => symptom.replace(/^\s+|\s+$/g, ''));
    this.props.matchSymptoms(symptomsList, this.props.retrievedSymptoms)
    this.props.navigation.navigate('SearchResults')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Are you feeling a bit meh?</Text>
          <Text style={{fontSize: 14, fontWeight: '100'}}>No problem lets find you a specialist!</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBox} onChange={this.handleTextUpdate.bind(this)} value={this.state.currentText}/>
          <Text style={{fontSize: 12, fontWeight: '300'}}>* type comma separated symptoms</Text>
          <TouchableOpacity style={styles.searchButton} onPress={this.handleSearchClick.bind(this)}>
            <Text style={{fontSize: 18, color: '#fff'}}>Find me a specialist</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    padding: 30
  },
  searchContainer: {
    flex: 2
  },
  searchBox: {
    backgroundColor: '#fff',
    width: 300,
    fontSize: 18,
    height: 50
  },
  searchButton: {
    backgroundColor: '#007AFF',
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
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
