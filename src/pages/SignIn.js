import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

import formStyles from '../util/FormStyles';
import Button from '../util/Button';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/react.png')} style={{width: 64, height: 64}}/>
        </View>
      <Text style={styles.title}>Sign In</Text>
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
      <View style={styles.buttons}>
        <Button title="Sign In" color="success" onPress={() => alert(email)} />
        <Button title="Sign Up" color="primary" onPress={() => props.navigation.navigate('SignUp')} />
        <Button title="Forgot Password?" color="link" onPress={() => props.navigation.navigate('ResetPassword')} />        
      </View>

    </View>
  );
};

SignIn.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center"
  },

  buttons: {    
    width: '100%'
  },
  logo: {    
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15

  }


});

export default SignIn;