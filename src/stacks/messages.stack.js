import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen/messages.screen';
import HeaderComponent from '../components/header.component';
import {Text} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import CenterHeaderComponent from '../components/header/center.header.component';
import RightHeaderComponent from '../components/header/right.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
const Stack = createStackNavigator();

const MessagesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => (
                        <CenterHeaderComponent
                            title="Messages"
                            titleStyle={stackHeaderStyle().title}
                        />
                    ),
                    headerRight: () => (
                        <RightHeaderComponent
                            isButton={true}
                            iconName="new-message"
                            iconType="entypo"
                            iconColor={primary().textColor}
                            iconSize={22}
                            onPress={() => {
                                HapticFeedBack('impactLight')
                            }}
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
}

export default MessagesStack;
