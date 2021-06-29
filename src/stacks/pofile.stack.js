import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import ProfileScreen from '../screens/profile.screen';

const ProfileStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={ () => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack;
