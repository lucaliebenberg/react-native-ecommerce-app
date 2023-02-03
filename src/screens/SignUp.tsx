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
import { AuthStackParamList } from "../types/navigation";

// import icons
import Ionicons from "react-native-vector-icons/Ionicons";

import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUp = ({ navigation }: NativeStackScreenProps<AuthStackParamList>) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerContainer}
        >
          <Ionicons name="chevron-back" size={26} color="black" />
          <Text style={styles.iconText}>Back</Text>
        </TouchableOpacity>

        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.headerText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setValue({ ...value, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    height: "100%",
    paddingVertical: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    width: "100%",
  },
  iconText: {
    fontSize: 16,
  },
  icon: {},
  logo: {
    height: 150,
    width: 150,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 30,
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
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SignUp;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { AuthStackParamList } from "../types/navigation";

// // auth
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();

// // error type
// type Props = {
//   error: string;
// };

// const SignUpScreen = ({
//   navigation,
// }: NativeStackScreenProps<AuthStackParamList>) => {
//   const [value, setValue] = React.useState({
//     email: "",
//     password: "",
//     error: "",
//   });

//   async function signUp() {
//     if (value.email === "" || value.password === "") {
//       setValue({
//         ...value,
//         error: "Email and password are mandatory.",
//       });
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, value.email, value.password);
//       navigation.navigate("LogIn");
//     } catch (error) {
//       setValue({
//         ...value,
//         error: error.message,
//       });
//     }
//   }

//   return (
//     <>
//       <View style={styles.container}>
//         <Image style={styles.logo} source={require("../../assets/logo.png")} />
//         <Text style={styles.headerText}>Sign Up</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           onChangeText={(text) => setValue({ ...value, email: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           onChangeText={(text) => setValue({ ...value, password: text })}
//           secureTextEntry
//         />
//         <TouchableOpacity style={styles.button} onPress={signUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
//   logo: {
//     height: 150,
//     width: 150,
//     marginBottom: 12,
//   },
//   headerText: {
//     fontSize: 32,
//     marginBottom: 30,
//   },
//   input: {
//     width: "80%",
//     height: 40,
//     borderColor: "#DDD",
//     borderWidth: 1,
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 4,
//   },
//   button: {
//     backgroundColor: "#E4204C",
//     padding: 10,
//     borderRadius: 5,
//     width: 300,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 20,
//     textAlign: "center",
//   },
// });

// export default SignUpScreen;
