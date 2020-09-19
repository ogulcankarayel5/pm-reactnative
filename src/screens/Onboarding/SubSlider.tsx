import { BackgroundColorProps, BorderProps, LayoutProps, OpacityProps, PositionProps, ShadowProps, SpacingProps, VisibleProps } from "@shopify/restyle";
import React from "react";
import { Box, Theme } from "../../utils";

type BaseProps = BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & PositionProps<Theme>;

type Props  = BaseProps & {children:React.ReactNode}

export const SubSlider = ({children,...props}:Props) => {
  return <Box flex={1} justifyContent="space-evenly" alignItems="center" {...props}>{children}</Box>;
};


export const SubSliderItem = ({children,...props}:Props) => {

    return <Box flexDirection="row" {...props}>
        {children}
    </Box>
}