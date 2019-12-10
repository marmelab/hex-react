import React from 'react';
import {Button} from "react-native";
import {modes} from "./index";

export const TrainingButton = (setMode) => {
    return <Button
        title="Training mode"
        color="#999999"
        onPress={() => {
            setMode(modes.TRAINING)
        }}
    />
};
