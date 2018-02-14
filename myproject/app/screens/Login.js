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
  TextInput
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login} />
        <Text>User Name:</Text>
        <TextInput 
          onChangeText={(username) => this.setState({username})}
        />
        <Text>Password:</Text>
        <TextInput />
        <Button 
            title="Login" 
            onPress={() => {
                this.props.navigation.navigate('Welcome', {username: this.state.username});
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