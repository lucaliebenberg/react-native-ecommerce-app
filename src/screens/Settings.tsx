import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

// import icons
import FontAwsome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.cardContainer}></View>
      </View>
      <View style={styles.profileTopContainer}>
        <View style={styles.profileTop}>
          <View style={styles.profileTopImage}></View>
          <Text style={styles.profileTopName}>John Doe</Text>
          <Text style={styles.profileTopEmail}>johndoe@example.com</Text>
        </View>
      </View>
      <View style={styles.profileBottomContainer}>
        <View style={styles.profileBottom}>
          <Text style={styles.profileBottomTitle}>Account Overview</Text>
          <View style={styles.profileBottomCardContainer}>
            <View style={styles.profileBottomCardLeft}>
              <FontAwsome name="user" size={20} color="gray" />
              <Text style={styles.profileBottomCardTitle}>My Profile</Text>
            </View>
            <View style={styles.profileBottomCardRight}>
              <Entypo name="chevron-right" size={20} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

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
  profileTopContainer: {
    display: "flex",
    flexDirection: "column",
  },
  profileTop: {
    height: 240,
    width: "100%",
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
  },
  profileTopImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "black",
    marginBottom: 26,
  },
  profileTopName: {
    fontSize: 18,
  },
  profileTopEmail: {
    marginTop: 8,
    color: "grey",
  },
  profileBottomContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  profileBottom: {
    height: 360,
    width: "100%",
  },
  profileBottomTitle: {
    fontSize: 18,
    color: "black",
    padding: 24,
  },
  profileBottomCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileBottomCardLeft: {},
  profileBottomCardTitle: {},
  profileBottomCardRight: {},
});
