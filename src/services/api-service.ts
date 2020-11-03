import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAxiosParameters, IParameters } from "../types";
import axiosInstance from "./client";




export const get = <T=any>(parameters: IParameters): Promise<T> => {
  const { endpoint, params=null } = parameters;
  return callAxios<T>({method:"get",endpoint,params})
};

export const post = <T=any>(parameters:IParameters) : Promise<T> => {
  const {endpoint,params=null,data} = parameters 
  return callAxios<T>({method:"post",endpoint,params,data})
}



const callAxios = async <T=any>(parameters: IAxiosParameters): Promise<T> => {
  return new Promise((resolve, reject) => {
    const { method, data,endpoint,params } = parameters;
    const config: AxiosRequestConfig = {
      method: method,
      url:`${endpoint}?${params}`,
      data: data,
    };

    axiosInstance(config)
      .then((response: AxiosResponse<T>) => {
        // console.log("response in callAxios: ", response);
        resolve(response.data as T);
      })
      .catch((error) => {
        
        // console.log("response in callaxios error: ",error.response);
        reject(error.response);
      });
  });
};
