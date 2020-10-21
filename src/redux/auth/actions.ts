import { androidClientId } from "@env";
import * as Google from "expo-google-app-auth";
import { Dispatch } from "redux";
import { authService, storageService } from "../../services";
import { IResponse } from "../../types";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
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
    } else {
      dispatch(loginFailure());
    }
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
