import AsyncStorage from '@react-native-community/async-storage';

const setToken = async (
    accessToken: string,
    refreshToken: string
): Promise<void> => {
    try {
        await AsyncStorage.setItem('@lucky_access_token', accessToken);
        await AsyncStorage.setItem('@lucky_refresh_token', refreshToken);
    } catch (err) {
        console.log(err);
    }
};

const getToken = async (tokenName: string): Promise<string|null> => {
    try {
        const token = await AsyncStorage.getItem(tokenName);
        if (token != null) {
            return token;
        }
        return null;
    } catch (error) {
        return error;
    }
};

export default { setToken, getToken };
