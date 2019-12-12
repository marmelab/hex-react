import React, {useState, useEffect} from "react";
import {Svg, Text, Polygon} from "react-native-svg";

import {Cell} from "./Cell";
import {gridPoints} from "./utils"
import {fetchIsWon} from "./request";
import {player1Color, player2Color} from "./theme";
import {Gameboard} from "./Gameboard";

export const Board = (props) => {

    const [grid, setGrid] = useState(Array(props.size * props.size).fill(0));
    const [isWon, setIsWon] = useState(false);
    const [player, setPlayer] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleCellOnPress = (cellNumber, player) => {
        if (isLoading || isWon) {
            return;
        }
        const updatedGrid = grid.map((cell, index) => {
            return cellNumber === index ? player : cell;
        });
        setGrid(updatedGrid);
    };

    useEffect(() => {
        const callApi = (async () => {
            setIsLoading(true);
            const {isWon} = await fetchIsWon(grid, player);
            setIsWon(isWon);
            setIsLoading(false);
        });

        callApi();
    }, [grid]);

    return (
        <Svg width="500" height="500">
            {isWon && (
                <Text fill={player1Color} fontSize="32" fontWeight="bold" x="175" y="450" textAnchor="middle">
                    You win !
                </Text>
            )}
            <Gameboard/>
            {gridPoints(20, 75, 22, props.size, props.size).map(({props}, index) => (
                <Cell {...props} onPress={() => handleCellOnPress(index, player)} value={grid[index]} key={index}/>
            ))}
        </Svg>
    );
};
