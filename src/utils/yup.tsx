import * as yup from "yup";




const LoginSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(3)
  });

const SignUpSchema=yup.object().shape({
  name:yup.string().required().min(3),
  email:yup.string().required().email(),
  password:yup.string().required().min(3)
})


export default  {
    LoginSchema,
    SignUpSchema
}