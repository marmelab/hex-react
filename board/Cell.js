import React, {useState} from "react";
import {corners} from './utils';
import {Polygon} from "react-native-svg";

export const Cell = (props) => {
    const {x, y, size} = props;
    const points = corners(x, y, size);

    const color = props.player === 1 ? "#03a9fc" : props.player === 2 ? "#daf545" : "#FFFFFF";

    return <Polygon {...props} stroke="#222222" fill={color()} points={points.map(p => p.join(',')).join(' ')}/>;
};
