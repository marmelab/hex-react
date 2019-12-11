import React, {useState} from "react";
import {corners} from './utils';
import {Polygon} from "react-native-svg";

export const Cell = (props) => {
    const {x, y, size} = props;
    const points = corners(x, y, size);

    const color = () => {
        if (props.player === 1) {
            return "#03a9fc";
        } else if (props.player === 2) {
            return "#daf545";
        }
        return "#FFFFFF";
    };

    return <Polygon onPress={() => {
        setPlayer(props.id)
    }} {...props} fill={color} points={points.map(p => p.join(',')).join(' ')}/>;
};
