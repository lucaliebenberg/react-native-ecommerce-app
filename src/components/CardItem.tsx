import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";

// import images
// import ItemImage from "../../assets/ecommerce-item.webp";

const CardItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardImage}>
          <Image
            style={styles.cardBackground}
            source={require("../../assets/shopping-item.jpg")}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardTop}>
            <Text style={styles.cardPrice}>R550.00</Text>
            <Entypo name="heart" size={18} color="#DDD" />
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.cardDescription}>Pull & bear men's swe...</Text>
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
    paddingHorizontal: 23,
  },
  cardWrapper: {
    height: 320,
    width: 150,
    borderRadius: 8,
  },
  cardImage: {
    height: 190,
    width: 150,
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardBackground: {
    height: 190,
    width: 150,
    borderRadius: 8,
  },
  cardContent: {
    paddingTop: 8,
  },
  cardTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardPrice: {},
  cardBottom: {
    display: "flex",
    flexDirection: "row",
  },
  cardDescription: {
    fontSize: 13,
    paddingBottom: 0,
  },
});
