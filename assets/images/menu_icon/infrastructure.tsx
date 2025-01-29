import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export type Props = {
    color?: string;
    width?: number;
    height?: number;
}


export default function infrastructure({ color, width, height }: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 62 40" fill="none">
            <Path d="M38 30.1667V31.3333C38.6443 31.3333 39.1667 30.811 39.1667 30.1667H38ZM24 30.1667H22.8333C22.8333 30.811 23.3557 31.3333 24 31.3333V30.1667ZM27.5 12.6667C26.8557 12.6667 26.3333 13.189 26.3333 13.8333C26.3333 14.4777 26.8557 15 27.5 15V12.6667ZM28.6667 15C29.311 15 29.8333 14.4777 29.8333 13.8333C29.8333 13.189 29.311 12.6667 28.6667 12.6667V15ZM27.5 16.1667C26.8557 16.1667 26.3333 16.689 26.3333 17.3333C26.3333 17.9777 26.8557 18.5 27.5 18.5V16.1667ZM28.6667 18.5C29.311 18.5 29.8333 17.9777 29.8333 17.3333C29.8333 16.689 29.311 16.1667 28.6667 16.1667V18.5ZM33.3333 16.1667C32.689 16.1667 32.1667 16.689 32.1667 17.3333C32.1667 17.9777 32.689 18.5 33.3333 18.5V16.1667ZM34.5 18.5C35.1443 18.5 35.6667 17.9777 35.6667 17.3333C35.6667 16.689 35.1443 16.1667 34.5 16.1667V18.5ZM33.3333 19.6667C32.689 19.6667 32.1667 20.189 32.1667 20.8333C32.1667 21.4777 32.689 22 33.3333 22V19.6667ZM34.5 22C35.1443 22 35.6667 21.4777 35.6667 20.8333C35.6667 20.189 35.1443 19.6667 34.5 19.6667V22ZM27.5 19.6667C26.8557 19.6667 26.3333 20.189 26.3333 20.8333C26.3333 21.4777 26.8557 22 27.5 22V19.6667ZM28.6667 22C29.311 22 29.8333 21.4777 29.8333 20.8333C29.8333 20.189 29.311 19.6667 28.6667 19.6667V22ZM33.3333 12.6667C32.689 12.6667 32.1667 13.189 32.1667 13.8333C32.1667 14.4777 32.689 15 33.3333 15V12.6667ZM34.5 15C35.1443 15 35.6667 14.4777 35.6667 13.8333C35.6667 13.189 35.1443 12.6667 34.5 12.6667V15ZM25.8667 10.3333H36.1333V8.00001H25.8667V10.3333ZM36.8333 11.0333V30.1667H39.1667V11.0333H36.8333ZM38 29H24V31.3333H38V29ZM25.1667 30.1667V11.0333H22.8333V30.1667H25.1667ZM36.1333 10.3333C36.4792 10.3333 36.6686 10.3342 36.8046 10.3454C36.927 10.3554 36.9004 10.3675 36.8333 10.3333L37.8927 8.25433C37.576 8.09298 37.2613 8.04156 36.9946 8.01978C36.7415 7.9991 36.4407 8.00001 36.1333 8.00001V10.3333ZM39.1667 11.0333C39.1667 10.7259 39.1676 10.4251 39.1469 10.1721C39.1251 9.90538 39.0737 9.59069 38.9123 9.27403L36.8333 10.3333C36.7991 10.2662 36.8113 10.2397 36.8213 10.3621C36.8324 10.4981 36.8333 10.6874 36.8333 11.0333H39.1667ZM36.8333 10.3333L38.9123 9.27403C38.6887 8.83499 38.3317 8.47802 37.8927 8.25433L36.8333 10.3333ZM25.8667 8.00001C25.5592 8.00001 25.2585 7.9991 25.0054 8.01978C24.7387 8.04156 24.424 8.09298 24.1073 8.25433L25.1667 10.3333C25.0996 10.3675 25.073 10.3554 25.1954 10.3454C25.3314 10.3342 25.5207 10.3333 25.8667 10.3333V8.00001ZM25.1667 11.0333C25.1667 10.6874 25.1676 10.4981 25.1787 10.3621C25.1887 10.2397 25.2008 10.2662 25.1667 10.3333L23.0876 9.27403C22.9263 9.59069 22.8749 9.90538 22.8531 10.1721C22.8324 10.4251 22.8333 10.7259 22.8333 11.0333H25.1667ZM24.1073 8.25433C23.6683 8.47802 23.3113 8.83498 23.0876 9.27403L25.1667 10.3333L24.1073 8.25433ZM27.5 15H28.6667V12.6667H27.5V15ZM27.5 18.5H28.6667V16.1667H27.5V18.5ZM33.3333 18.5H34.5V16.1667H33.3333V18.5ZM33.3333 22H34.5V19.6667H33.3333V22ZM27.5 22H28.6667V19.6667H27.5V22ZM33.3333 15H34.5V12.6667H33.3333V15ZM32.1667 26.6667V30.1667H34.5V26.6667H32.1667ZM29.8333 30.1667V26.6667H27.5V30.1667H29.8333ZM31 25.5C31.6443 25.5 32.1667 26.0223 32.1667 26.6667H34.5C34.5 24.7336 32.933 23.1667 31 23.1667V25.5ZM31 23.1667C29.0669 23.1667 27.5 24.7336 27.5 26.6667H29.8333C29.8333 26.0223 30.3556 25.5 31 25.5V23.1667Z" 
            fill={color} />
        </Svg>
    )
}