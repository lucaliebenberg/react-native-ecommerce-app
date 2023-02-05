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
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
          {/* card container below */}
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
                    // itemRating: [item.rating],
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
                      {/* <Text style={styles.cardItemRating}>{item.rating}</Text> */}
                    </View>
                    <View style={styles.cardItemContent}>
                      <View style={styles.cardItemTop}>
                        <Text style={styles.cardItemPrice}>R {item.price}</Text>
                        <Entypo name="heart" size={23} color="#DDD" />
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
          <View style={styles.ratingContainer}>
            <View style={styles.starWrapper}>
              <FontAwesome
                name="star"
                size={22}
                color="gold"
                style={styles.star}
              />
              <Text style={styles.ratingText}>4.0</Text>
            </View>
            <Entypo name="heart" size={22} color="#DDD" />
          </View>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          data={Data}
          renderItem={renderHomeItems}
          keyExtractor={(item: ItemProps, index: number) => String(index)}
        />
      </View>
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
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardContainerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 26,
  },
  cardContainerTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 245,
  },
  cardContainerSeeAllTitle: {
    fontSize: 12,
  },
  cardItemWrapper: {
    alignItems: "flex-start",
    minWidth: 300,
    minHeight: 300,
    // flexWrap: "wrap",
  },
  cardItemContainer: {
    display: "flex",
    paddingVertical: 20,
  },
  cardItemsWrapper: {
    height: 320,
    width: 150,
    borderRadius: 8,
  },
  cardItemImage: {
    height: 220,
    width: 180,
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardItemRating: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#E4204C",
    color: "white",
  },
  cardItemBackground: {
    height: 220,
    width: 180,
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
    alignItems: "center",
    width: 170,
  },
  cardItemPrice: {
    fontSize: 17,
    fontWeight: "bold",
  },
  cardItemBottom: {
    display: "flex",
    flexDirection: "row",
    width: 180,
  },
  cardItemDescription: {
    fontSize: 13,
    paddingTop: 4,
  },
  ratingContainer: {},
  ratingText: {},
  starWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  star: {
    marginRight: 6,
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
