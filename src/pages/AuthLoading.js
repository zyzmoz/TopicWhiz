import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

const AuthLoading = (props) => {
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // setTimeout(() => {
    props.navigation.navigate(userToken ? 'App' : 'Auth');
    // }, 2000);
    
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