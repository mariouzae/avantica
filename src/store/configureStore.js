import * as lib from "../dependencies";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: lib.AsyncStorage,
};

const reducer = lib.persistCombineReducers(persistConfig, rootReducer);

const middleware = [lib.thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(lib.createLogger());
}

const configureStore = () => {
  const store = lib.createStore(reducer, lib.applyMiddleware(...middleware));
  const persistor = lib.persistStore(store);

  return { store, persistor };
};

export default configureStore;
