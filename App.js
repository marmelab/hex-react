import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Svg, {Polygon, SvgXml} from 'react-native-svg';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hex Game</Text>
            <Board/>
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

const xml = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="174" height="200"
                 viewBox="0 0 173.20508075688772 200">
                <path fill="#EEEEEE" d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path>
            </svg>`

class Stone extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this._onPressButton}>
                <Svg height="100" width="100">
                    <SvgXml xml={xml} width="100%" height="100%"/>
                </Svg>
            </TouchableOpacity>
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
                <View style={{flex: 1, flexDirection: 'row'}} className="board-row">
                    {this.renderStone(0)}
                    {this.renderStone(1)}
                    {this.renderStone(2)}
                </View>
                <View style={{flex: 1, flexDirection: 'row'}} className="board-row">
                    {this.renderStone(3)}
                    {this.renderStone(4)}
                    {this.renderStone(5)}
                </View>
                <View style={{flex: 1, flexDirection: 'row'}} className="board-row">
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
