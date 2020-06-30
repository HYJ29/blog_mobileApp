import React from "react";
import styled from "styled-components";
import { View, Text, ActivityIndicator } from "react-native";

import Colors from "theme/colors";

export default function StartUpScreen() {
  return (
    <ContainerView>
      <ActivityIndicator size="large" color={Colors.gray_1} />
    </ContainerView>
  );
}

const ContainerView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
