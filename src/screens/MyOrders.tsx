import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  DetailsScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import icons
import Entypo from "react-native-vector-icons/Entypo";

// import components
import MyOrdersItem from "../components/MyOrdersItem";

const MyOrders = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>My Orders</Text>
      </View>
      <View style={styles.itemsWrapper}>
        <MyOrdersItem />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    justifyContent: "center",
    marginLeft: 12,
    marginTop: 12,
  },
  itemsWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
