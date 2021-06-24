import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/settings.screen';
import TestScreen from '../screens/test.screen';
import HeaderComponent from '../components/header.component';
import {Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
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
                    headerTitle: () =>
                        <HeaderComponent
                            navigation={navigation}
                            headerLeft={
                                <TouchableOpacity
                                    activeOpacity={primary().activeOpacity}
                                    onPress={() => {
                                        HapticFeedBack('impactLight')
                                        navigation.goBack()}
                                    }
                                >
                                    <MaterialCommunityIcons style={{color: primary().textColor}} name="keyboard-backspace" size={26} />
                                </TouchableOpacity>
                            }
                            headerCenter={
                                <Text style={{color: primary().textColor}}>Settings</Text>
                            }
                        />,
                    headerLeft: null,
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
