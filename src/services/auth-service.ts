import { post } from "./api-service";






export const loginWithGoogle = async <T=any>(accessToken:string) : Promise<T> => {
    const response = await post<T>({endpoint:"/auth/google/token",params:null,data:{access_token:accessToken}})
    console.log("in service: ",response)
    return response
}

export default {
    loginWithGoogle
}