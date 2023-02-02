import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SavedCardItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postImageContainer}>
        <Image
          source={require("../../assets/shopping-item.jpg")}
          style={styles.postImage}
        />
      </View>
      <View style={styles.postDetailsContainer}>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>Men's S sweatshirt</Text>
        </View>

        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemPrice}>R500</Text>
        </View>

        <View style={styles.itemButtonsContainer}>
          <Button title="Edit" />
          <Button title="Remove" color={"red"} />
        </View>
      </View>
    </View>
  );
};

export default SavedCardItem;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 140,
    backgroundColor: "#FFF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.44,

    elevation: 5,
  },
  postImageContainer: {
    paddingTop: 20,
    paddingLeft: 12,
  },
  postImage: {
    height: 98,
    width: 98,
  },
  postDetailsContainer: {
    // padding: 28,
    paddingLeft: 18,
    paddingTop: 17,
  },
  itemPriceContainer: {
    display: "flex",
    flexDirection: "row",
  },
  itemPrice: {
    fontSize: 19,
    color: "grey",
    paddingTop: 5,
  },
  itemIcons: {
    marginLeft: 62,
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 9,
    marginRight: 16,
  },
  itemIcon: {
    paddingLeft: 5,
  },
  postTitleContainer: {
    paddingTop: 5,
  },
  postTitle: {
    fontSize: 16,
    color: "black",
    maxWidth: 180,
  },
  itemButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});

// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";

// // import icons
// import Entypo from "react-native-vector-icons/Entypo";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// const SavedCardItem = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.postImageContainer}>
//         <Image
//           source={require("../../assets/shopping-item.jpg")}
//           style={styles.postImage}
//         />
//       </View>
//       <View style={styles.postDetailsContainer}>
//         <View style={styles.postTitleContainer}>
//           <Text style={styles.postTitle}>Men's S sweatshirt</Text>
//         </View>

//         <View style={styles.itemPriceContainer}>
//           <Text style={styles.itemPrice}>R550.00</Text>

//           <Text style={styles.itemIcons}>
//             <TouchableOpacity>
//               <Entypo name="shopping-cart" size={18} color="black" />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <MaterialCommunityIcons
//                 style={{ marginLeft: 10 }}
//                 name="delete"
//                 size={18}
//                 color="black"
//               />
//             </TouchableOpacity>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default SavedCardItem;

// const styles = StyleSheet.create({
//   container: {
//     width: 320,
//     height: 95,
//     backgroundColor: "#FFF",
//     borderRadius: 5,
//     display: "flex",
//     flexDirection: "row",
//     marginTop: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 2.44,

//     elevation: 5,
//   },
//   postImageContainer: {
//     paddingTop: 20,
//     paddingLeft: 12,
//   },
//   postImage: {
//     height: 60,
//     width: 60,
//   },
//   postDetailsContainer: {
//     padding: 20,
//   },
//   itemPriceContainer: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   itemPrice: {
//     fontSize: 16,
//     color: "grey",
//     paddingTop: 5,
//   },
//   itemIcons: {
//     marginLeft: 110,
//     color: "black",
//     fontSize: 8,
//     fontWeight: "bold",
//     paddingTop: 5,
//   },
//   itemIcon: {
//     paddingLeft: 5,
//   },
//   postTitleContainer: {
//     paddingTop: 5,
//   },
//   postTitle: {
//     fontSize: 16,
//     color: "black",
//     maxWidth: 180,
//   },
// });
