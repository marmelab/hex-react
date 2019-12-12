import React, {useEffect, useState} from "react";
import {Svg, Text} from "react-native-svg";

import {Cell} from "./Cell";
import {gridPoints} from "./utils"
import {fetchIsWon} from "./request";
import {neutralColor, player1Color, player2Color} from "../theme";
import {BottomBoard} from "./BottomBoard";

export const Board = (props) => {

    const [grid, setGrid] = useState(Array(props.size * props.size).fill(0));
    const [isWon, setIsWon] = useState(false);
    const [player, setPlayer] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [winner, setWinner] = useState(0);

    const handleCellOnPress = (cellNumber, player) => {
        if (isLoading || isWon || grid[cellNumber] !== 0) {
            return;
        }
        const updatedGrid = grid.map((cell, index) => {
            return cellNumber === index ? player : cell;
        });
        setGrid(updatedGrid);

        if (props.mode === "local") {
            setPlayer(player === 1 ? 2 : 1);
        }
    };

    useEffect(() => {
        const callApi = (async () => {
            setIsLoading(true);
            const {isWon} = await fetchIsWon(grid, player);
            setIsWon(isWon);
            setIsLoading(false);

            // @todo: Tricky part to remove
            if (props.mode === "training") {
                setWinner(1)
            } else if (isWon && player === 1) {
                setWinner(2);
            } else if (isWon && player === 2) {
                setWinner(1);
            }
        });

        callApi();
    }, [grid]);

    return (
        <Svg width="500" height="500">
            {isWon && (
                <Text fill={winner === 1 ? player1Color : winner === 2 ? player2Color : neutralColor} fontSize="32"
                      fontWeight="bold"
                      x="175" y="450" textAnchor="middle">
                    {`Player ${winner} has won !`}
                </Text>
            )}
            <BottomBoard/>
            {gridPoints(20, 75, 22, props.size, props.size).map(({props}, index) => (
                <Cell {...props} onPress={() => handleCellOnPress(index, player)} value={grid[index]} key={index}/>
            ))}
        </Svg>
    );
};
