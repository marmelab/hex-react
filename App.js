import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {Board} from "./board";
import {Menu} from "./ui";

export default function App() {

    const [mode, setMode] = useState("CHOOSE");

    const display = () => {
        if (mode === "TRAINING") {
            return <Board size={6}/>
        } else if (mode === 'CHOOSE') {
            return <Menu/>
        }
    };

    return (
        <View style={styles.container}>
            <Text>Hex Game</Text>
            {display()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
