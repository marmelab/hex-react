import React from "react";
import {View} from 'react-native';

import {TrainingButton} from "./TrainingButton";

const HomeScreen = ({navigation}) => {
    return <View>
        <TrainingButton navigation={navigation}/>
    </View>
};


export default HomeScreen;

