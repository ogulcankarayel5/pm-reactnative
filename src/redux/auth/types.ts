import { IResponse } from "../../types";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './constants';


//models
export interface UserBase {
    name?:string
    email?:string
   
}

export interface User extends UserBase{
    _id?:string
    googleId?:string
}

export interface FormUser extends UserBase {
    password?:string
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
    type:typeof LOGIN_REQUEST,
}


export interface LoginSuccessAction {
    type:typeof LOGIN_SUCCESS,
    
    payload:IResponse
}

export interface LoginFailureAction {
    type:typeof LOGIN_FAILURE
}


export type AuthActionTypes= LoginSuccessAction | LoginRequestAction |  LoginFailureAction;