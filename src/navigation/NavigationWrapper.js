import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator, { AuthNavigator } from "./TabNavigator";
import StartUpScreen from "screens/StartUpScreen";

export default function NavigationWrapper() {
  const isAuth = false;
  const triedLogin = true;
  return (
    <NavigationContainer>
      {isAuth && <TabNavigator />}
      {!isAuth && triedLogin && <AuthNavigator />}
      {!isAuth && !triedLogin && <StartUpScreen />}
    </NavigationContainer>
  );
}
