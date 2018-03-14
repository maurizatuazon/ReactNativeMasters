/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screens/Login';
import WelcomeScreen from './app/screens/Welcome';

let SQLite = require('react-native-sqlite-storage')

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Welcome:{
      screen: WelcomeScreen,
    }
  },
  {
    initialRouteName: 'Login',
  }
);
