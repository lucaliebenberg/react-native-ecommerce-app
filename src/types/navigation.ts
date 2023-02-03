import { RouteProp } from "@react-navigation/native"

export type MainStackParamList = {
    Drawer: undefined;
    Home: undefined;
    Details: {title: string};
    Settings: undefined;
    EditProfile: undefined;
    ChangePassword: undefined;
    MyOrders: undefined;
    LogIn: undefined;
    SignUp: undefined;
    toggleDrawer: () => void;
}

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">
export type ChangePasswordScreenRouteProp = RouteProp<MainStackParamList, "ChangePassword">
export type MyOrdersScreenRouteProp = RouteProp<MainStackParamList, "MyOrders">
