import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import {firebaseApp} from '../api';



class Home extends Component {
  static navigationOptions = {
    header: null
  }
  signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await firebaseApp.auth().signOut();
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View style={styles.container} >
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => this.signOut()} title="Sign Out"/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;