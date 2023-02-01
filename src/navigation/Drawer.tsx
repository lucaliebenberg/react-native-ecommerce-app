import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {/* Drawer screens here */}
      <Drawer.Screen name="WeBuy" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
