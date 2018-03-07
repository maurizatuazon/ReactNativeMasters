/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { FlatList, ActivityIndicator, Text, View, AsyncStorage  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://launchlibrary.net/1.3/agency')
      .then(async (response) => response.json())
      .then(async (responseJson) => {
        try {
          await AsyncStorage.setItem('@MyAsyncStorage:key', responseJson.agencies);
        } catch (error) {
          console.log('Error saving data');
        }
        this.setState({
          isLoading: false,
          dataSource: responseJson.agencies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.abbrev}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}