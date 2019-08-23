import React from 'react';
import {StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import ResetPassword from './src/pages/ResetPassword';
import AuthLoading from './src/pages/AuthLoading';
import TopicDetails from './src/pages/TopicDetails';

// const AppNavigator = createStackNavigator({  
//   Home: {
//     screen: Home    
//   },
//   SignIn: {
//     screen: SignIn
//   },
//   SignUp: {
//     screen: SignUp
//   },
//   ResetPassword: {
//     screen: ResetPassword
//   }    
// }, {
//   initialRouteName: 'SignIn'
// });
const AuthStack  = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  ResetPassword: {
    screen: ResetPassword
  }  
}, {
  initialRouteName: 'SignIn'
});

const AppStack = createStackNavigator({
    Home: {
    screen: Home    
  },
  TopicDetails: {
    screen: TopicDetails
  }
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoading,
  App: AppStack,
  Auth: AuthStack
},{
  initialRouteName: 'AuthLoading'
  // initialRouteName: 'Auth'
}))

// const Root = () => {
//   const Component  = createAppContainer(AppNavigator);
//   StatusBar.setHidden(false);
//   return(
//     <Component />
//   )
// }

// export default Root;
