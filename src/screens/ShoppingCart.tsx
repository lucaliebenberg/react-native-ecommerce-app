import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

// import components
import ShoppingCartCardItem from "../components/ShoppingCartCardItem";

const ShoppingCart = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>My Cart</Text>
          <View style={styles.cardContainer}>
            <ShoppingCartCardItem />
            <ShoppingCartCardItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
  },
  cardContainer: {
    paddingTop: 20,
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
// } from "react-native";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// //you can use the useNavigation to provide the navigation prop automatically (through React context, if you're curious).
// import { useNavigation } from "@react-navigation/native";
// // import {
// //   increment,
// //   decrement,
// //   clear,
// //   removeItem,
// // } from "../redux/features/cart/cartSlice";
// // import { cartTotalPriceSelector } from "../redux/selectors";
// // import components
// import ShoppingCartCardItem from "../components/ShoppingCartCardItem";

// const amount = 0;

// const CartContainer = (props) => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   const totalPrice = useSelector(cartTotalPriceSelector);

//   const AlertItem = () => {
//     Alert.alert(
//       "Are you sure you want to clear the cart?",
//       "",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel",
//         },
//         { text: "OK", onPress: () => dispatch(clear()) },
//       ],
//       { cancelable: false }
//     );
//   };

//   const renderStoreItems = ({ item }) => {
//     <SafeAreaView>
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.headerTitle}>My Cart</Text>
//           <View style={styles.cardContainer}>
//             <ShoppingCartCardItem />
//             <ShoppingCartCardItem />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>;
//   };
// };

// const ShoppingCart = () => {
//   return <View></View>;
// };

// export default ShoppingCart;

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingVertical: 16,
//   },
//   cardContainer: {
//     paddingTop: 20,
//   },
// });
