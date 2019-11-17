import React, {useState, Component} from 'react';
import { Video } from 'react-native-video';
import {View, Button, Text, TextInput, StyleSheet, Image} from 'react-native';

const SignInScreen = props =>{
  const signinHandler = () =>{
    props.navigation.navigate({routeName: 'CaptureImageScreen'});

  };
        return(
          <View>
            <View >
              <Text style={styles.heading}>TEAM ASHWA</Text>
            </View>
            <View style={styles.outer}>
              <TextInput style={styles.box1} value={'Username'}/>
              <TextInput style={styles.box2} value={'Password'}/>
              <Button title="Sign In" onPress={signinHandler} />
            </View>
           </View>
        );

    
    
};  



var styles = StyleSheet.create({
  heading:{
    fontSize:30,
    alignSelf:"center",
    paddingTop:100,
    color:'orange',
    fontWeight:'bold'
  },
  outer:{
    alignContent:"center",
    paddingTop:175
  },
    
    box1:{
      
      borderBottomColor: '#ccc',
      borderBottomWidth: 2,
      paddingTop:20,
      margin: 15,
      padding: 4
    },
    box2:{
      borderBottomColor: '#ccc',
      borderBottomWidth: 2,
      paddingTop:15,
      margin: 15,
      padding: 4
    }
  });
export default SignInScreen;