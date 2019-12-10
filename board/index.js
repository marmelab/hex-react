import * as React from 'react';
import {Svg} from 'react-native-svg';

import Cell from "./Cell";
import {gridPoints} from "./utils"

function Board(props) {
    const grid = gridPoints('pointy-topped', 50, 50, 22, props.size, props.size).map(({props}, index) => (
        <Cell {...props} onPress={() => {}} fill="#FFFFFF" stroke="#222222" key={index}/>
    ));

    return (
        <Svg width="500" height="500">
            {grid}
        </Svg>
    );
}

export default Board
