import "react-native-gesture-handler";
import React from "react";
import * as lib from "./src/dependencies";
import Screens from "./src/screens";
import configureStore from "./src/store/configureStore";

export default function App() {
  const { store, persistor } = configureStore();

  return (
    <lib.Provider store={store}>
      <lib.PersistGate persistor={persistor}>
        <lib.NavigationContainer>
          <Screens />
        </lib.NavigationContainer>
      </lib.PersistGate>
    </lib.Provider>
  );
}
