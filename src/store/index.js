import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { applyMiddleware, createStore } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  products: ProductSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

// const newStore = createStore(reducer, applyMiddleware(logger));


export default store;
