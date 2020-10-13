import { IResponse } from "../../types";


//models
export interface User {
    name?:string
    email?:string
    _id?:string,
    googleId?:string
}



export interface AuthState {
    readonly success:boolean |null,
    readonly user:User | null
    readonly loading:boolean,
    readonly access_token:string | null,
    readonly refresh_token:string | null
}

//types
export interface LoginRequestAction{
    type:"@auth/LOGIN_REQUEST",
}


export interface LoginSuccessAction {
    type:"@auth/LOGIN_SUCCESS",
    
    payload:IResponse
}

export interface LoginFailureAction {
    type:"@auth/LOGIN_ERROR"
}


export type AuthActionTypes= LoginSuccessAction | LoginRequestAction |  LoginFailureAction;