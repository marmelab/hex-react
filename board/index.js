import React, {useState, useEffect} from "react";
import {Svg} from 'react-native-svg';

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

const url = 'https://hex-go.cleverapps.io/';

async function isWonFromAPI(grid, player) {
    try {
        let response = await fetch(
            url + 'games/is-won', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    grid: grid,
                    player: player,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson.isWon;
    } catch (error) {
        console.error(error);
    }
}


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

        const isWon = isWonFromAPI(grid, player).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.isWon;
            })
            .catch((error) => {
                console.error(error);
            });

        console.log(isWon);

        if (isWon) {
            console.log("won")
        } else {
            console.log("lost")
        }
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
