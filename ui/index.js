import React from "react";
import {Button, StyleSheet, View} from "react-native";


export const TrainingButton = () => {
    return <Button
        title="Training mode"
        color="#999999"
        onPress={() => setMode('TRAINING')}
    />
};

export const Menu = () => {
    return <View style={styles.menu}>
        <TrainingButton/>
    </View>
};

const styles = StyleSheet.create({
        menu: {
            marginTop: 20
        },
    }
);
