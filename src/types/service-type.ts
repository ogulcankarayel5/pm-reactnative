import { User } from "../redux/auth/types";

export interface IParameters {
    endpoint: string;
    params?: object | null;
    data?: null | object;
  }
  
  type Methods = "get" | "post";

export interface IAxiosParameters extends IParameters {
 
  method: Methods;
}




export interface IResponse {
  access_token:string
  data:User
  refresh_token:string
  success:boolean
}



