import React, {useState, useEffect} from "react";
import {Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

export const Board = (props) => {

    const size = 6;

    const [grid, setGrid] = useState(Array(size * size).fill(0));

    // @todo: Add the management of 2 players but for the training mode, it's good enough.
    const player = props.mode === "training" ? 1 : 2;

    const handleCellOnPress = (index) => {
        const gridCopy = grid.slice();
        gridCopy[index] = player;
        setGrid(gridCopy)
    };

    useEffect(() => {
        console.log(grid)
    }, [grid]);

    const cells = gridPoints(20, 75, 22, size, size).map(({props}, index) => (
        <Cell {...props} onPress={() => handleCellOnPress(index)} number={index} key={index}
              player={grid[index - 1]}/>
    ));

    return (
        <Svg width="500" height="500">
            {cells}
        </Svg>
    );
};
