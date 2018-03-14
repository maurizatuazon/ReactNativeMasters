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
      .then((response) => response.json())
      .then((responseJson) => {
        try {
          AsyncStorage.setItem('@MyAsyncStorage:key', JSON.stringify(responseJson.agencies))
          .then(x => AsyncStorage.getItem('@MyAsyncStorage:key')
          .then((val) => { 
            this.setState({ isLoading: false,dataSource: val ? val : {}});
          }));
        } catch (error) {
          
        }
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
          data={JSON.parse(this.state.dataSource)}
          renderItem={({item}) => <Text>{item.name}, {item.abbrev}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}