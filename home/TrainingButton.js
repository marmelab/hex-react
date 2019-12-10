import React from 'react';
import {Button} from "react-native";

export const TrainingButton = ({navigation}) => {
    return <Button
        title="Training mode"
        color="#999999"
        onPress={() => {
            navigation.navigate('Training')
        }}
    />
};
