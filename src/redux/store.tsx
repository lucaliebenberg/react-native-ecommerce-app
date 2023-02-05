// import { configureStore } from "@reduxjs/toolkit";
// import AsyncStorage, {
//   AsyncStorageStatic,
// } from "@react-native-async-storage/async-storage";
// import { persistReducer } from "redux-persist";
// import thunk from "redux-thunk";
// import { combineReducers } from "redux";

// // import cartReducer
// import cartReducer from "../redux/features/cart/cartSlice";
// import userAccountReducer from "./features/account/userAccountSlice";
// import userOrdersReducer from "./features/account/userOrdersSlice";

// // persistConfig type
// type persistConfigParamList = {
//   key: String;
//   store: AsyncStorageStatic;
//   whitelist: String[];
// };

// const reducers = combineReducers({
//   cart: cartReducer,
//   account: userAccountReducer,
//   order: userOrdersReducer,
// });

// const persistConfig = {
//   key: "root",
//   store: AsyncStorage,
//   whitelist: ["cart", "account", "order"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV === "development",
//   middleware: [thunk],
// });
