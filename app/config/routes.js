import {
    createBottomTabNavigator,
    createStackNavigator, createAppContainer,
} from 'react-navigation';

import Home from '../screens/Home';
import Cheers from '../screens/Cheers';

const HomeTab = createStackNavigator({
    Home: {
        screen: Home
    }
});

const CheersTab = createStackNavigator({
    Cheers: {
        screen: Cheers
    }
});


const RootStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeTab
        },
        Cheers: {
            screen: CheersTab
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootStack);
