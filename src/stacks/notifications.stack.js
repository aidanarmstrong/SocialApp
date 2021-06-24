import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from '../screens/notifications.screen';
import HeaderComponent from '../components/header.component';
import {Text} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
const Stack = createStackNavigator();

const NotificationsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () =>
                        <HeaderComponent
                            navigation={navigation}
                            headerCenter={
                                <Text style={{color: primary().textColor}}>Notifications</Text>
                            }
                        />,
                    headerLeft: null,
                    headerStyle: [
                        stackHeaderStyle().headerBackground,
                        stackHeaderStyle().emptyShadowOffset
                    ]
                })}
            />
        </Stack.Navigator>
    )
}

export default NotificationsStack;
