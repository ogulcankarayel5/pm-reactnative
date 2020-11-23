

import { androidClientId } from '@env';
import * as Google from "expo-google-app-auth";
import { showMessage } from "react-native-flash-message";
import { Dispatch } from "redux";
import { authService, storageService } from "../../services";
import { IBaseResponse, IResponse } from "../../types";
import { FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import { AuthActionTypes, FormUser } from "./types";



export const loginRequest = (): AuthActionTypes => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data: IResponse): AuthActionTypes => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (): AuthActionTypes => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const forgotPasswordSuccess = (data:IBaseResponse) : AuthActionTypes => {
  return{
    type:FORGOT_PASSWORD_SUCCESS,
    payload:data
  }
}



export const loginWithCredentials = (user: FormUser) => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  console.log("user in action: ", user);
  try {
    dispatch(loginRequest());
    const response = await authService.loginWithCredentials(user);
    console.log("in action", response);
    dispatch(loginSuccess(response));

  } catch (err) {
    console.log("error in action:",err.data);
    dispatch(loginFailure());
  }
};

export const loginWithGoogle = () => async (
  dispatch: Dispatch<AuthActionTypes>
) => {
  try {
    dispatch(loginRequest());
    //should be added iosId
    const result = await Google.logInAsync({
      androidClientId: androidClientId,
    });
    if (result.type === "success") {
      const response = await authService.loginWithGoogle(
        result.accessToken && result.accessToken
      );
      const { access_token, refresh_token } = response;
      console.log("response: ", response);
      storageService.setToken(access_token, refresh_token);
      dispatch(loginSuccess(response));
      showMessage({message:"Login successful ",type:"success",duration:1000})
    } else {
      dispatch(loginFailure());
    }
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const forgotPassword = (email:string) => async (
  dispatch:Dispatch<AuthActionTypes>) => {
    try{
      dispatch(loginRequest())
      const response = await authService.forgotPassword(email)
      console.log("response in action ",response)
      dispatch(forgotPasswordSuccess(response))
      showMessage({message:"Forgot password link send your email ",type:"success",duration:1000})
      
    }catch(err){
      dispatch(loginFailure())
      console.log("err: ",err)
    }
  }

