import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

import rootReducer from "./rootReducer";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "root",
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware]),
    ); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

const wrapper = createWrapper(makeStore, { debug: false });

const WrapperComponent = ({ children }) => {
  const store = useStore(state => state);
  return (
    <PersistGate loading={<div>Loading</div>} persistor={store.__persistor}>
      {children}
    </PersistGate>
  );
};

export const ReduxWrapper = wrapper.withRedux(WrapperComponent);

// yarn add next-redux-wrapper@6.0.2 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0 redux-persist@6.0.0
// yarn add --dev redux-devtools-extension@2.13.0
