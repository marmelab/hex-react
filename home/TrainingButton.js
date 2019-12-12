import React from "react";
import {Button} from "react-native";

import {trainingMenu} from "../theme";

export const TrainingButton = ({navigation}) => {
    return <Button
        title="Training mode"
        color={trainingMenu}
        onPress={() => {
            navigation.navigate('Training')
        }}
    />
};

