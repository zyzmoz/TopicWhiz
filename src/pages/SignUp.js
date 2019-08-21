import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../util/Button';
import formStyles from '../util/FormStyles';

const SignUp = (props) => {

  

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        style={formStyles.input}
        textContentType="emailAddress"
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        style={formStyles.input}
        secureTextEntry
      />
      <Text>Password Confirmation</Text>
      <TextInput
        placeholder="Password Confirmation"
        style={formStyles.input}
        secureTextEntry
      />
      <View style={styles.bottom}>
        <Button title="Sign Up" color="success" onPress={() => alert('hello')} />
      </View>



    </View>
  );
};

SignUp.navigationOptions = {
  title: 'Sign Up'
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    margin: 8,

  },
  bottom: {
    position: "absolute",
    width: '100%',
    bottom: 10
  }
})

export default SignUp;