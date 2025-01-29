import React from "react";
import { Svg, Path , G, Defs, ClipPath, Rect} from "react-native-svg";

export type Props = {
    color?: string;
    width?: number;
    height?: number;
}


export default function agenda({ color, width, height }: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 62 40" fill="none">
            <G clip-path="url(#clip0_197_219)">
                <Path
                    d="M22.139 16.6647L27.39 22.0111H30.3844V18.9622L25.1335 13.6158C24.9336 13.4163 24.6648 13.3045 24.3849 13.3045C24.1049 13.3045 23.8362 13.4163 23.6362 13.6158L22.139 15.1402C21.9431 15.3438 21.8333 15.6174 21.8333 15.9024C21.8333 16.1875 21.9431 16.4611 22.139 16.6647Z"
                    fill={color} />
                <Path
                    d="M28.2455 10.0333H38.9399C39.2236 10.0333 39.4956 10.1481 39.6962 10.3523C39.8967 10.5565 40.0094 10.8334 40.0094 11.1222V28.5445C40.0094 28.8332 39.8967 29.1102 39.6962 29.3144C39.4956 29.5186 39.2236 29.6333 38.9399 29.6333H26.1066C25.823 29.6333 25.551 29.5186 25.3504 29.3144C25.1498 29.1102 25.0372 28.8332 25.0372 28.5445V26.3667"
                    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <Path
                    d="M38.94 15.4778H41.0789M38.94 19.8333H41.0789M38.94 24.1889H41.0789M22.139 15.1402L23.6362 13.6158C23.8362 13.4163 24.1049 13.3045 24.3849 13.3045C24.6648 13.3045 24.9336 13.4163 25.1335 13.6158L30.3844 18.9622V22.0111H27.39L22.139 16.6647C21.9431 16.4611 21.8333 16.1875 21.8333 15.9024C21.8333 15.6174 21.9431 15.3438 22.139 15.1402Z"
                    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_197_219">
                    <Rect width="22" height="23" fill="white" transform="translate(20 8.16667)" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}