import React, { useState } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import styled, { ThemeProvider } from "styled-components";

import { NavigationWrapper } from "navigation";
import configureStore from "data/configureStore";
import theme from "theme";

const fetchData = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    jua: require("./assets/fonts/Jua-Regular.ttf"),
  });
};

const store = configureStore();

export default function App() {
  const [dataLoaded, setDateLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchData} onFinish={() => setDateLoaded(true)} />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    </ThemeProvider>
  );
}
