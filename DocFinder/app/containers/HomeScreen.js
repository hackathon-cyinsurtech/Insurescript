import React from 'react'
import { StyleSheet, View, Image, PickerIOS, Text, Button } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Logo from '../images/logo.png'

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

  componentDidMount() {
    this.props.fetchSymptoms();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} />
        <Text>Hey there!</Text>
        <Text>I just need some quick info!</Text>
        <PickerIOS
          key="sex"
          style={styles.picker}
          selectedValue={this.state.sex}
          onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
          <PickerIOS.Item label="Male" value="male" />
          <PickerIOS.Item label="Female" value="female" />
        </PickerIOS>
        <PickerIOS
          key="age"
          style={styles.picker}
          selectedValue={this.state.age}
          onValueChange={(itemValue, itemIndex) => this.setState({age: itemValue})}>
            <PickerIOS.Item label="<18" value="18" />
            {() => {
              for(i=19; i < 100; i++) {
                return <PickerIOS.Item key={label={i} value={i}} />
              }
            }}
        </PickerIOS>
        <Button style={styles.button} title="Diagnose me" onPress={this.navigateToSearch.bind(this)} />
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
    backgroundColor: 'blue'
  },
  picker: {
    width: 200,
    height: 30
  }
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
