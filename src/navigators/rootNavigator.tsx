import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/* Screens Stack */
import HomeScreen from '../containers/Home';
import LoginScreen from '../containers/Login';
import RegisterScreen from '../containers/Register';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
    <RootStack.Screen name="Home" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
