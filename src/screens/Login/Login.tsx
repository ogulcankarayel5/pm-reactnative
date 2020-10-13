import { androidClientId } from "@env";
import * as Google from "expo-google-app-auth";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { useDispatch } from "react-redux";
import { IFormValues } from "../../../types";
import {
  Button,
  Facebook,
  Footer,
  FooterAction,
  FooterText,
  FormContainer,
  Github,
  SocialIconButton,
  SocialIcons,
  TextInput,
  TextInputContainer,
  İcons8Google
} from "../../components";
import { Form } from "../../constants";
import { loginWithGoogle } from "../../redux/auth/actions";
import { Box, Schemas, Text } from "../../utils";
import { AuthNavigationProps } from "./../../types/navigation-type";
import { useTheme } from "./../../utils/Theme";



const formValues: IFormValues = {
  email: "",
  password: "",
};
const Login = ({ navigation }: AuthNavigationProps<"Login">) => {

  const dispatch = useDispatch();
  const {
    setFieldTouched,
    handleSubmit, 
    handleBlur,
    errors,
    touched,
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


  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:androidClientId,
      });

      if (result.type === "success") {
        dispatch(loginWithGoogle(result.accessToken && result.accessToken))
      }
    } catch ({message}) {
      return message
    }
  };


  const footer = (
    <Footer>
      <Box flex={1}>
        <FooterText>{Form.loginFooterText}</FooterText>
        <SocialIcons>
          <SocialIconButton onPress={signInWithGoogleAsync}>
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
          onPress={() => navigation.navigate("SignUp")}
          title="Don't you have an account ?"
          action="Sign Up"
        />
      </Box>
    </Footer>
  );

 
  return (
    <FormContainer title={Form.loginFormTitle} {...{ footer }}>
      <TextInputContainer>
        <TextInput
          placeholder={Form.emailPlaceHolder}
          icon="mail"
          onChangeText={(email) => {
            setFieldValue("email", email);
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
          onChangeText={(password) => {
            setFieldValue("password", password);
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
