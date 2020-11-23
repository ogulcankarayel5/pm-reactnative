import { FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';
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
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { data, access_token, refresh_token, success } = action.payload;
      return {
        ...state,
        loading: false,
        user: data,
        access_token,
        refresh_token,
        success,
      };
    case LOGIN_FAILURE : 
      return {
        ...state,
        loading:false,
        user:null,
        access_token:null,
        refresh_token:null,
        success:false
      }
    case FORGOT_PASSWORD_SUCCESS:
      return{
        ...state,
        loading:false,
        success:true,
      }

    
    default:
      return state;
  }
}
