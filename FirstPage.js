import React, { Component } from 'react';
import data from './data.json';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    let url="http://restcountries.eu/rest/v2/name/tan"
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
        
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      text: text,
    });
    if (text != ""){
    return fetch('http://restcountries.eu/rest/v2/name/'+text)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
         );
      })
      .catch(error => {
        console.error(error);
      });
    }
    //passing the inserted text in textinput
  }

  onPress=(url)=>{
      const {navigate} = this.props.navigation
    navigate('SecondPage',{webUrl:url})
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.5,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    const {dataSource}=this.state
    if (this.state.isLoading) {
      //Loadng View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    else if(dataSource.length==0){
      return(
        <View style={{ flex: 1, paddingTop: 200 }}>
          <Text >No results </Text>
        </View>
      )
    }
    
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          maxLength={100}
        />
        <FlatList
          data={data&&data.dataArr.length>0?data.dataArr:[]}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>this.onPress(item.link)}>
             <Text style={styles.textStyle}>{item.product}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
}
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});