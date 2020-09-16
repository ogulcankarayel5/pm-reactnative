import React from 'react';
import { Text } from "../../../utils";


type SliderItemProps = {
    children: React.ReactNode;
  };
  export const SliderTitle = ({ children, ...props }: SliderItemProps) => {
    return (
      <Text variant="mainTitle" {...props}>
        {children}
      </Text>
    );
  };

SliderTitle.defaultProps = {
  children:"Example"
}
  
  export const SliderText = ({ children, ...props }: SliderItemProps) => {
    return (
      <Text mt="s" variant="mainText" {...props}>
        {children}
      </Text>
    );
  };
SliderText.defaultProps = {
  children:"Example"
}