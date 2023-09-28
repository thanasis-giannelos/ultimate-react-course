// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

import { createSlice } from "@reduxjs/toolkit";

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }


const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const { id, name, unitPrice } = action.payload;
      const newItem = { pizzaId: id, name, quantity: 1, unitPrice: 15, totalPrice: unitPrice };
      state.items.push(newItem);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const theItem = state.items.find(item => item.pizzaId === action.payload)
      theItem.quantity += 1;
      theItem.totalPrice += theItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const theItem = state.items.find(item => item.pizzaId === action.payload)

      // if (theItem.quantity === 0) caseReducer(deleteItem);

      theItem.quantity -= 1;
      theItem.totalPrice -= theItem.unitPrice;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const getCart = (state) => state.cart.items;

export const getTotalCartCost = (state) => state.cart.items.reduce((sum, item) => sum + item.totalPrice, 0)

export const getTotalCartQuantity = (state) => state.cart.items.length;

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
