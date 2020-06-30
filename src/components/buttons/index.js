import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const ButtonWithoutLine = ({ title, children, ...props }) => {
  return (
    <ButtonWithoutLineContainer {...props}>
      <ButtonText>{title ? title : children}</ButtonText>
    </ButtonWithoutLineContainer>
  );
};

export const ButtonWithLine = ({ title, children, ...props }) => {
  return (
    <ButtonsWithLineContainer {...props}>
      <ButtonText>{title ? title : children}</ButtonText>
    </ButtonsWithLineContainer>
  );
};

const ButtonWithoutLineContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  min-width: 100px;
`;

const ButtonsWithLineContainer = styled(ButtonWithoutLineContainer)`
  border-width: 2px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.yellow};
`;

const ButtonText = styled(Text)`
${({ theme }) => theme.globalStyle.generalFont}
  color: ${({ theme }) => theme.colors.yellow};
`;
