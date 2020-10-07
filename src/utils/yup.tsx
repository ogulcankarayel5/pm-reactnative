import * as yup from "yup";




const LoginSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(3)
      
     
  
  });


export default  {
    LoginSchema
}