import React, {useState} from 'react';

import {Board} from "../board";
import {Menu} from "./Menu";

export const Display = () => {

    const [mode, setMode] = useState("CHOOSE");

    if (mode === "TRAINING") {
        return <Board size={6}/>
    } else if (mode === 'CHOOSE') {
        return <Menu setMode={setMode}/>
    }
};
