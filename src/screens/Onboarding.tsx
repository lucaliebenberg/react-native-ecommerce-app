import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { LogInNavigationProp } from "../types/navigation";

const Dots = ({ selected }: any) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreens = () => {
  const navigation = useNavigation<LogInNavigationProp>();

  const logInUser = () => {
    navigation.navigate("Welcome");
  };

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={logInUser}
      onDone={logInUser}
      containerStyles={{
        backgroundColor: "#fff",
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        paddingTop: 100,
        paddingBottom: 100,
      }}
      pages={[
        {
          backgroundColor: "white",
          image: (
            <Image
              source={require("../../assets/onboard1.png")}
              style={styles.onboardImage}
            />
          ),
          title: "Pick Your Style",
          subtitle:
            "Browse through the variety of products and decide what you like",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={require("../../assets/onboard2.png")}
              style={styles.onboardImage}
            />
          ),
          title: "Pick Your Size",
          subtitle: "Choose your favourite color and size ",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={require("../../assets/onboard3.png")}
              style={styles.onboardImage}
            />
          ),
          title: "Buy All Online",
          subtitle: " Purchase all your favourites products online",
        },
      ]}
    />
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  onboardImage: {
    width: 280,
    height: 300,
  },
});
