import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Button from '../util/Button';
import formStyles from '../util/FormStyles';
import {firebaseApp} from '../api';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  registerUser = () => {
    setLoading(true);
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)  
      .then(res => {
        console.log('res', res);
        props.navigation.goBack();        
      })
  }
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        style={formStyles.input}
        textContentType="emailAddress"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        style={formStyles.input}
        secureTextEntry
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <Text>Password Confirmation</Text>
      <TextInput
        placeholder="Password Confirmation"
        style={formStyles.input}
        secureTextEntry
        value={password2}
        onChangeText={e => setPassword2(e)}
      />
      <View style={styles.bottom}>
        <Button 
          disabled={password == '' || (password!== '' && password !== password2) } 
          isLoading={loading}
          title="Sign Up" color="success" onPress={() => registerUser()} />
      </View>



    </KeyboardAvoidingView>
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