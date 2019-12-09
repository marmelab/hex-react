import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hex Game</Text>
            <Stone></Stone>
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

class Stone extends React.Component {
    render() {
        return (
            // <Button title="">
            // <Polygon
            //     points="5,1.32 15,1.32 20,10 15,18.66 5,18.66 0,10"
            //     fill="#DDDDDD"
            //     stroke="grey"
            //     strokeWidth="1"
            // />
            <Svg height="100" width="100">
                <Polygon
                    points="0,15 1,1 1,-1 0,-15 -1,1 -1,1"
                    fill="#DDDDDD"
                    stroke="grey"
                    strokeWidth="1"
                />
            </Svg>
            // </Button>
        );
    }
}


class Board extends React.Component {
    renderStone(i) {
        return <Stone/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <View>
                <Text className="status">{status}</Text>
                <View className="board-row">
                    {this.renderStone(0)}
                    {this.renderStone(1)}
                    {this.renderStone(2)}
                </View>
                <View className="board-row">
                    {this.renderStone(3)}
                    {this.renderStone(4)}
                    {this.renderStone(5)}
                </View>
                <View className="board-row">
                    {this.renderStone(6)}
                    {this.renderStone(7)}
                    {this.renderStone(8)}
                </View>
            </View>
        );
    }
}

// class Game extends React.Component {
//     render() {
//         return (
//             <View className="game">
//                 <View className="game-board">
//                     <Board/>
//                 </View>
//             </View>
//         );
//     }
// }
