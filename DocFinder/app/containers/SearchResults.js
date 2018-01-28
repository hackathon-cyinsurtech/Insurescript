import React from 'react'
import { StyleSheet, View, Text, ListView, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { showLocation } from 'react-native-map-link'

import _ from 'lodash'

class SearchResults extends React.Component {
  static navigationOptions = {
    title: ''
  };

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      specialty: 'cardiologist',
      doctors: ds.cloneWithRows([
        {id: 2, name: 'Dr. George Kyriakou', address: '30 Ipparxou Str', rating: 4, latitude: 35.162586, longitude: 33.373931},
        {id: 3, name: 'Dr. Andy Sols', rating: 5, address: '12 Erasmus Str', latitude: 35.162586, longitude: 33.373931}
      ])
    }
  }
  handleSearchClick() {
    this.props.navigation.navigate('SearchResults')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>You should see a {this.state.specialty}</Text>
          <Text style={{fontSize: 16, fontWeight: '100'}}>Here are your nearest specialist doctors</Text>
        </View>
        <View style={styles.listContainer}>
          <ListView
            style={styles.listView}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            dataSource={this.state.doctors}
            renderRow={(rowData) => <ResultRow doctor={rowData} />}
          />
        </View>
      </View>
    )
  }
}
 class ResultRow extends React.Component {
   handleDirectionsPress() {
     showLocation({
       latitude: this.props.doctor.latitude,
       longitude: this.props.doctor.longitude,
       title: this.props.doctor.name
     })
   }
   render() {
     return (
       <View style={styles.rowContainer}>
         <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.doctor.name}</Text>
         <Text>{this.props.doctor.address}</Text>
         <TouchableOpacity onPress={this.handleDirectionsPress.bind(this)} style={styles.directionsButton}>
           <Text style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>Directions</Text>
         </TouchableOpacity>
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
  header: {
    marginTop: 40,
    flex: 1
  },
  listContainer: {
    flex: 4,
    alignSelf: 'stretch'
  },
  listView: {
    backgroundColor: '#fff'
  },
  rowContainer: {
    padding: 20
  },
  directionsButton: {
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#007AFF'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  searchBox: {
    width: 380,
    height: 80,
    backgroundColor: '#fff',
    borderColor: 'pink',
    borderWidth: 1
  }
});

function mapStateToProps(state) {
  return {
    retrievedSymptoms: state.retrievedSymptoms,
    matchedSymptoms: state.matchedSymptoms,
    retrievedDoctors: state.retrievedDoctors,
    matchedDoctors: state.matchedDoctors
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
