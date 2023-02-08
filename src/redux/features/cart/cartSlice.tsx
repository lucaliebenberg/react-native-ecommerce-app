// import { createSlice } from "@reduxjs/toolkit";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// export interface CartItem {
//   product: Product;
//   qty: number;
// }

// interface CartState {
//   items: CartItem[];
//   find: () => CartItem;
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, { payload }) {
//       //   console.log(payload);
//       //uid is the unique id of the item
//       const { id } = payload;

//       const find = state.find((item) => item.id === id);
//       if (find) {
//         return state.map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//               }
//             : item
//         );
//       } else {
//         state.push({
//           ...payload,
//           quantity: 1,
//         });
//       }
//     },
//     increment(state, { payload }) {
//       return state.map((item) =>
//         item.id === payload
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     },
//     decrement(state, { payload }) {
//       return state.map((item) =>
//         item.id === payload
//           ? {
//               ...item,
//               quantity: item.quantity - 1,
//             }
//           : item
//       );
//     },
//     removeItem: (state, action) => {
//       //   console.log(state);
//       //   console.log(state);
//       //   console.log(action);
//       const itemId = action.payload;
//       return state.filter((item) => item.id !== itemId);
//     },
//     clear(state) {
//       return [];
//     },
//   },
// });

// export const { addToCart, increment, decrement, removeItem, clear } =
//   cartSlice.actions;
// const cartReducer = cartSlice.reducer;

// export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  id: number;
  product: Product;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        return {
          ...state,
          items: state.items.map((item, index) =>
            index === itemIndex
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...payload, qty: 1 }],
        };
      }
    },
    increment(state, { payload }) {
      const itemIndex = state.items.findIndex((item) => item.id === payload);
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === itemIndex
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        ),
      };
    },
    decrement(state, { payload }) {
      const itemIndex = state.items.findIndex((item) => item.id === payload);
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === itemIndex
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        ),
      };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemId),
      };
    },
    clear(state) {
      return {
        ...state,
        items: [],
      };
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clear } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
