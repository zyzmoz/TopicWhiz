import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';


const Button = ({ title, color, onPress, isLoading }) => {
  colors = {
    primary: { color: 'white', backgroundColor: '#5d9cec' },
    success: { color: 'white', backgroundColor: '#A0d468' },
    danger: { color: 'white', backgroundColor: '#fc6e51' },
    warning: { color: '#222', backgroundColor: '#ffce54' },
    dark: { color: 'white', backgroundColor: '#434a54' },
    link: { color: '#5d9cec', backgroundColor: 'transparent' },
    // warning: {color: 'white', backgroundColor: '#ffce54'},

  }

  const link = color === 'link' ? { elevation: 0 } : {};
  return (
    <TouchableOpacity onPress={() => onPress()} style={{ ...styles.buttonContainer, ...link }} disabled={isLoading}>
      {!isLoading ?
        <Text style={{ ...styles.button, ...colors[color] }}>
          {title}
        </Text> :
        <ActivityIndicator style={{ ...styles.button, ...colors[color] }} size="small" color={color?colors[color].color: 'white'}/>
      }


    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 5,
    borderRadius: 3,
    elevation: 4


  },
  button: {
    width: '100%',
    backgroundColor: '#D6d6d6',
    borderColor: 'white',
    borderRadius: 3,
    color: 'white',
    fontSize: 18,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center'

  }
})

export default Button;