import React from 'react'
import { StyleSheet, View, Image, PickerIOS, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Logo from '../images/logo.png'
import SelectInput from 'react-native-select-input-ios';
import _ from 'lodash'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  constructor(props) {
    super(props)

    this.state = {
      yob: '1999',
      sex: 'male',
      insurance: ''
    }
  }
  navigateToSearch() {
    this.props.navigation.navigate('SearchScreen')
  }

  onSubmitSex(value) {
    this.setState({sex: value})
  }

  onSubmitAge(value) {
    this.setState({yob: value})
  }

  onSubmitInsurance(value) {
    this.setState({insurance: value})
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

  _getInsuranceCompanyPickerOptions() {
    return [
      { value: 'eurolife', label: 'Eurolife'      },
      { value: 'gandirect', label: 'Gan Direct' },
      { value: 'cnp', label: 'CNP' },
      { value: 'universal', label: 'Universal' },
    ];
  }

  _getAgePickerOptions() {
    return _.range(1999, 1920).map((yob) => {
      return {value: yob, label: `${yob}`}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={Logo} />
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hey there!</Text>
          <Text style={{fontSize: 18, fontWeight: '100'}}>I just need some quick info!</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formRow}>
            <Text style={styles.selectLabel}>Sex</Text>
            <SelectInput
              value={this.state.sex}
              options={this._getSexPickerOptions()}
              onSubmitEditing={this.onSubmitSex.bind(this)}
              style={styles.picker}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.selectLabel}>Year of Birth</Text>
            <SelectInput
              value={this.state.yob}
              options={this._getAgePickerOptions()}
              onSubmitEditing={this.onSubmitAge.bind(this)}
              style={styles.picker}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.selectLabel}>Insurance Provider</Text>
          <SelectInput
            value={this.state.insurance}
            options={this._getInsuranceCompanyPickerOptions()}
            onSubmitEditing={this.onSubmitInsurance.bind(this)}
            style={styles.picker}
          />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.navigateToSearch.bind(this)}>
            <Text style={styles.buttonText}>Continue</Text>
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
    marginTop: 50,
    alignItems: 'center',
    flex: 1
  },
  form: {
    flex: 2,
    width: 400,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  formRow: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  selectLabel: {
    color: '#007AFF',
    fontSize: 18,
    padding: 10
  },
  logo: {
    height: 150,
    resizeMode: Image.resizeMode.contain
  },
  button: {
    marginTop: 20,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#007AFF'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  picker: {
      flexDirection:            'row',
      height:                   40,
      width: 100,
      borderWidth:              1,
      borderColor: '#007AFF',
      borderRadius:             4,
      padding:                  20,
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
