import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// import components
import SavedCardItem from "../components/SavedCardItem";

const Favourites = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Saved Items</Text>
        <View style={styles.cardContainer}>
          <SavedCardItem />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

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
