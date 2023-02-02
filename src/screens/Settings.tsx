import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.cardContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
  },
  cardContainer: {
    paddingTop: 20,
  },
});
