import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TrainingScreen from "./training";
import HomeScreen from "./home";

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Training: TrainingScreen,
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "Hex Game",
        headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 0,
        },
    },
});

const App = createAppContainer(MainNavigator);

export default App;
