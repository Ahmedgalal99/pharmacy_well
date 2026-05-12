import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/testSlice";
import ProductDetailsReducer from "./Slices/productSlice";
import { combineReducers } from "redux";
const reducer = combineReducers({
  counter: counterReducer,
  ProductDetails: ProductDetailsReducer,
});
export const store = configureStore({
  reducer,
});
