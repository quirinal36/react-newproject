import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import Weather from "./Weather"
import * as Location from "expo-location"
import imoti from './assets/e6.png'

export default class App extends React.Component {
  constructor(){
    super();    
  } 

  state = {
    isLoaded: true
  }  
  getLocation = async() => {
    
    try{
      let {status} = await Location.requestPermissionsAsync();
      if(status != 'granted') {
        console.log('access denied!!')
      }
      
      let location = await Location.getCurrentPositionAsync();
      console.log(location);
    }catch(error){
      Alert.alert("title", "cannot find you");
    }
  };

  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoaded}=this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Image source={{uri:"https://i.imgur.com/TkIrScD.png"}} style={{width:300, height:150}}/>
            <Image source={imoti} style={{width:300, height:300}}/>
            <Text style={styles.loadingText}>날씨 정보를 받아오는 중입니다.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading : {
    flex:1,
    backgroundColor:"#FDF6AA",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize : 38,
    marginBottom:100
  }
});