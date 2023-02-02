import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <View style={styles.cardContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;

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
