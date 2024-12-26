import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';
import MoodTracker from './screens/MoodTracker';
import Journal from './screens/Journal';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="MoodTracker" component={MoodTracker} />
                    <Stack.Screen name="Journal" component={Journal} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
