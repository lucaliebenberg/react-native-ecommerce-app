import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainStackParamList, ItemProps } from "../types/navigation";

// import components
import SearchBar from "../components/SearchBar";
import PromotionCard from "../components/PromotionCard";
import Tags from "../components/Tags";
import CardItem from "../components/CardItem";

// import icons
import Feather from "react-native-vector-icons/Feather";

// import icons
import Entypo from "react-native-vector-icons/Entypo";

// FlatList prop types
type FlatListParamList = {
  id: string;
};

const Home = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  const [Data, setData] = useState();

  useEffect(() => {
    // console.log('cart', cart)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const HomeItems = () => {
    const renderHomeItems = ({ item }: { item: ItemProps }) => {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContainerTitle}>
              <Text style={styles.cardContainerTitleText}>{item.title}</Text>
            </View>

            <View style={styles.cardItemWrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    itemId: item.id,
                    itemTitle: item.title,
                    itemImage: item.image,
                    itemPrice: item.price,
                    itemDescription: item.description,
                  })
                }
              >
                <View style={styles.cardItemContainer}>
                  <View style={styles.cardItemsWrapper}>
                    <View style={styles.cardItemImage}>
                      <Image
                        style={styles.cardItemBackground}
                        source={{ uri: item.image }}
                      />
                    </View>
                    <View style={styles.cardItemContent}>
                      <View style={styles.cardItemTop}>
                        <Text style={styles.cardItemPrice}>R {item.price}</Text>
                        <Entypo name="heart" size={18} color="#DDD" />
                      </View>
                      <View style={styles.cardItemBottom}>
                        <Text
                          style={styles.cardItemDescription}
                          numberOfLines={2}
                        >
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    return (
      <>
        <FlatList
          data={Data}
          renderItem={renderHomeItems}
          keyExtractor={(item: ItemProps, index: number) => String(index)}
        />
      </>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <HomeItems />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  searchContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  cardContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 26,
  },
  cardContainerTitleText: {
    fontSize: 13,
    fontWeight: "bold",
    maxWidth: 160,
  },
  cardContainerSeeAllTitle: {
    fontSize: 12,
  },
  cardItemWrapper: {
    display: "flex",
    flexDirection: "row",
    minWidth: 400,
    minHeight: 300,
    // flexWrap: "wrap",
  },
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
    height: 170,
    width: 130,
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardItemBackground: {
    height: 170,
    width: 130,
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
    fontSize: 12,
    paddingTop: 4,
  },
});

{
  /* Trending section */
}
{
  /* <View style={styles.cardContainer}>
                <View style={styles.cardContainerTitle}>
                  <Text style={styles.cardContainerTitleText}>
                    {item.title}
                  </Text>
                  <Text style={styles.cardContainerSeeAllTitle}>See all</Text>
                </View>
                <View style={styles.cardItemWrapper}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Details", {
                        title: "Details",
                      })
                    }
                  >
                    <View style={styles.cardItemContainer}>
                      <View style={styles.cardItemsWrapper}>
                        <View style={styles.cardItemImage}>
                          <Image
                            style={styles.cardItemBackground}
                            source={{ uri: item.image }}
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
                  </TouchableOpacity>
                </View>
              </View> */
}
