import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen/settings.screen';
import TestScreen from '../screens/test.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import {Icon} from 'react-native-elements';
import LeftHeaderComponent from '../components/Header/left.header.component';
const Stack = createStackNavigator();

const SettingsStack = () => {
    return(
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Settings"
        >
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Settings",
                    headerTitleStyle: stackHeaderStyle().title,
                    headerLeft: () => (
                        <LeftHeaderComponent
                            button={true}
                            iconName="keyboard-backspace"
                            iconColor={primary().textColor}
                            iconSize={26}
                            onPress={() => {
                                HapticFeedBack('impactLight')
                                navigation.goBack()
                            }}
                        />
                    ),
                    headerStyle: [
                        stackHeaderStyle().headerBackground,
                        stackHeaderStyle().emptyShadowOffset
                    ]
                })}
            />
            <Stack.Screen name="test" component={TestScreen}/>
        </Stack.Navigator>
    )
}

export default SettingsStack;
