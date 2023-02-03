import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import components
import SearchBar from "../components/SearchBar";
import PromotionCard from "../components/PromotionCard";
import Tags from "../components/Tags";
import CardItem from "../components/CardItem";

// import icons
import Feather from "react-native-vector-icons/Feather";

const Home = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            title: "This is a test",
          })
        }
      /> */}

        {/* Menu & Search Bar  */}
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer<MainStackParamList>()}
          >
            <Feather
              name="menu"
              size={30}
              color="black"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          {/* <Feather style={styles.search} name="search" size={20} color="#CCC" /> */}
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>
        <PromotionCard />
        <Tags />

        {/* Popular section */}
        <View style={styles.cardContainer}>
          <View style={styles.cardContainerTitle}>
            <Text style={styles.cardContainerTitleText}>Popular</Text>
            {/* <Text style={styles.cardContainerSeeAllTitle}>See all</Text> */}
          </View>
          <View style={styles.cardItemWrapper}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  title: "Details",
                })
              }
            >
              <CardItem />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  title: "Details",
                })
              }
            >
              <CardItem />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  title: "Details",
                })
              }
            >
              <CardItem />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  title: "Details",
                })
              }
            >
              <CardItem />
            </TouchableOpacity>
          </View>
          {/* Trending section */}
          <View style={styles.cardContainer}>
            <View style={styles.cardContainerTitle}>
              <Text style={styles.cardContainerTitleText}>Trending</Text>
              {/* <Text style={styles.cardContainerSeeAllTitle}>See all</Text> */}
            </View>
            <View style={styles.cardItemWrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    title: "Details",
                  })
                }
              >
                <CardItem />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    title: "Details",
                  })
                }
              >
                <CardItem />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    title: "Details",
                  })
                }
              >
                <CardItem />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    title: "Details",
                  })
                }
              >
                <CardItem />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignI: "center",
  },
  searchInput: {
    height: 40,
    width: 300,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    placeholderTextColor: "gray",
    paddingLeft: 14,
  },
  search: {
    position: "absolute",
    padding: 30,
  },
  searchIcon: {
    paddingRight: 16,
  },
  wrapper: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    marginTop: 10,
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
    minHeight: 300,
    flexWrap: "wrap",
  },
});
