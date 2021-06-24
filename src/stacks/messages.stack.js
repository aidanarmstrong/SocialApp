import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesScreen from '../screens/messages.screen';
import HeaderComponent from '../components/header.component';
import {Text} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
const Stack = createStackNavigator();

const MessagesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () =>
                        <HeaderComponent navigation={navigation} headerCenter={
                            <Text style={{color: primary().textColor}}>Messages</Text> }
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

export default MessagesStack;
