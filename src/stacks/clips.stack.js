import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClipScreen from '../screens/ClipScreen/clips.screen';
const Stack = createStackNavigator();

const ClipStack = () => {
    return(
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Clips"
                component={ClipScreen}
            />
        </Stack.Navigator>
    )
}

export default ClipStack;
