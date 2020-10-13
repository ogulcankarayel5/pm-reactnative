import { Dispatch } from "redux";
import { authService, storageService } from "../../services";
import { IResponse } from "../../types";
import { AuthActionTypes } from "./types";


export const loginRequest = () : AuthActionTypes => {
    return {
        type:"@auth/LOGIN_REQUEST",
        
        
    }
}

export const loginSuccess =(data:IResponse) :AuthActionTypes => {
    
    return {
        type:"@auth/LOGIN_SUCCESS",
        payload: data

    }
}

export const loginFailure = () : AuthActionTypes => {
    return {
        type:"@auth/LOGIN_ERROR",
    }
}

export const loginWithGoogle = (accessToken:string) => async (dispatch:Dispatch<AuthActionTypes>) => {
    try{
        dispatch(loginRequest())
        const response = await authService.loginWithGoogle<IResponse>(accessToken);
        const {access_token,refresh_token} = response 
        console.log("response: ",response)
        storageService.setToken(access_token,refresh_token)
        dispatch(loginSuccess(response))
        
        
    }
    catch(err){
        console.log(err)
        dispatch(loginFailure())
        
    }
}