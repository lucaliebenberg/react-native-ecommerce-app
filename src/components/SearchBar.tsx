import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

// import icons
import Feather from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather style={styles.search} name="search" size={20} color="#CCC" />
      <TextInput style={styles.input} placeholder="Search..." />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    placeholderTextColor: "gray",
    paddingLeft: 44,
  },
  search: {
    position: "absolute",
    padding: 30,
  },
});
