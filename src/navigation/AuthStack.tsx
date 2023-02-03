import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// import screens
import Welcome from "../screens/Welcome";
import SignUpScreen from "../screens/SignUp";
import LogIn from "../screens/LogIn";

// stack navigator
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
