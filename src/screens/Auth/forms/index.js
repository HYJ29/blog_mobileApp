import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { GeneralInput } from "components/form/inputs";

export function LoginForm({ ButtonController }) {
  return (
    <FormLayoutWrapper>
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
        }}
        validationSchema={Yup.object({
          emailAddress: Yup.string()
            .email("유효하지 않은 이메일입니다. ")
            .required("필수 항목 입니다."),
          password: Yup.string()
            .min(5, "비밀번호는 5글자 이상이어야 합니다.")
            .max(20, "비밀번호는 20글자 이하이어야 합니다.")
            .required("필수항목입니다."),
        })}
        onSubmit={(values) => console.log("values", values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <FormContainer>
              <GeneralInput
                name="emailAddress"
                id="emailAddress"
                onChangeText={handleChange("emailAddress")}
                onBlur={handleBlur("emailAddress")}
                value={values.emailAddress}
                placeholder="이메일"
                autoCapitalize="none"
              />
              <GeneralInput
                name="password"
                id="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="비밀번호"
                autoCapitalize="none"
                secureTextEntry
              />
            </FormContainer>
            <ButtonController handleSubmit={handleSubmit} />
          </>
        )}
      </Formik>
    </FormLayoutWrapper>
  );
}

export function RegisterForm({ ButtonController }) {
  return (
    <Formik
      initialValues={{
        emailAddress: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={(values) => console.log("values", values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <FormLayoutWrapper>
          <FormContainer>
            <GeneralInput
              name="emailAddress"
              id="emailAddress"
              onChangeText={handleChange("emailAddress")}
              onBlur={handleBlur("emailAddress")}
              value={values.emailAddress}
              placeholder="이메일"
              autoCapitalize="none"
            />
            <GeneralInput
              name="password"
              id="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="비밀번호"
              autoCapitalize="none"
              secureTextEntry
            />
            <GeneralInput
              name="passwordConfirm"
              id="passwordConfirm"
              onChangeText={handleChange("passwordConfirm")}
              onBlur={handleBlur("passwordConfirm")}
              value={values.password}
              placeholder="비밀번호 확인"
              autoCapitalize="none"
              secureTextEntry
            />
          </FormContainer>
          <ButtonController handleSubmit={handleSubmit} />
        </FormLayoutWrapper>
      )}
    </Formik>
  );
}

const FormLayoutWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled(View)`
  width: 80%;
`;
