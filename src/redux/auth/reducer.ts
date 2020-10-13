import { AuthActionTypes, AuthState } from "./types";

export const initialState: AuthState = {
  user: null,
  //loading will be true to initialize user in future
  loading: false,
  access_token: null,
  refresh_token: null,
  success: null,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case "@auth/LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "@auth/LOGIN_SUCCESS":
      const { data, access_token, refresh_token, success } = action.payload;
      return {
        ...state,
        loading: false,
        user: data,
        access_token,
        refresh_token,
        success,
      };
    default:
      return state;
  }
}
