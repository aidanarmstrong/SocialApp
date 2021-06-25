import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/settings.screen';
import TestScreen from '../screens/test.screen';
import HeaderComponent from '../components/header.component';
import {Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import {Icon} from 'react-native-elements';
import LeftHeaderComponent from '../components/header/left.header.component';
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
                            isButton={true}
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
