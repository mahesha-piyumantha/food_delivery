/**
 *
 * This file is made for create the navigation inside the app.
 *
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPrepairingScreen from "./screens/OrderPrepairingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // to hide the app bar header
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPrepairing"
          options={{ presentation: "fullScreenModal" }}
          component={OrderPrepairingScreen}
        />

        <Stack.Screen
          name="Delivery"
          options={{ presentation: "fullScreenModal" }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
