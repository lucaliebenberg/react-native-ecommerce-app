import { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {title: string};
    Settings: undefined;
    Onboarding: undefined;
    LogIn: undefined;
    SignUp: undefined;
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

 export type ItemProps = {
    id: number,
    image: string;
    title: string;
    price: number;
    description: string;
  };
  

export type OnboardingScreenRouteProp = RouteProp<MainStackParamList, "Onboarding">
export type LogInScreenRouteProp = RouteProp<MainStackParamList, "LogIn">
export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
export type ChangePasswordScreenRouteProp = RouteProp<SettingsStackParamList, "ChangePassword">
export type MyOrdersScreenRouteProp = RouteProp<SettingsStackParamList, "MyOrders">

