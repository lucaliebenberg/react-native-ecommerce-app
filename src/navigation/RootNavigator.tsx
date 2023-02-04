import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import SettingsStack from "./SettingsStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

// import screens
import Favourites from "../screens/Favourites";
import ShoppingCart from "../screens/ShoppingCart";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#E4204C",
          tabBarInactiveTintColor: "#D1D3D2",
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Favourites}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={ShoppingCart}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="shopping-cart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={SettingsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
