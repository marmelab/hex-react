import React from "react";
import {Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"
import {range} from "./utils"

// Init an empty matrix
const matrix = (size) => {

    let matrix = [];

    [...range(0, size)].forEach((i) => {
        [...range(0, size)].forEach((j) => {
            matrix[i][j] = 0;
        });
    });

    return matrix
};

export const Board = (props) => {

    const game = {
        width: props.size,
        matrix: matrix(props.size)
    };

    // console.log(game.matrix);

    const grid = gridPoints(20, 75, 22, props.size, props.size).map(({props}, index) => (
        <Cell {...props} stroke="#222222" key={index}/>
    ));

    return (
        <Svg width="500" height="500">
            {grid}
        </Svg>
    );
}
