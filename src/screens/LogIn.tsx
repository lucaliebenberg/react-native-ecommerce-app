import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LogIn = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>
          Welcome back! Please enter your details
        </Text>
        {/* email */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        {/* password */}
        <View style={styles.passwordWrapper}>
          <Text style={styles.passwordLabel}>Password</Text>
          <TextInput style={styles.password} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {},
  title: {},
  subtitle: {},
  inputWrapper: {},
  inputLabel: {},
  input: {},
  passwordWrapper: {},
  passwordLabel: {},
  password: {},
});
