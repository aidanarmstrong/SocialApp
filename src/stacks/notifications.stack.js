import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from '../screens/NotificationsScreen/notifications.screen';
import HeaderComponent from '../components/header.component';
import {Text} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import CenterHeaderComponent from '../components/header/center.header.component';
const Stack = createStackNavigator();

const NotificationsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => (
                        <CenterHeaderComponent
                            title="Notifications"
                            titleStyle={stackHeaderStyle().title}
                        />
                    ),
                    headerStyle: [
                        stackHeaderStyle().headerBackground,
                        stackHeaderStyle().emptyShadowOffset
                    ]
                })}
            />
        </Stack.Navigator>
    )
};

export default NotificationsStack;
