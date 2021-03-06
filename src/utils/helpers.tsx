import { Alert, Clipboard, Platform, ToastAndroid } from 'react-native';


export const notify = (message:string) => {
    const info:string = 'Coppied to clipboard'
    Clipboard.setString(message);
    if(Platform.OS!=='android'){
        Alert.alert(info,message)
    }
    else{
        ToastAndroid.showWithGravity(
            info,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
}