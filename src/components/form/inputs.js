import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import { useField } from "formik";

export const GeneralInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <InputStyled {...props} {...field} />
      <Text>{meta.touched && meta.error && meta.error}</Text>
    </InputContainer>
  );
};

const InputContainer = styled(View)`
  width: 100%;
  align-items: center;
`;

const InputStyled = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.blue_dark,
}))`
  ${({ theme }) => ({
    ...theme.globalStyle.generalFont,
  })}
  width: 80%;
  height: 28px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_1};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 24px;
  margin-bottom: 20px;
`;
