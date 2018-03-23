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
  ScrollView
} from 'react-native';
import { NavigationActions } from "react-navigation";

export default class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Welcome",
    headerTintColor: "#FFFFFF",
    headerStyle: styles.headerStyle,
});

constructor(props) {
    super(props);
    this.state = {
        students: []
    };
}

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      students: [
        {key: 1, firstName:"Mau", lastName: "Tuazon"},
        {key: 2, firstName:"Nick", lastName: "Clarity"},
        {key: 3, firstName:"Jennifer", lastName: "Telisczak"},
        {key: 4, firstName:"Shayne", lastName: "Nieto"},
        {key: 5, firstName:"Avery", lastName: "Wold"},
        {key: 6, firstName:"Ricoe", lastName: "Braga"},
        {key: 7, firstName:"Mark", lastName: "Wilkenson"},
        {key: 8, firstName:"Thomas", lastName: "Smet"},
        {key: 9, firstName:"Ashley", lastName: "Proctor"},
        {key: 10, firstName:"Brad", lastName: "Dean"}
      ]
    });

  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listView}
          data={this.state.students}
          renderItem={({item}) => 
            <TouchableOpacity 
                onPress={() => {
                  navigation.navigate("ItemDetails", {
                      detailItem: item
                  });
              }}
            >
              <Text>{item.firstName} {item.lastName}</Text>
            </TouchableOpacity>  
          }
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
  listView: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: "#2196F3"
  },
  modalContainer: {
    fontSize: 200,
  }
});