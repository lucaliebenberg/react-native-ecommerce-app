import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DetailsScreenRouteProp,
  SettingsStackParamList,
} from "../types/navigation";

// import app screen here
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
import MyOrders from "../screens/MyOrders";
import Settings from "../screens/Settings";

// Stack will receive a MainStackParamList - Type
const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* screens here */}
      <Stack.Screen name="Profile" component={Settings} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});

//  <Stack.Screen name="MyOrders" component={MyOrders} />
//  <Stack.Screen name="ChangePassword" component={ChangePassword} />
//  <Stack.Screen name="EditProfile" component={EditProfile} />
