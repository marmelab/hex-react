import React, {useState, useEffect} from "react";
import {Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

export const Board = (props) => {

    const [grid, setGrid] = useState(Array(props.size * props.size).fill(0));
    const [isWon, setIsWon] = useState(false);

    // @todo: Add the management of 2 players but for the training mode, it's good enough.
    const player = props.mode === "training" ? 1 : 2;

    const handleCellOnPress = (index) => {
        const gridCopy = grid.slice();
        gridCopy[index] = player;
        setGrid(gridCopy)
    };

    useEffect(() => {

        const fetchIsWon = async (grid, player) => {
            try {
                const url = "https://hex-go.cleverapps.io/games/is-won";
                const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            Accept: '*/*',
                            'Content-Type': 'application/json',
                            'Host': 'hex-go.cleverapps.io',
                        },
                        body: JSON.stringify({grid, player}),
                    }
                );
                const {isWonValue} = response.ok;
                setIsWon(isWonValue);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIsWon();
    }, [grid]);

    return (
        <Svg width="500" height="500">
            {gridPoints(20, 75, 22, props.size, props.size).map(({props}, index) => (
                <Cell {...props} onPress={() => handleCellOnPress(index)} number={index} key={index}
                      player={grid[index]}/>
            ))}
        </Svg>
    );
};
