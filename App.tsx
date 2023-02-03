import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";

import RootNavigator from "./src/navigation/RootNavigator";
// import LogIn from "./src/screens/LogIn";
// import SignUp from "./src/screens/SignUp";
// import ChangePassword from "./src/screens/ChangePassword";
// import MyOrders from "./src/screens/MyOrders";
// import EditProfile from "./src/screens/EditProfile";

export default function App() {
  return (
    <>
      <RootNavigator />
    </>
  );
}
