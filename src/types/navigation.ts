import { RouteProp } from "@react-navigation/native"

import { ImageSourcePropType } from "react-native";

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {
      itemId: number;
      itemTitle: string;
      itemImage: string;
      itemPrice: number;
      itemDescription: string;
      // itemRating: [number];
   };
    Settings: undefined;
    Onboarding: undefined;
    LogIn: undefined;
    SignUp: undefined;
    navigation: {
      navigate: (screen: string, params: { item: ItemProps }) => void;
   };
    toggleDrawer: () => {};
}

export type SettingsStackParamList = {
    Profile: undefined;
    EditProfile: undefined;
    ChangePassword: undefined;
    MyOrders: undefined;
}

export type AuthStackParamList = { 
    Welcome: undefined;
    SignUp: undefined;
    LogIn: undefined;
 }

 export type LogInNavigationProp = {
    navigate: any;
    Onboarding: undefined;
    LogIn: undefined;
 }

 export type OnboardingParamList = {
    boolean: undefined;
 }

 export type Props = {
   navigation: {
      navigate: (screen: string, params: { item: ItemProps }) => void;
   };
 }

 export type ItemProps = {
    id: number,
    image: string;
    item: ItemProps;
    title: string;
    price: number;
    description: string;
    rating: number;
  };

  

export type OnboardingScreenRouteProp = RouteProp<MainStackParamList, "Onboarding">
export type LogInScreenRouteProp = RouteProp<MainStackParamList, "LogIn">
export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
export type ChangePasswordScreenRouteProp = RouteProp<SettingsStackParamList, "ChangePassword">
export type MyOrdersScreenRouteProp = RouteProp<SettingsStackParamList, "MyOrders">

