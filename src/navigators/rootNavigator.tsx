import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/* Screens Stack */
import HomeScreen from '../containers/Home';

const RootStack = createStackNavigator();

const RootStackNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Home" component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackNavigator;
