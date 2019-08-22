import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { firebaseApp } from '../api';



const Home = (props) => {

  signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await firebaseApp.auth().signOut();
    props.navigation.navigate('Auth');
  }

  return (
    <View style={styles.container} >
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => this.signOut()} title="Sign Out" />
    </View>
  );

}

Home.navigationOptions = {
  header: null
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