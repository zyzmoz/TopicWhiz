import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { firebaseApp } from '../api';

const AuthLoading = (props) => {
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken'); 
    
    if (userToken){      
      const { email, password } = JSON.parse(userToken);
      firebaseApp.auth().signInWithEmailAndPassword(email,password);
      //.signInWithCredential(JSON.parse(userToken));
      //
    }
    
    props.navigation.navigate(userToken ? 'App' : 'Auth');   
    
  };

  _bootstrapAsync();
  return (
    <View style={styles.container}>
       <ActivityIndicator color="#222"/> 
       <StatusBar barStyle="default"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
})

export default AuthLoading;