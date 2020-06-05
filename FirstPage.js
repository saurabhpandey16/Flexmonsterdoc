import React, {Component} from 'react';
import data from './data.json';
import * as FlexmonsterReactNative from 'react-native-flexmonster';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {isLoading: true, text: ''};
    this.arrayholder = [];
  }

  componentDidMount() {
    let url = 'http://restcountries.eu/rest/v2/name/tan';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      text: text,
    });
    if (text != '') {
      return fetch('http://restcountries.eu/rest/v2/name/' + text)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    //passing the inserted text in textinput
  }

  onPress = url => {
    const {navigate} = this.props.navigation;
    navigate('SecondPage', {webUrl: url});
  };
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.5,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  getData() {
    let jsonData = [
      {
        Customer: 'A',
        Product: 'P1',
        'Curr Vol': 10,
        'Prev Vol': 40,
        'Vol Chg': -0.75,
      },
      {
        Customer: 'A',
        Product: 'P2',
        'Curr Vol': 20,
        'Prev Vol': 30,
        'Vol Chg': -0.33333333,
      },
      {
        Customer: 'B',
        Product: 'P1',
        'Curr Vol': 30,
        'Prev Vol': 20,
        'Vol Chg': 0.5,
      },
      {
        Customer: 'B',
        Product: 'P2',
        'Curr Vol': 40,
        'Prev Vol': 10,
        'Vol Chg': 3,
      },
    ];
    return {
      dataSource: {
        data: jsonData,
      },
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlexmonsterReactNative.Pivot
          report={this.getData()}
          licenseKey="Z7WN-XC491N-2S341F-290S1K"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
