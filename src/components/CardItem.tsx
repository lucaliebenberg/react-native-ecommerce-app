import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";

// import images
// import ItemImage from "../../assets/ecommerce-item.webp";

const CardItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardImage}>
          {/* <Image
            style={styles.cardBackground}
            source={require("../../assets/ecommerce-item.webp")}
          /> */}
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardTop}>
            <Text style={styles.cardPrice}>$ 26.15</Text>
            <Entypo name="heart" size={24} color="#DDD" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  cardWrapper: {
    height: 320,
    width: 120,
    borderRadius: 8,
  },
  cardImage: {
    height: 160,
    width: 120,
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardBackground: {},
  cardContent: {
    paddingTop: 8,
  },
  cardTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardPrice: {},
});
