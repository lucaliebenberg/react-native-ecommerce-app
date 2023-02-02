import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import Home from "../screens/Home";
import Favourites from "../screens/Favourites";
import ShoppingCart from "../screens/ShoppingCart";
import Settings from "../screens/Settings";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Drawer screens here */}
      <Drawer.Screen name="WeBuy" component={Home} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="ShoppingCart" component={ShoppingCart} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
