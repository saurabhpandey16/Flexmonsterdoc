import React, {Component} from 'react';
//import react in our code.

//Import react-navigation
import {createAppContainer} from 'react-navigation'; /*saurabh*/
import {createStackNavigator} from 'react-navigation-stack';
import {WebView} from 'react-native-webview';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import InitialPage from './InitialPage';
//import all the screens we are going to switch
const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    FirstPage: {screen: FirstPage},
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: {screen: SecondPage},

    InitialPage: {screen: InitialPage},
  },
  {
    initialRouteName: 'InitialPage',
  },
);
export default createAppContainer(App);
