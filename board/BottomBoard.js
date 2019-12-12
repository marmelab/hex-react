import React from "react";
import {Polygon, Svg} from "react-native-svg";
import {player1Color, player2Color, strokeColor} from "../theme";

export const BottomBoard = () => {
    return <Svg>
        <Polygon points="0,120 255,120 180,220" fill={player1Color} stroke={strokeColor} strokeWidth="1"/>
        <Polygon points="180,220 360,345 105,345" fill={player1Color} stroke={strokeColor} strokeWidth="1"/>
        <Polygon points="0,120 180,220 105,345" fill={player2Color} stroke={strokeColor} strokeWidth="1"/>
        <Polygon points="255,120 360,345 180,220" fill={player2Color} stroke={strokeColor} strokeWidth="1"/>
    </Svg>
};
