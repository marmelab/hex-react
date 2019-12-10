import React from 'react';
import {corners} from './utils';
import {Polygon} from "react-native-svg";

export const Cell = (props) => {
    const {x, y, size} = props;
    const points = corners(x, y, size);
    return <Polygon  {...props} points={points.map(p => p.join(',')).join(' ')}/>;
}
