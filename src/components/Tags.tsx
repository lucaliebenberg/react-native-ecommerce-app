import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const Tags = () => {
  return (
    <ScrollView style={styles.container} horizontal={true}>
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
    </ScrollView>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // padding: 18,
    // paddingHorizontal: 8,
    paddingVertical: 36,
    height: "100%",
  },
  tagWrapper: {
    height: 34,
    width: "auto",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0.2,
    marginLeft: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  tagTitle: {
    color: "black",
    padding: 8,
  },
});
