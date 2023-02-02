import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";

// import icons
import Feather from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => {}}>
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
  );
};

export default SearchBar;

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
});
