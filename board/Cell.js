import React from 'react';
import {corners} from './utils';
import {Polygon} from "react-native-svg";

const Cell = (props) => {
    const {type, x, y, size} = props;
    const points = corners(type, x, y, size);
    return <Polygon {...props} points={points.map(p => p.join(',')).join(' ')}/>;
};



export default Cell;
