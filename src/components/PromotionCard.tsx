import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PromotionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Men's Fashion Collection</Text>
          <Text style={styles.textSubtitle}>Discount up to 60%</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/banner-icon.jpg")}
            style={styles.image}
          />
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
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: 350,
    backgroundColor: "black",
    borderRadius: 8,
  },
  textContainer: {
    paddingTop: 16,
    paddingLeft: 28,
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
  imageContainer: {
    height: "100%",
    width: "100%",
    paddingTop: 4,
    paddingLeft: 72,
  },
  image: {
    width: 96,
    height: 96,
  },
});
