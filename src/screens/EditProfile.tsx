import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  MyOrdersScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import icons
import Entypo from "react-native-vector-icons/Entypo";

const EditProfile = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.profileInfoContainer}>
          <Image
            source={require("../../assets/user-image.jpg")}
            style={styles.profileImage}
          />

          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="johndoe@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    justifyContent: "center",
    marginLeft: 12,
    marginTop: 16,
  },
  profileInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 100,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#DDD",
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 16,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#E4204C",
    padding: 10,
    borderRadius: 5,
    width: 350,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
