import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";

// import images
// import ItemImage from "../../assets/ecommerce-item.webp";

const CardItem = () => {
  return (
    <View style={styles.cardItemContainer}>
      <View style={styles.cardItemsWrapper}>
        <View style={styles.cardItemImage}>
          <Image
            style={styles.cardItemBackground}
            source={require("../../assets/shopping-item.jpg")}
          />
        </View>
        <View style={styles.cardItemContent}>
          <View style={styles.cardItemTop}>
            <Text style={styles.cardItemPrice}>R550.00</Text>
            <Entypo name="heart" size={18} color="#DDD" />
          </View>
          <View style={styles.cardItemBottom}>
            <Text style={styles.cardItemDescription}>
              Pull & Bear Men's Fall Urban Collection
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardItemContainer: {
    display: "flex",
    paddingHorizontal: 23,
  },
  cardItemsWrapper: {
    height: 320,
    width: 150,
    borderRadius: 8,
  },
  cardItemImage: {
    height: 190,
    width: 150,
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardItemBackground: {
    height: 190,
    width: 150,
    borderRadius: 8,
  },
  cardItemContent: {
    padding: 2,
    paddingTop: 8,
  },
  cardItemTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardItemPrice: {
    fontWeight: "bold",
  },
  cardItemBottom: {
    display: "flex",
    flexDirection: "row",
  },
  cardItemDescription: {
    fontSize: 13,
    paddingTop: 4,
  },
});
