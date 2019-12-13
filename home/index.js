import React from "react";
import {View} from 'react-native';

import {TrainingButton} from "./TrainingButton";
import {TwoPlayersLocalButton} from "./TwoPlayersLocalButton";

const HomeScreen = ({navigation}) => {
    return <View>
        <TrainingButton navigation={navigation}/>
        <TwoPlayersLocalButton navigation={navigation}/>
    </View>
};

export default HomeScreen;

