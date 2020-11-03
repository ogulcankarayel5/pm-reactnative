import { ONBOARDING_KEY } from '@env';
import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useState } from "react";
export const useIsFirstLaunch = () => {
  const [isFirst, setIsFirst] = useState(null);

  const changeValue = (value) => {
    setIsFirst(value)
  }

  useEffect(() => {
    const checkStorage = async () => {
      try{
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        if(value===null){
          setIsFirst(true);
        }
        else{
          setIsFirst(false);
        }
      }
      catch(err){
        console.log(err)
      }
    };
    checkStorage();
  }, [isFirst]);

  return { isFirst,changeValue };
};
