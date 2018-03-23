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
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { NavigationActions } from "react-navigation";

export default class ItemDetailsScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Item Details",
    headerTintColor: "#FFFFFF",
    headerStyle: styles.headerStyle
  });

  constructor(props) {
    super(props);
    this.state = {
        fadeAnim: new Animated.Value(0)
    };  
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
        easing: Easing.out(Easing.back())
      }
    ).start();                        // Starts the animation
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
          <ScrollView>
            <Animated.Text style={{color: 'red', opacity: this.state.fadeAnim}}>Details for {params.detailItem.name}</Animated.Text>
            <View>
              <Text>Window Start:</Text>
              <Text>{params.detailItem.windowstart}</Text>
            </View>
            <View>
            <Text>Window End:</Text>
            <Text>{params.detailItem.windowend}</Text>
          </View>
            <Text style={styles.modalContainer}>This is content inside of scrollable modal component</Text>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },  
  modalContainer: {
    fontSize: 200,
  }
});