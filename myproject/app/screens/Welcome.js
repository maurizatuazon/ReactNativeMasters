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
  static navigationOptions = {gesturesEnabled: true};
  constructor(props) {
    super(props);
    this.state = {isModalVisible:false, students: [] };
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

  closeModal() {
    this.setState({isModalVisible:false});

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listView}
          data={this.state.students}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => this.setState({isModalVisible:true})}>
              <Text>{item.firstName} {item.lastName}</Text>
            </TouchableOpacity>  
          }
        />
        {/* modal */}
        <Modal
          visible={this.state.isModalVisible}
          animationType={'fade'}
          onRequestClose={() => this.closeModal()}>
          <ScrollView>
            <Text style={styles.modalContainer}>This is content inside of scrollable modal component</Text>
          </ScrollView>
        </Modal>
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
  listEntry: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  modalContainer: {
    fontSize: 200,
  }
});