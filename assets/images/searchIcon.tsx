import React from "react";
import { Svg, Path } from "react-native-svg";

export type Props = {
    color?: string;
    width?: number;
    height?: number;
}


export default function activities({ color, width, height }: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 39 23" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.2168 6.11348C13.8336 9.79904 14.2987 14.6396 17.34 17.804C20.3323 20.924 25.1464 21.4119 28.704 18.956C29.4518 18.4412 30.1185 17.8174 30.6816 17.1056C31.2352 16.4055 31.6855 15.6296 32.0184 14.8016C32.7014 13.1007 32.878 11.2388 32.5272 9.44C32.1818 7.65752 31.3243 6.01465 30.06 4.71188C28.8146 3.42433 27.2107 2.54125 25.4568 2.17748C23.7098 1.82053 21.8956 2.00473 20.256 2.70548C18.6009 3.41483 17.1945 4.60131 16.2168 6.11348Z" stroke={color} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M31.2934 18.2946L31.9998 17.3248L35.6832 20.0084L34.9768 20.9781L31.2934 18.2946ZM3.8999 10.9998H6.2999V12.1998H3.8999V10.9998ZM3.8999 18.1998H6.2999V19.3998H3.8999V18.1998ZM3.8999 3.79985H8.6999V4.99985H3.8999V3.79985Z" 
            fill={color} stroke={color} strokeWidth="2.4" />
        </Svg>
    )
}