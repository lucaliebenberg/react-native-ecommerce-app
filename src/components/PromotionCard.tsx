import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PromotionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Men's Fashion Collection</Text>
          <Text style={styles.textSubtitle}>Discount up to 60%</Text>
        </View>
      </View>
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  cardContainer: {
    height: 100,
    width: 350,
    backgroundColor: "black",
    borderRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  textTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 200,
    paddingBottom: 10,
  },
  textSubtitle: {
    color: "gray",
    fontSize: 12,
  },
});
