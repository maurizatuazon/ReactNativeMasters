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
  View,
  TextInput
} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {nickName: '', isShowingNickName:false};
  }
  render() {
    let display = this.state.isShowingNickName ? 'Welcome ' + this.state.nickName + '!' : ' ';
    let buttonTitle = this.state.isShowingNickName ? 'Hide Welcome' : 'Show Welcome';

    return (
      <View style={styles.container}>
        <Text>Nickname</Text>
        <TextInput 
          onChangeText={(nickName) => this.setState({nickName})}
        />
        <View style={styles.welcome}>
          <Text>{display}</Text>
        </View>  
        <Button
          title={buttonTitle}
          onPress={() => {this.setState(previousState => {
            return { isShowingNickName: !previousState.isShowingNickName };
          });}}
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