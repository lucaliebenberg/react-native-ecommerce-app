import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import components
import SearchBar from "../components/SearchBar";
import PromotionCard from "../components/PromotionCard";
import Tags from "../components/Tags";
import CardItem from "../components/CardItem";

const Home = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.cardContainer}>
        <View style={styles.cardContainerTitle}>
          <Text style={styles.cardContainerTitleText}>Popular</Text>
          <Text style={styles.cardContainerSeeAllTitle}>See all</Text>
        </View>
        <CardItem />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  cardContainer: {},
  cardContainerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 26,
  },
  cardContainerTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainerSeeAllTitle: {
    fontSize: 12,
  },
});
