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
      <View style={styles.container}>
        <View style={styles.login} />
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
    flexDirection: 'column',
  },
  login: {
    flex: .3,
  }
});