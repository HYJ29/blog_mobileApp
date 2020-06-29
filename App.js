import React, { useState } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { NavigationWrapper } from "navigation";
import store from "data/configureStore";

const fetchData = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDateLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchData} onFinish={() => setDateLoaded(true)} />
    );
  }
  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  );
}
