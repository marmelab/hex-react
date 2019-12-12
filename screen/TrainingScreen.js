import React from "react";

import {Board} from "../board";

const TrainingScreen = () => {
    const size = 6;
    return <Board size={size} mode={"training"}/>
};

export default TrainingScreen
