import React, {useState, useEffect} from "react";
import {Svg} from "react-native-svg";
import {IA_ENDPOINT} from "react-native-dotenv";

import {Cell} from "./Cell";
import {gridPoints} from "./utils"

export const Board = (props) => {

    const [grid, setGrid] = useState(Array(props.size * props.size).fill(0));
    const [isWon, setIsWon] = useState(false);
    const [player, setPlayer] = useState(1);

    const handleCellOnPress = (cellNumber, player) => {
        const updatedGrid = grid.map((cell, index) => {
            return cellNumber === index ? player : cell;
        });
        setGrid(updatedGrid);
    };

    useEffect(() => {
        // @todo: Extract this code into a client
        const fetchIsWon = async (grid, player) => {
            try {
                const url = `${IA_ENDPOINT}/games/is-won`;
                const response = await fetch(url, {
                        method: 'POST',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
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
                <Cell {...props} onPress={() => handleCellOnPress(index, player)} value={grid[index]} key={index}/>
            ))}
        </Svg>
    );
};
