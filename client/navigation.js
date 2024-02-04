/**
 * 
 * This file is made for create the navigation inside the app.
 * 
 */


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={
      {
        headerShown: false,   // to hide the app bar header
      }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Resturant" component={ResturantScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}