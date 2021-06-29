import React from 'react';
import MaterialBottomTabs from '../components/materialBottomTabs';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import SettingsStack from '../stacks/settings.stack';
import SearchStack from '../stacks/search.stack';
import CommentScreen from '../screens/comment.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import LeftHeaderComponent from '../components/header/left.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import PostScreen from '../screens/post.screen';
const Stack = createStackNavigator();
const Root = () => {
    return (
        <Stack.Navigator
            headerMode="float"
            initialRouteName="Tabs"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={MaterialBottomTabs}/>
            <Stack.Screen name="SettingsStack" component={SettingsStack}/>
            <Stack.Screen name="SearchStack" component={SearchStack}/>
            <Stack.Screen
                name="PostScreen"
                component={PostScreen}
                options={{
                    gestureEnabled: false,
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                }}

            />
            <Stack.Screen
                name="Comments" component={CommentScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Comments",
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
        </Stack.Navigator>
    )
}

export default Root;
