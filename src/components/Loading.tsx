import LottieView from "lottie-react-native";
import React from "react";
const Loading = () => {
  return (
    <LottieView
      source={require("../../assets/loading.json")}
      autoPlay
      loop
    />
  );
};

export default Loading
