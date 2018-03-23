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
import ItemDetailsScreen from './app/screens/ItemDetails';

export default class App extends Component {
  render() {
    return <ModalStack />;
  }
}

const ModalStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Welcome:{
      screen: WelcomeScreen,
    },
    ItemDetails:{
      screen: ItemDetailsScreen,
    }
  },
  {
    initialRouteName: 'Login',
    mode: "modal"
  }
);
