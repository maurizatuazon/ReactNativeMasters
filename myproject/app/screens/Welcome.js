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
  TextInput,
  Image
} from 'react-native';

export default class WelcomeScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Welcome",
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle,
    });

    constructor(props) {
        super(props);
        this.state = {nickName: '', isShowingNickName:false, imageUri:''};
    }

    updateImageUri(newImageUri) {
        this.setState({
            imageUri: newImageUri
        });        
    }

  render() {
    const navigation = this.props.navigation; 
    let buttonTitle = this.state.isShowingNickName ? 'Hide Welcome' : 'Show Welcome';

    return (
      <View style={styles.container}>
        <Text>Nickname</Text>
        <TextInput 
          onChangeText={(nickName) => this.setState({nickName})}
        />
        { this.state.isShowingNickName && (
          <View style={styles.welcome}>
            <Text>Welcome {this.state.nickName}</Text>
          </View>  
        )}
        <Text>Profile Image:</Text>
        <View>
            <Image 
                style={{height: 150, width: 150}}
                source={{uri: this.state.imageUri}}
            />
        </View>
        <View style={{flex: 1}}/>
        <Button
          title={buttonTitle}
          onPress={() => {this.setState(previousState => {
            return { isShowingNickName: !previousState.isShowingNickName };
          });}}
        />
        <View>
        
        <Button
            title="Take Picture"
            onPress={() => {
                navigation.navigate("Camera", { updateUri: this.updateImageUri.bind(this) });
            }}
        />
        </View>
        
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