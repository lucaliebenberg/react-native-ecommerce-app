import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import app screen here
import Home from "../screens/Home";
import Details from "../screens/Details";
import Settings from "../screens/Settings";
import Drawer from "./Drawer";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
import MyOrders from "../screens/MyOrders";
import SettingsStack from "./SettingsStack";

// Stack will receive a MainStackParamList - Type
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* screens here */}
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={SettingsStack} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
