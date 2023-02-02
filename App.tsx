import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";

import RootNavigator from "./src/navigation/RootNavigator";
import LogIn from "./src/screens/LogIn";

export default function App() {
  return (
    <>
      <LogIn />
      {/* <RootNavigator /> */}
    </>
  );
}
