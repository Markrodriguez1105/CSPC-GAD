import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export type Props = {
    color?: string;
    width?: number;
    height?: number;
}


export default function statistic({ color, width, height }: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 62 40" fill="none">
            <Path d="M42.9347 21.246C44.2083 19.9736 45.0008 18.2025 45 16.2594C45.0008 14.3163 44.2083 12.5451 42.9347 11.2731C41.6626 9.99895 39.8918 9.20653 37.948 9.20773C36.0049 9.20653 34.2334 9.99901 32.9621 11.2731C31.6877 12.5451 30.8952 14.3163 30.896 16.2594C30.8952 18.2024 31.6877 19.9735 32.9621 21.246C34.0158 22.3013 35.4126 23.0243 36.9658 23.2415V26.1386H33.7673V28.1043H36.9658V31.2087H38.9311V28.1043H42.1296V26.1386H38.9311V23.2415C40.4842 23.0243 41.8809 22.3013 42.9347 21.246ZM37.948 20.7561C37.3238 20.7557 36.7354 20.6303 36.1979 20.4031C35.3927 20.0629 34.7034 19.4907 34.2183 18.7725C33.7339 18.0535 33.452 17.1951 33.452 16.2594C33.452 15.6348 33.5775 15.0468 33.8046 14.5097C34.1444 13.7041 34.7162 13.0153 35.4348 12.5301C36.1542 12.0454 37.0126 11.7634 37.948 11.7626C38.5721 11.7631 39.1605 11.8885 39.6981 12.116C40.5033 12.4558 41.1925 13.028 41.6777 13.7462C42.162 14.4657 42.4439 15.324 42.4447 16.2594C42.4439 16.8839 42.3185 17.4719 42.0914 18.0091C41.7516 18.8147 41.179 19.5039 40.4611 19.9887C39.7417 20.4738 38.8842 20.7553 37.948 20.7561Z" 
            fill={color} />
            <Path d="M25.0343 16.7302V11.8876L26.986 13.8391L28.3764 12.4494L24.052 8.12465L19.7268 12.4494L21.1164 13.8391L23.0689 11.8873V16.7302C21.5158 16.9478 20.119 17.6708 19.0653 18.7264C17.7909 19.9986 16.9992 21.7693 17 23.7124C16.9992 25.6563 17.7909 27.427 19.0653 28.699C20.3374 29.9735 22.1081 30.7655 24.052 30.7648C25.9951 30.7655 27.7658 29.9735 29.0379 28.699C30.3123 27.4269 31.104 25.6562 31.104 23.7124C31.104 21.7693 30.3123 19.9986 29.0379 18.7265C27.9842 17.6708 26.5874 16.9478 25.0343 16.7302ZM28.1954 25.4625C27.8548 26.268 27.2831 26.9569 26.5652 27.4421C25.8458 27.9273 24.9874 28.2092 24.052 28.2092C23.4271 28.2092 22.8395 28.0837 22.3019 27.8566C21.4967 27.516 20.8075 26.9442 20.3223 26.226C19.8371 25.5066 19.5553 24.6486 19.5553 23.7124C19.5553 23.0884 19.6807 22.5004 19.9078 21.9632C20.2484 21.158 20.8202 20.4688 21.5388 19.9836C22.2574 19.4988 23.1158 19.2174 24.052 19.2165C24.6761 19.2165 25.2637 19.342 25.8021 19.5695C26.6065 19.9097 27.2957 20.4815 27.7809 21.1997C28.266 21.9191 28.5479 22.7771 28.5479 23.7124C28.548 24.3372 28.4225 24.9257 28.1954 25.4625Z" 
            fill={color} />
        </Svg>
    )
}