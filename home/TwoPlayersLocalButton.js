import React from "react";
import {Button} from "react-native";

import {sameDeviceColor} from "../theme";

export const TwoPlayersLocalButton = ({navigation}) => {
    return <Button
        title="2 players (same device)"
        color={sameDeviceColor}
        onPress={() => {
            navigation.navigate('TwoPlayer')
        }}
    />
};
