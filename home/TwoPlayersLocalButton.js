import React from "react";
import {Button} from "react-native";

import {sameDevice} from "../theme";

export const TwoPlayersLocalButton = ({navigation}) => {
    return <Button
        title="2 players (same device)"
        color={sameDevice}
        onPress={() => {
            navigation.navigate('TwoPlayer')
        }}
    />
};
