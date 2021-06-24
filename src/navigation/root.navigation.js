import React from 'react';
import MaterialBottomTabs from '../components/materialBottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsStack from '../stacks/settings.stack';
const Stack = createStackNavigator();
const Root = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="Tabs"
        >
            <Stack.Screen name="Home" component={MaterialBottomTabs}/>
            <Stack.Screen name="SettingsStack" component={SettingsStack}/>
        </Stack.Navigator>
    )
}

export default Root;
