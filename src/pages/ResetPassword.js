import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../util/Button';
import formStyles from '../util/FormStyles';

const ResetPassword = (props) => {

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        style={formStyles.input}
        textContentType="emailAddress"
      />

      <View >
        <Button title="Send Recovery Email" color="warning" onPress={() => alert('hello')} />
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