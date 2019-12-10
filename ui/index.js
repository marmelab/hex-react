import React, {useState} from 'react';

import {Board} from "../board";
import {Menu} from "./Menu";

export const modes = {
    TRAINING: 'training',
    CHOOSING: 'choosing'
};

export const Display = () => {
    const [mode, setMode] = useState(modes.CHOOSING);

    if (mode === modes.TRAINING) {
        return <Board size={6}/>
    } else if (mode === modes.CHOOSING) {
        return <Menu setMode={setMode}/>
    }
};
