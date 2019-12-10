import * as React from 'react';
import {Svg} from 'react-native-svg';

import Cell from "./Cell";
import {gridPoints} from "./utils"

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "white"};
    }

    render() {

        const grid = gridPoints('pointy-topped', 100, 100, 20, this.props.size, this.props.size).map(({props}, index) => (
            <Cell {...props} fill="white" stroke="black" key={index}/>
        ));

        return (
            <Svg width="500" height="500">
                {grid}
            </Svg>
        );
    }
}
