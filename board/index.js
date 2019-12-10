import React from "react";
import {Polygon, Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

export const Board = (props) => {

    const grid = gridPoints(50, 50, 22, props.size, props.size).map(({props}, index) => (
        <Cell onPress={() => {
            console.log("onPress")
        }} {...props} fill="#FFFFFF" stroke="#222222" key={index}/>
    ));

    return (
        <Svg width="500" height="500">
            {grid}
        </Svg>
    );
}
