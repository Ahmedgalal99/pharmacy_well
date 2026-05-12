import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: null,
};

export const ProductDetailsSlice = createSlice({
  name: "ProductDetails",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.details = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductDetails } = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
