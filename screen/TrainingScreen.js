import React from "react";
import {Board} from "../board";

export const TrainingScreen = () => {
    const size = 6;
    return <Board size={size} mode={"training"}/>
};

