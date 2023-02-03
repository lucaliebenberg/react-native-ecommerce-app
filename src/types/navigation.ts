import { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {title: string};
    Settings: undefined;
    Onboarding: undefined;
    LogIn: undefined;
    SignUp: undefined;
    toggleDrawer: () => void;
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

 export type LoginInNavigationProp = {
    navigate: any;
    Onboarding: undefined;
    Login: undefined;
 }

 export type OnboardingParamList = {
    boolean: undefined;
 }

export type OnboardingScreenRouteProp = RouteProp<MainStackParamList, "Onboarding">
export type LogInScreenRouteProp = RouteProp<MainStackParamList, "LogIn">
export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
export type ChangePasswordScreenRouteProp = RouteProp<SettingsStackParamList, "ChangePassword">
export type MyOrdersScreenRouteProp = RouteProp<SettingsStackParamList, "MyOrders">

