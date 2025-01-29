import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export type Props = {
    color?: string;
    width?: number;
    height?: number;
}


export default function structure({ color, width, height }: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 62 40" fill="none">
            <Path d="M35.2789 8.67416H26.7245V17.2286H35.2789V8.67416Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M33.2794 26.1039H28.7241V30.6592H33.2794V26.1039Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M24.536 26.1039H19.9808V30.6592H24.536V26.1039Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M42.0192 26.1039H37.464V30.6592H42.0192V26.1039Z" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M31.0019 17.2287V26.1039" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M39.7416 26.1039V20.2583H22.262V26.1039" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}