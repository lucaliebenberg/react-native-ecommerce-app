import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

// import components
import ShoppingCartCardItem from "../components/ShoppingCartCardItem";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>My Cart</Text>
          <View style={styles.cardContainer}>
            <ShoppingCartCardItem />
            <ShoppingCartCardItem />
          </View>
        </View>
      </ScrollView>
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
