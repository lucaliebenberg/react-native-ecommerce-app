import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

// import icons
import FontAwsome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.cardContainer}></View>
      </View>
      <View style={styles.profileTopContainer}>
        <View style={styles.profileTop}>
          <View style={styles.profileTopImage}>
            <Image
              source={require("../../assets/profile-image.jpg")}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.profileTopName}>John Doe</Text>
          <Text style={styles.profileTopEmail}>johndoe@example.com</Text>
        </View>
      </View>
      <View style={styles.profileBottomContainer}>
        <View style={styles.profileBottom}>
          <Text style={styles.profileBottomTitle}>Account Overview</Text>
          <View style={styles.profileBottomWrapper}>
            <TouchableOpacity>
              <View style={styles.profileBottomCardContainer}>
                {/* My Profile */}
                <View style={styles.profileBottomCardLeft}>
                  <FontAwsome name="user" size={20} color="gray" />
                  <Text style={styles.profileBottomCardTitle}>My Profile</Text>
                </View>
                <View style={styles.profileBottomCardRight}>
                  <Entypo name="chevron-right" size={22} color="gray" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.profileBottomCardContainer}>
                {/* My Orders */}
                <View style={styles.profileBottomCardLeft}>
                  <Entypo name="inbox" size={20} color="gray" />
                  <Text style={styles.profileBottomCardTitle}>My Orders</Text>
                </View>
                <View style={styles.profileBottomCardRight}>
                  <Entypo name="chevron-right" size={22} color="gray" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.profileBottomCardContainer}>
                {/* Change Password */}
                <View style={styles.profileBottomCardLeft}>
                  <FontAwesome5 name="lock" size={20} color="gray" />
                  <Text style={styles.profileBottomCardTitle}>
                    Change Password
                  </Text>
                </View>
                <View style={styles.profileBottomCardRight}>
                  <Entypo name="chevron-right" size={22} color="gray" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.profileBottomCardContainer}>
                {/* Log Out */}
                <View style={styles.profileBottomCardLeft}>
                  <Feather name="log-out" size={20} color="gray" />
                  <Text style={styles.profileBottomCardTitle}>Log Out</Text>
                </View>
                <View style={styles.profileBottomCardRight}>
                  <Entypo name="chevron-right" size={22} color="gray" />
                </View>
              </View>
            </TouchableOpacity>
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
    // backgroundColor: "#fff",
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
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
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
    display: "flex",
    flexDirection: "column",
    height: 360,
    width: "100%",
  },
  profileBottomTitle: {
    fontSize: 20,
    color: "black",
    padding: 24,
    fontWeight: "bold",
  },
  profileBottomWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 12,
  },
  profileBottomCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingBottom: 12,
  },
  profileBottomCardLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 28,
  },
  profileBottomCardTitle: {
    fontSize: 18,
    marginLeft: 32,
  },
  profileBottomCardRight: {
    paddingRight: 16,
  },
});
