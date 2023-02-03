import { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {title: string};
    Settings: undefined;
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

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
export type ChangePasswordScreenRouteProp = RouteProp<SettingsStackParamList, "ChangePassword">
export type MyOrdersScreenRouteProp = RouteProp<SettingsStackParamList, "MyOrders">
