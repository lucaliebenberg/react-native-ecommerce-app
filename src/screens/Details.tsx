import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DetailsScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";

const Details = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <SafeAreaView>
      <Text>{route.params.title}</Text>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
