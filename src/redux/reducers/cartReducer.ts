import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ReduxCartType = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItemType>) => {
      if (state.items?.length) {
        state.items = [
          ...state.items,
          action.payload
        ];
      } else {
        state.items = [action.payload];
      }
    },
  }
});

export const {add} = cartSlice.actions;

export default cartSlice.reducer;
