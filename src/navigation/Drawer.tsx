import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import screens
import Home from "../screens/Home";
import Favourites from "../screens/Favourites";
import ShoppingCart from "../screens/ShoppingCart";
import Settings from "../screens/Settings";

const Drawer = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Drawer screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Saved" component={Favourites} />
      <Drawer.Screen name="Cart" component={ShoppingCart} />
      <Drawer.Screen name="Profile" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
