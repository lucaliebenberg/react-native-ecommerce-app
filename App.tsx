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

// import RootNavigator from "./src/navigation/RootNavigator";
import RootNavigation from "./src/navigation";
import Onboarding from "./src/screens/Onboarding";

const App = ({ navigation }: NativeStackScreenProps<OnboardingParamList>) => {
  const [showOnboard, setShowOnboard] = useState<boolean>(true);

  return (
    <NavigationContainer>
      {showOnboard && <Onboarding />}
      {!showOnboard && <RootNavigation />}
    </NavigationContainer>
  );
};

export default App;
