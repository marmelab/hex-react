import React from 'react';
import {StyleSheet, View} from "react-native";

import {TrainingButton} from "./TrainingButton";

export const Menu = (setMode) => {
    return <View style={styles.menu}>
        <TrainingButton setMode={setMode}/>
    </View>
};

const styles = StyleSheet.create({
        menu: {
            marginTop: 20
        },
    }
);
