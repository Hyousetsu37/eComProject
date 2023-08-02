/* eslint-disable no-undef */

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

/* import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


export const persistor = persistStore(store);
*/

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  //middleware:middleWares
});
