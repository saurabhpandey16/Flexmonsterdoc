import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
//import all the components we are going to use.

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    const {navigate} = this.props.navigation;

    const {webUrl} = this.props.navigation.state.params;
    return <WebView source={{uri: webUrl}} style={{marginTop: 20}} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
