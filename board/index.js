import React, {useState} from "react";
import {Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

export const Board = (props) => {

    const [matrix, setMatrix] = useState(Array(props.size * props.size).fill(0));

    const game = {
        width: props.size,
        matrix: matrix,
        // @todo: Add the management of 2 players but for the training mode, it's good enough.
        player: props.mode === "training" ? 1 : 2
    };

    const handleCellOnPress = (props) => {
        console.log(props.number)
    };

    const grid = gridPoints(20, 75, 22, props.size, props.size).map(({props}, index) => (
        <Cell {...props} onPress={handleCellOnPress}  number={index} key={index}
              player={game.matrix[index - 1]}/>
    ));

    return (
        <Svg width="500" height="500">
            {grid}
        </Svg>
    );
};
