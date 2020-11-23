import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPadlock(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className=""
      {...props}
    >
      <Path d="M18.75 24H5.25A2.253 2.253 0 013 21.75v-10.5C3 10.009 4.01 9 5.25 9h13.5C19.99 9 21 10.009 21 11.25v10.5c0 1.241-1.01 2.25-2.25 2.25zM5.25 10.5a.75.75 0 00-.75.75v10.5c0 .414.337.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75z" />
      <Path d="M17.25 10.5a.75.75 0 01-.75-.75V6c0-2.481-2.019-4.5-4.5-4.5S7.5 3.519 7.5 6v3.75a.75.75 0 01-1.5 0V6c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75a.75.75 0 01-.75.75zM12 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 10.002 1.002A.5.5 0 0012 14.5z" />
      <Path d="M12 20a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0v2.75A.75.75 0 0112 20z" />
    </Svg>
  );
}

export default SvgPadlock;
