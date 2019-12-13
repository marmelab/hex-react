import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./home";
import {TrainingScreen} from "./screen/TrainingScreen";
import {TwoPlayerScreen} from "./screen/TwoPlayerScreen";

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Training: TrainingScreen,
    TwoPlayer: TwoPlayerScreen,
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "Hex Game",
        headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 20,
        },
    },
});

const App = createAppContainer(MainNavigator);

export default App;
