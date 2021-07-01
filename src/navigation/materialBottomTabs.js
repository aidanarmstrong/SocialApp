import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FeedStack from '../stacks/feed.stack';
import NotificationsStack from '../stacks/notifications.stack';
import MessagesStack from '../stacks/messages.stack';
import {bottomTabsStyles} from '../assets/styles/primary.styles';
const Tab = createMaterialBottomTabNavigator();
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import {Icon} from 'react-native-elements';
import ProfileStack from '../stacks/pofile.stack';
import ClipStack from '../stacks/clips.stack';

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
            <Tab.Screen
                name="ClipsTab"
                component={ClipStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Icon name="md-videocam" type="ionicon" color={color} size={26} />
                            : <Icon name="md-videocam-outline" type="ionicon" color={color} size={26} />
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
                name="ProfileTab"
                component={ProfileStack}
                listeners={() => ({
                    tabPress: (e) => {
                        tabPressed();
                    },
                })}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        focused ? <Icon name="user" type="font-awesome" color={color} size={iconSize} />
                            : <Icon name="user-o" type="font-awesome" color={color} size={iconSize} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default MaterialBottomTabs;
