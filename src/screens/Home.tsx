import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import components
import SearchBar from "../components/SearchBar";
import PromotionCard from "../components/PromotionCard";
import Tags from "../components/Tags";
import CardItem from "../components/CardItem";
// import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <ScrollView style={styles.container}>
      {/* <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            title: "This is a test",
          })
        }
      /> */}
      <SearchBar />
      <PromotionCard />
      <Tags />
      {/* Popular section */}
      <View style={styles.cardContainer}>
        <View style={styles.cardContainerTitle}>
          <Text style={styles.cardContainerTitleText}>Popular</Text>
          <Text style={styles.cardContainerSeeAllTitle}>See all</Text>
        </View>
        <View style={styles.cardItemWrapper}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </View>
      </View>

      {/* Trending section
      <View style={styles.cardContainer}>
        <View style={styles.cardContainerTitle}>
          <Text style={styles.cardContainerTitleText}>Trending</Text>
          <Text style={styles.cardContainerSeeAllTitle}>See all</Text>
        </View>
        <View style={styles.cardItemWrapper}>
          <CardItem />
        </View>
      </View> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  cardContainer: {
    height: "100%",
    width: "100%",
  },
  cardContainerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 26,
  },
  cardContainerTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardContainerSeeAllTitle: {
    fontSize: 12,
  },
  cardItemWrapper: {
    display: "flex",
    flexDirection: "row",
    minWidth: 400,
    flexWrap: "wrap",
  },
});
