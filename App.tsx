import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import "./src/config/firebaseConfig";
import "react-native-gesture-handler";
import "react-native-reanimated";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingParamList } from "./src/types/navigation";
import { NavigationContainer } from "@react-navigation/native";

// import redux
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// import firebase analytics
// import analytics from '@react-native-firebase/analytics';
// Log an app_open event
// analytics().logEvent('app_open');

// import RootNavigator from "./src/navigation/RootNavigator";
import RootNavigation from "./src/navigation";
import Onboarding from "./src/screens/Onboarding";
import AuthProvider from "./src/context/AuthProvider";

const App = ({ navigation }: NativeStackScreenProps<OnboardingParamList>) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
