import React from "react";

import {View, StyleSheet, Text} from "react-native";
import {TrainingButton} from "./TrainingButton";

const HomeScreen = ({navigation}) => {

    return <View>
        <Text>Hex Game</Text>
        <TrainingButton navigation={navigation}/>
    </View>
};



export default HomeScreen;

