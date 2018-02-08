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

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection:"column"}}>
        <View style={{flex: .3}} />
        <Text>User Name:</Text>
        <TextInput />
        <Text>Password:</Text>
        <TextInput />
        <Button 
            title="Login" 
            onPress={() => {
                Alert.alert("Login", "We are logged in");
            }} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});