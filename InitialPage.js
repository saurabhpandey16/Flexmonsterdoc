import React, {Component} from 'react';
import {Alert, AppRegistry, Button, StyleSheet, View} from 'react-native';
import {lawngreen} from 'color-name';

export default class ButtonBasics extends Component {
  onPressButton = c => {
    const {navigate} = this.props.navigation;
    switch (c) {
      case 1:
        navigate('FirstPage');
        break;
      case 2:
        navigate('SecondPage');
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.onPressButton(1)} title="Pivot Table" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.onPressButton(2)}
            title="Fusioncharts"
            color="#009933"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    fontSize: 20,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
