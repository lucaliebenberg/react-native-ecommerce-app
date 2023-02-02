import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DetailsScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";

// import icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Details = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.headerIcon}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={26} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>Details</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/shopping-item.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.detailsTopContainer}>
          <View style={styles.detailsTitleWrapper}>
            <Text style={styles.detailsTitle}>
              Pull & Bear Men's Fall Urban Collection
            </Text>
            <View style={styles.detailsIcon}>
              <Entypo name="heart" size={28} color="#DDD" />
            </View>
          </View>
        </View>
        <View style={styles.detailsBottomContainer}>
          <View style={styles.starWrapper}>
            <FontAwesome
              name="star"
              size={22}
              color="gold"
              style={styles.star}
            />
            <FontAwesome
              name="star"
              size={22}
              color="gold"
              style={styles.star}
            />
            <FontAwesome
              name="star"
              size={22}
              color="gold"
              style={styles.star}
            />
            <FontAwesome
              name="star"
              size={22}
              color="gold"
              style={styles.star}
            />
            <Text style={styles.starText}>4.0</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>R550.00</Text>
          </View>
        </View>
        <View style={styles.detailsDescriptionContainer}>
          <Text style={styles.detailsDescription}>
            KONG Puppy toy is customized for a growing puppy’s baby teeth, the
            unique, natural rubber formula is the most gentle within the KONG
            rubber toy line. Designed to meet the needs of a puppy’s 28-baby
            teeth, it helps teach appropriate chewing behavior while offering
            enrichment and satisfying a younger pup’s instinctual needs.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Add to cart" color="white" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  headerIcon: {},
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 30,
    marginLeft: 92,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 350,
    width: 350,
    borderRadius: 10,
  },
  detailsTopContainer: {},
  detailsTitleWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 300,
    padding: 30,
  },
  detailsIconWrapper: {},
  detailsIcon: {
    padding: 30,
    marginLeft: 26,
  },
  detailsBottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 30,
    paddingLeft: 30,
  },
  starWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 6,
  },
  starText: {
    fontSize: 14,
    paddingTop: 2.5,
    marginLeft: 4,
  },
  priceWrapper: {
    paddingRight: 30,
  },
  price: {
    fontSize: 16,
  },
  detailsDescriptionContainer: {
    padding: 30,
  },
  detailsDescription: {
    width: "100%",
    fontSize: 15,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    backgroundColor: "#3478F6",
    color: "white",
    borderRadius: 10,
    width: "90%",
  },
});
