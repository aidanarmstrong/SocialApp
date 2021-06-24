import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedStack from '../stacks/feed.stack';
import SearchStack from '../stacks/search.stack';
import NotificationsStack from '../stacks/notifications.stack';
import MessagesStack from '../stacks/messages.stack';
import TestScreen from '../screens/test.screen';
import {bottomTabsStyles} from '../assets/styles/primary.styles';
const Tab = createMaterialBottomTabNavigator();
import {HapticFeedBack} from './assets/hapticFeedback.component';

const MaterialBottomTabs = (props) => {
    HapticFeedBack('impactLight')
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
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            focused ? <Ionicons name="md-home" color={color} size={iconSize} />
                                : <Ionicons name="md-home-outline" color={color} size={iconSize} />
                        )
                    },
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Ionicons name="md-search-sharp" color={color} size={iconSize} />
                            : <Ionicons name="md-search-outline" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddTab"
                component={TestScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Ionicons name="md-add-sharp" color={color} size={iconSize} />
                            : <Ionicons name="md-add-outline" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationsTab"
                component={NotificationsStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Ionicons name="notifications" color={color} size={iconSize} />
                            : <Ionicons name="notifications-outline" color={color} size={iconSize} />
                    ),
                }}
            />
            <Tab.Screen
                name="messagesTab"
                component={MessagesStack}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused? <Ionicons name="chatbubble-sharp" color={color} size={iconSize} />
                            : <Ionicons name="chatbubble-outline" color={color} size={iconSize} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MaterialBottomTabs;
