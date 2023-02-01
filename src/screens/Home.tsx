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
      <CardItem />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
