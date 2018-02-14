/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const username = params ? params.username : "guest";

    return (
      <View style={styles.container}>
        <View style={styles.welcome} />
        <Text>Welcome {JSON.stringify(username)}!</Text>
        <Button
          title="Logout"
          onPress={() => this.props.navigation.goBack()}
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
  welcome: {
    flex: .3,
  },
});