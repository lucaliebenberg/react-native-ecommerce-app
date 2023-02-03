import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DetailsScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";

const Welcome = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.headerText}>Welcome</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#DDD",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#E4204C",
    padding: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Welcome;
