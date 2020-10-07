import { useFormik } from "formik";
import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import {
  Footer,
  FooterAction,
  FooterText,
  FormContainer,
  SocialIconButton,
  SocialIcons,
  TextInput,
  TextInputContainer
} from "../../components";
import Button from "../../components/Button";
import { Facebook, Github, İcons8Google } from "../../components/icons";
import { Form } from "../../constants";
import { Box, Schemas, Text } from "../../utils";
import { useTheme } from "./../../utils/Theme";

interface IFormValues {
  email: string;
  password: string;
}

const formValues: IFormValues = {
  email: "",
  password: "",
};
export const Login = ({}) => {
  const {
    setFieldTouched,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    getFieldMeta,
    isValid,
    setFieldValue,
    dirty,
  } = useFormik({
    validationSchema: Schemas.LoginSchema,
    initialValues: formValues,
    onSubmit: (values: IFormValues) => console.log(values),
  });

  const theme = useTheme();
  const valid = isValid && dirty;
  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer>
      <Box flex={1}>
        <FooterText>{Form.loginFooterText}</FooterText>
        <SocialIcons>
          <SocialIconButton onPress={() => true}>
            <İcons8Google />
          </SocialIconButton>
          <SocialIconButton onPress={() => true}>
            <Facebook fill={theme.colors.facebookColor} />
          </SocialIconButton>
          <SocialIconButton onPress={() => true}>
            <Github fill={theme.colors.githubColor} />
          </SocialIconButton>
        </SocialIcons>
      </Box>

      <Box justifyContent="center" flex={0.3} mt="m">
        <FooterAction
          onPress={() => true}
          title="Don't you have an account ?"
          action="Sign Up"
        />
      </Box>
    </Footer>
  );

  const onSubmit = (values: IFormValues) => console.log(values);
  return (
    <FormContainer title={Form.loginFormTitle} {...{ footer }}>
      <TextInputContainer>
        <TextInput
          placeholder={Form.emailPlaceHolder}
          icon="mail"
          onChangeText={(e) => {
            setFieldValue("email", e);
            setTimeout(() => setFieldTouched("email", true));
          }}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyLabel="next"
          returnKeyType="next"
          onSubmitEditing={() => password.current?.focus()}
          blurOnSubmit={false}
          touched={touched.email}
          error={errors.email}
          onBlur={handleBlur("email")}
        />
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          ref={password}
          placeholder={Form.passwordPlaceHolder}
          icon="lock"
          onChangeText={(e) => {
            setFieldValue("password", e);
            setTimeout(() => setFieldTouched("password", true));
          }}
          autoCapitalize="none"
          autoCompleteType="password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          onSubmitEditing={() => handleSubmit()}
          touched={touched.password}
          error={errors.password}
          onBlur={handleBlur("password")}
        />
      </TextInputContainer>
      <Box mt="m">
        <Button
          onPress={handleSubmit}
          disabled={valid ? false : true}
          backgroundColor={valid ? "formButtonColor" : "disabledButtonColor"}
          rounded
        >
          {Form.loginButtonText}
        </Button>
      </Box>
      <Text mt="m" variant="authText" color="authAction">
        {Form.forgotPassword}
      </Text>
    </FormContainer>
  );
};

export default Login;
