import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import screens
import Home from "../screens/Home";
import MainStack from "./MainStack";
import Favourites from "../screens/Favourites";
import ShoppingCart from "../screens/ShoppingCart";
import Settings from "../screens/Settings";
import SettingsStack from "./SettingsStack";

// drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#E4204C",
      }}
    >
      {/* Drawer screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Saved" component={Favourites} />
      <Drawer.Screen name="Cart" component={ShoppingCart} />
      <Drawer.Screen name="Profile" component={SettingsStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
