import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import "./src/config/firebaseConfig";
import "react-native-gesture-handler";
import "react-native-reanimated";

// import redux
// import { Provider } from "react-redux";
// import store from "./src/redux/store";

// import RootNavigator from "./src/navigation/RootNavigator";
import RootNavigation from "./src/navigation";

export default function App() {
  return (
    <>
      <RootNavigation />
    </>
  );
}
