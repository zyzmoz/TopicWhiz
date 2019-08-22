import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../util/Button';
import formStyles from '../util/FormStyles';
import {firebaseApp} from '../api';

const ResetPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  sendEmail = () => {
    setLoading(true);
    firebaseApp.auth().sendPasswordResetEmail(email)
      .then(res => {
        console.log(res);
        props.navigation.goBack();
      });
  }
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        style={formStyles.input}
        textContentType="emailAddress"
        value={email}
        onChangeText={e => setEmail(e)}
      />

      <View >
        <Button 
          isLoading={loading} 
          onPress={() => sendEmail()}
          title="Send Recovery Email" color="warning"/>
      </View>



    </View>
  );
};

ResetPassword.navigationOptions = {
  title: 'Reset Password'
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

export default ResetPassword;