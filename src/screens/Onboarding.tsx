import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { LoginInNavigationProp } from "../types/navigation";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  OnboardingScreenRouteProp,
  MainStackParamList,
} from "../types/navigation";

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

const OnboardingScreens = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList>) => {
  const [showOnboard, setShowOnboard] = useState<boolean>(true);
  //   const navigation = useNavigation<LoginInNavigationProp>();

  const logInUser = () => {
    navigation.navigate("LogIn");
  };

  const handleOnboardFinish = () => {
    setShowOnboard(false);
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
        // backgroundColor: '#fff',
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
          title: "Take a picture",
          subtitle:
            "Easily track all your gas purchases by taking a picture of your receipt with Gas Year's simple and convenient camera feature.",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={require("../../assets/onboard2.png")}
              style={styles.onboardImage}
            />
          ),
          title: "Your personal gas tracker",
          subtitle:
            "Never lose track of your gas spending again. Get a clear view of all your purchases in one place with Gas Year's comprehensive history.",
        },
        {
          backgroundColor: "white",
          image: (
            <Image
              source={require("../../assets/onboard3.png")}
              style={styles.onboardImage}
            />
          ),
          title: "Insightful analytics",
          subtitle:
            "Get valuable insights into your gas spending with Gas Year's built-in analytics. Discover where your money is going and make informed decisions about your fuel expenses.",
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
  },
  onboardImage: {
    width: 280,
    height: 300,
  },
});
