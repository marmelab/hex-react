import React, {useState, useEffect} from "react";
import {corners} from './utils';
import {Polygon} from "react-native-svg";

export const Cell = (props) => {
    const {x, y, size} = props;
    const points = corners(x, y, size);

    const [color, setColor] = useState("white");

    return <Polygon {...props} color={color} points={points.map(p => p.join(',')).join(' ')}/>;
}
