import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeedStack from '../stacks/feed.stack';
import SearchStack from '../stacks/search.stack';
import NotificationsStack from '../stacks/notifications.stack';
import MessagesStack from '../stacks/messages.stack';
import TestScreen from '../screens/test.screen';
import {bottomTabsStyles} from '../assets/styles/primary.styles';
const Tab = createMaterialBottomTabNavigator();
import {HapticFeedBack} from './assets/hapticFeedback.component';
import {Icon} from 'react-native-elements';

const MaterialBottomTabs = (props) => {

    // Allows a light preassure feedback
    const tabPressed = () =>{
        HapticFeedBack('impactLight');
    }

    const iconSize = bottomTabsStyles().bottomIconSize;
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor={bottomTabsStyles().activeColor}
            inactiveColor={bottomTabsStyles().inactiveColor}
            labeled={false}
            barStyle={bottomTabsStyles().bottomTabsStyle}
        >
            <Tab.Screen
                name="HomeTab"
                component={FeedStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            focused ? <Icon name="md-home" type="ionicon" color={color} size={iconSize} />
                                : <Icon name="md-home-outline" type="ionicon" color={color} size={iconSize} />
                        )
                    },
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Icon name="md-search-sharp" type="ionicon" color={color} size={iconSize} />
                            : <Icon name="md-search-outline" type="ionicon" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddTab"
                component={TestScreen}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Icon name="md-add-sharp" type="ionicon" color={color} size={iconSize} />
                            : <Icon name="md-add-outline" type="ionicon" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationsTab"
                component={NotificationsStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Icon name="notifications" type="ionicon" color={color} size={iconSize} />
                            : <Icon name="notifications-outline" type="ionicon" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="messagesTab"
                component={MessagesStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused? <Icon name="chatbubble-sharp" type="ionicon" color={color} size={iconSize} />
                            : <Icon name="chatbubble-outline" type="ionicon" color={color} size={iconSize} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default MaterialBottomTabs;
