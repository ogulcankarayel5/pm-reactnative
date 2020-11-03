import { useFormik } from "formik";
import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { IFormValues } from "../../../types";
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
import { Box, Schemas } from "../../utils";
import { AuthNavigationProps } from "./../../types/navigation-type";
import { useTheme } from "./../../utils/Theme";

interface ISignUpFormValues extends IFormValues {
  name: string;
}

const formValues: ISignUpFormValues = {
  email: "",
  password: "",
  name: "",
};
const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
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
    validationSchema: Schemas.SignUpSchema,
    initialValues: formValues,
    onSubmit: (values: ISignUpFormValues) => console.log(values),
  });

  const theme = useTheme();
  const valid = isValid && dirty;
  const email = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer>
      <Box flex={1}>
        <FooterText>{Form.signupFooterText}</FooterText>
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
          onPress={() => navigation.navigate("Login")}
          title="Already have an account ?"
          action="Sign In"
        />
      </Box>
    </Footer>
  );

  return (
    <FormContainer title={Form.signupFormTitle} {...{ footer }}>
      <TextInputContainer>
        <TextInput
          placeholder={Form.namePlaceHolder}
          icon="user"
          onChangeText={(name) => {
            setFieldValue("name", name);
            setTimeout(() => setFieldTouched("name", true));
          }}
          autoCapitalize="none"
          autoCompleteType="name"
          keyboardType="default"
          returnKeyLabel="next"
          returnKeyType="next"
          onSubmitEditing={() => email.current?.focus()}
          blurOnSubmit={false}
          touched={touched.name}
          error={errors.name}
          onBlur={handleBlur("name")}
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInput
          ref={email}
          placeholder={Form.emailPlaceHolder}
          icon="mail"
          onChangeText={(e) => {
            setFieldValue("email", e);
            setTimeout(() => setFieldTouched("email", true));
          }}
          autoCapitalize="none"
          autoCompleteType="email"
          returnKeyLabel="next"
          returnKeyType="next"
          secureTextEntry
          onSubmitEditing={() => password.current?.focus()}
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
    
    </FormContainer>
  );
};

export default SignUp;
