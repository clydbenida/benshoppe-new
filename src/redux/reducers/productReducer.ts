import { createSlice } from "@reduxjs/toolkit";

const initialState: {items: Array<ProductType>} = {
  items: [
    {
      name: 'iPhone 11',
      discount: 0,
      price: 12.99,
      stock: 10,
      ratings: 5,
    },
    {
      name: 'iPhone 12',
      discount: 0,
      price: 12.99,
      stock: 10,
      ratings: 4.0,
    },
    {
      name: 'iPhone 13',
      discount: 0,
      price: 12.99,
      stock: 10,
      ratings: 4.5,
    },
  ],
}

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export default productsSlice.reducer;
