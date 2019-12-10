import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TrainingScreen from "./training";
import HomeScreen from "./home";

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Training: TrainingScreen,
}, {
    initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);

export default App;
