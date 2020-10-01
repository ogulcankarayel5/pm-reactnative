import React from "react";
import {
  Footer,
  FooterAction,
  FooterText,
  FormContainer,
  SocialIconButton,
  SocialIcons,
  TextInput
} from "../../components";
import Button from "../../components/Button";
import { Facebook, Github, İcons8Google } from "../../components/icons";
import { Box, Text } from "../../utils";
import { useTheme } from "./../../utils/Theme";

interface LoginProps {}

export const Login = ({}) => {
  const theme = useTheme();

  const footer = (
    <Footer>
      <Box flex={1}>
        <FooterText>or sign in with</FooterText>
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

  return (
    <FormContainer title="Login to your Account" {...{ footer }}>
      <TextInput
        placeholder="Enter email"
        icon="mail"
        placeholderTextColor={theme.colors.primaryPlaceholder}
      />
      <TextInput />
      <Box mt="m">
        <Button
          backgroundColor="formButtonColor"
          rounded
          style={{ width: "100%" }}
        >
          Sign in
        </Button>
      </Box>
      <Text mt="m" variant="authText" color="authAction">
        Forgot Password
      </Text>
    </FormContainer>
  );
};

export default Login;
