import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useState } from "react";

export const useIsFirstLaunch = () => {
  const [isFirst, setIsFirst] = useState(null);

  
  useEffect(() => {
    const checkStorage = async () => {
      try {
        const item = await AsyncStorage.getItem("firstLaunchCheck39");
       
        if (item === null) {
          await AsyncStorage.setItem("firstLaunchCheck39", JSON.stringify(true));
          console.log("first:",true)
          setIsFirst(true);
        } else {
          console.log("first:",false)
          setIsFirst(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkStorage();
  }, []);

  return { isFirst };
};
