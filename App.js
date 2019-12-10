import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Board from "./board";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hex Game</Text>
            <Board size={6} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
