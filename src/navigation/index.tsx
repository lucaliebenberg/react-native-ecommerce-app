import { Text, View } from "react-native";
import React from "react";

// import auth
import { useAuth } from "../hooks/useAuth";

// import navigation
// import MainStack from './MainStack'
import AuthStack from "./AuthStack";
import RootNavigator from "./RootNavigator";

const RootNavigation = () => {
  const { user } = useAuth();

  return user ? <RootNavigator /> : <AuthStack />;
};

export default RootNavigation;
