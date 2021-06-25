import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import SettingsStack from './settings.stack';
import Logo from '../assets/images/logo.png';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import CommentScreen from '../screens/comment.screen';
import RightHeaderComponent from '../components/header/right.header.component';
import CenterHeaderComponent from '../components/header/center.header.component';
import LeftHeaderComponent from '../components/header/left.header.component';
const Stack = createStackNavigator();

const FeedStack = () => {
    return(
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home" component={HomeScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerLeft: () => (
                       <LeftHeaderComponent
                           title="Feed"
                           titleStyle={{fontSize: 22, fontWeight: '600', marginLeft: 0, color: primary().textColor}}
                       />
                    ),
                    headerTitle: () => (
                       <CenterHeaderComponent
                           isImage={true}
                           image={Logo}
                       />
                    ),

                    headerRight: () => (
                        <RightHeaderComponent
                            isButton={true}
                            iconName="admin-panel-settings"
                            iconColor={primary().textColor}
                            iconSize={26}
                            onPress={() => {
                                HapticFeedBack('impactLight')
                                navigation.navigate('SettingsStack')
                            }}
                        />)
                    ,
                    headerStyle: [
                        stackHeaderStyle().headerBackground,
                        stackHeaderStyle().emptyShadowOffset
                    ]
                })}
            />
            <Stack.Screen
                name="Comments" component={CommentScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Comments",
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
        </Stack.Navigator>
    )
}

export default FeedStack;
