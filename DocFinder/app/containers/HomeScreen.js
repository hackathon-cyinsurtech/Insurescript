import React from 'react'
import { StyleSheet, View, Image, PickerIOS, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Logo from '../images/logo.png'
import SelectInput from 'react-native-select-input-ios';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  constructor(props) {
    super(props)

    this.state = {
      age: '',
      sex: ''
    }
  }
  navigateToSearch() {
    this.props.navigation.navigate('SearchScreen')
  }

  onSubmitSex(value) {
    this.setState({sex: value})
  }

  componentDidMount() {
    this.props.fetchSymptoms();
  }

  _getSexPickerOptions() {
    return [
      { value: 'male', label: 'Male'      },
      { value: 'female', label: 'Female' }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} />
        <Text>Hey there!</Text>
        <Text>I just need some quick info!</Text>
        <SelectInput
          value={this.state.sex}
          options={this._getSexPickerOptions()}
          onSubmitEditing={this.onSubmitSex.bind(this)}
          style={styles.picker}
        />
        <TouchableOpacity style={styles.button} onPress={this.navigateToSearch.bind(this)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
  },
  button: {
    marginTop: 20,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    backgroundColor: '#007AFF'
  },
  buttonText: {
    color: '#fff'
  },
  picker: {
    flexDirection:            'row',
      height:                   36,
      width: 200,
      borderWidth:              1,
      borderRadius:             5,
      padding:                  20,
      marginTop:                20,
      backgroundColor:          '#FFFFFF',  }
});

function mapStateToProps(state) {
  return {
    retrievedSymptoms: state.retrievedSymptoms,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
