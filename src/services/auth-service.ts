import { FormUser } from 'store';
import { IBaseResponse, IResponse } from 'types';
import { post } from './api-service';

export const loginWithCredentials = async (
    user: FormUser
): Promise<IResponse> => {
    const response = await post<IResponse>({
        endpoint: '/auth/login',
        params: null,
        data: user,
    });

    return response;
};

export const loginWithGoogle = async (
    accessToken: string
): Promise<IResponse> => {
    const response = await post<IResponse>({
        endpoint: '/auth/google/token',
        params: null,
        data: { access_token: accessToken },
    });
    console.log('in service: ', response);
    return response;
};

export const forgotPassword = async (email: string): Promise<IBaseResponse> => {
    const response = await post<IBaseResponse>({
        endpoint: '/auth/forgotpassword',
        params: null,
        data: { email },
    });
    console.log(response);
    return response;
};

export default {
    loginWithGoogle,
    loginWithCredentials,
    forgotPassword,
};
