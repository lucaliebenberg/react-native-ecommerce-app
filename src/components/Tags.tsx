import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tags = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTitle}>Jacket</Text>
      </View>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTitle}>Jumpers</Text>
      </View>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTitle}>Shoes</Text>
      </View>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTitle}>Jeans</Text>
      </View>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTitle}>Shorts</Text>
      </View>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // padding: 18,
    paddingHorizontal: 8,
    paddingVertical: 18,
  },
  tagWrapper: {
    height: 34,
    width: "auto",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0.2,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  tagTitle: {
    color: "black",
    padding: 8,
  },
});
