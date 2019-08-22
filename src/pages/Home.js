import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { firebaseApp } from '../api';




const Home = (props) => {

  console.log(firebaseApp.auth().currentUser);

  signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await firebaseApp.auth().signOut();
    props.navigation.navigate('Auth');
  }
  return (
    <View style={styles.container} >
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button onPress={() => this.signOut()} title="Sign Out" /> */}
    </View>
  );
}

const UserName = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    _getUserName = async () => {
      const user = await AsyncStorage.getItem('username');
      setUsername(user);
    }
    _getUserName();
  }, []);
  return (
    <Text style={{ margin: 8, paddingVertical: 8, color: "#222" }} >{username}</Text>
  )
}

Home.navigationOptions = {
  // header: null
  headerLeft: (
    <Text onPress={() => this.signOut()} style={{ margin: 8, paddingVertical: 8, color: "#5d9cec" }} >Sign Out</Text>
  ),
  headerRight: (
    <UserName />
  ),
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