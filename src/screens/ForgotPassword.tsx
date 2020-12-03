import {
    Button,
    FormContainer,
    TextInput,
    TextInputContainer
} from 'components';
import { Form } from 'constants';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FormUser } from 'store';
import { forgotPassword } from 'store/auth/actions';
import { AuthNavigationProps } from 'types';
import { Box, Schemas } from 'utils';

const formValues: FormUser = {
    email: '',
};
const ForgotPassword = ({
    navigation,
}: AuthNavigationProps<'ForgotPassword'>) => {
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
        validationSchema: Schemas.ForgotPasswordSchema,
        initialValues: formValues,
        onSubmit: (values: FormUser) => {
            console.log(values);

            dispatch(forgotPassword(values.email!));
            navigation.navigate('Login');
        },
    });

    const valid = isValid && dirty;

    return (
        <FormContainer title={Form.forgotPasswordFormTitle}>
            <TextInputContainer>
                <TextInput
                    placeholder={Form.emailPlaceHolder}
                    icon="mail"
                    onChangeText={(email) => {
                        setFieldValue('email', email);
                        setTimeout(() => setFieldTouched('email', true));
                    }}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    returnKeyLabel="next"
                    returnKeyType="next"
                    onSubmitEditing={() => handleSubmit()}
                    blurOnSubmit={false}
                    touched={touched.email}
                    error={errors.email}
                    onBlur={handleBlur('email')}
                />
            </TextInputContainer>

            <Box mt="m">
                <Button
                    onPress={handleSubmit}
                    disabled={valid ? false : true}
                    backgroundColor={
                        valid ? 'formButtonColor' : 'disabledButtonColor'
                    }
                    rounded={true}
                >
                    {Form.forgotPasswordButtonText}
                </Button>
            </Box>
        </FormContainer>
    );
};

export default ForgotPassword;
