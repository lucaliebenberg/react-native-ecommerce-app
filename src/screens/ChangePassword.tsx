import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";

const ChangePassword = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Entypo name="chevron-left" size={30} color="black" />
        <Text style={styles.text}>Change Password</Text>
        <View style={styles.inputsWrapper}>
          <TextInput style={styles.input} placeholder="Current Password" />
          <TextInput style={styles.input} placeholder="New Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Button title="Change Password" color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 12,
    marginTop: 12,
  },
  inputsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "95%",
    height: 40,
    borderColor: "#DDD",
    borderWidth: 1,
    marginBottom: 20,
    padding: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#E4204C",
    padding: 8,
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 5,
    width: 340,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
