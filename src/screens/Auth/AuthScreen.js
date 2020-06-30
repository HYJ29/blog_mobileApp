import React, { useState } from "react";
import styled from "styled-components";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";

import { GeneralInput } from "components/form/inputs";
import { ButtonWithoutLine, ButtonWithLine } from "components/buttons";
import { LoginForm, RegisterForm } from "./forms";

export default function AuthScreen() {
  const AUTH_MODE = { LOG_IN: "LOGIN", REGISTER: "REGISTER" };
  const [authMode, setAuthMode] = useState(AUTH_MODE.LOG_IN);

  const ButtonController = ({ handleSubmit }) => (
    <ButtonsContainer>
      <ButtonWithoutLine
        title={
          authMode === AUTH_MODE.LOG_IN
            ? "아직 가입안하셨나요?"
            : "이미 가입하셨나요?"
        }
        onPress={() =>
          setAuthMode((prev) =>
            prev === AUTH_MODE.LOG_IN ? AUTH_MODE.REGISTER : AUTH_MODE.LOG_IN
          )
        }
      />
      <ButtonWithLine
        title={authMode === AUTH_MODE.LOG_IN ? "로그인하기" : "가입하기"}
        onPress={handleSubmit}
      />
    </ButtonsContainer>
  );
  return (
    <MainContainer>
      <ContainerKeyboardAvoidingView>
        <Header>
          <HeaderText>{authMode}</HeaderText>
        </Header>
        {authMode === AUTH_MODE.LOG_IN ? (
          <LoginForm ButtonController={ButtonController} />
        ) : (
          <RegisterForm ButtonController={ButtonController} />
        )}
      </ContainerKeyboardAvoidingView>
    </MainContainer>
  );
}

AuthScreen.screenOptions = {
  headerTitle: "Authenticate",
};

const MainContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

const ContainerKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
  margin: 10px;
`;

const Header = styled(View)``;

const HeaderText = styled(Text)`
${({ theme }) => theme.globalStyle.generalFont}
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 24px;
`;

const ButtonsContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;
