import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SavedCardItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postImageContainer}>
        <Image
          source={require("../../assets/shopping-item.jpg")}
          style={styles.postImage}
        />
      </View>
      <View style={styles.postDetailsContainer}>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>Men's S sweatshirt</Text>
        </View>

        <View style={styles.postUrlContainer}>
          <Text style={styles.postUrl}>R550.00</Text>
          <TouchableOpacity>
            <Text style={styles.postTime}>
              <Entypo name="shopping-cart" size={18} color="black" />
              <MaterialCommunityIcons name="delete" size={18} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SavedCardItem;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 95,
    backgroundColor: "#FFF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.44,

    elevation: 5,
  },
  postImageContainer: {
    paddingTop: 20,
    paddingLeft: 12,
  },
  postImage: {
    height: 60,
    width: 60,
  },
  postDetailsContainer: {
    padding: 20,
  },
  postUrlContainer: {
    display: "flex",
    flexDirection: "row",
  },
  postUrl: {
    fontSize: 10,
    color: "grey",
  },
  postTime: {
    marginLeft: 42,
    color: "black",
    fontSize: 8,
    fontWeight: "bold",
  },
  postTitleContainer: {
    paddingTop: 5,
  },
  postTitle: {
    fontSize: 16,
    color: "black",
    maxWidth: 180,
  },
});
