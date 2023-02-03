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

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, "Details">