/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button, FlatList, ActivityIndicator, Text, View, AsyncStorage  } from 'react-native';

import LaunchService from "../services/LaunchService";

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    this.loadData();
  }

  async loadData() {
    var launchData = await LaunchService.getLaunchesAsync();
    this.setState({
        isLoading: false,
        dataSource: launchData
    });
  }

  async loadCacheData() {
      var launchData = await LaunchService.getCachedLaunchesAsync();
      this.setState({
          isLoading: false,
          dataSource: launchData
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
        <Button title="Load from Cache" onPress={async () => {
                    await this.loadCacheData();
                }}>
        </Button>
        <Button title="Refresh list" onPress={async () => {
              this.setState({
                dataSource: JSON.parse('[]')
              });
          }}>
        </Button>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.windowstart}, {item.windowend}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}