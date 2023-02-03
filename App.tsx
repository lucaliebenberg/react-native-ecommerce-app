import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";

import RootNavigator from "./src/navigation/RootNavigator";
import LogIn from "./src/screens/LogIn";
import SignUp from "./src/screens/SignUp";

export default function App() {
  return (
    <>
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      <RootNavigator />
    </>
  );
}
