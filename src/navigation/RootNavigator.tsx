import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

// import screens
import Favourites from "../screens/Favourites";
import ShoppingCart from "../screens/ShoppingCart";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

// // Tab navigator
// const TabNavigator = () => {
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={MainStack} />
//     <Tab.Screen name="Settings" component={Settings} />
//   </Tab.Navigator>;
// };

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "yellow",
          tabBarInactiveTintColor: "#D1D3D2",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{
            tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarIcon: () => <Entypo name="heart" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            tabBarIcon: () => (
              <Entypo name="shopping-cart" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => (
              <Ionicons name="settings-sharp" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
