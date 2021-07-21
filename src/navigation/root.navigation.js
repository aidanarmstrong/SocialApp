import React, {useRef} from 'react';
import MaterialBottomTabs from './materialBottomTabs';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import SettingsStack from '../stacks/settings.stack';
import SearchStack from '../stacks/search.stack';
import CommentScreen from '../screens/CommentScreen/comment.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import LeftHeaderComponent from '../components/Header/left.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import PostScreen from '../screens/PostScreen/post.screen';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SetCurrentScreen} from '../actions/nav.actions';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatScreen from '../screens/MessagesScreen/chat.screen';
import {View} from 'react-native';
import RightHeaderComponent from '../components/Header/right.header.component';

const Stack = createStackNavigator();

const Root = () => {
    const navigationRef = useRef();
    const routeNameRef = useRef();
    const dispatch = useDispatch();

    return (
        <SafeAreaProvider>
            <NavigationContainer
                ref={navigationRef}
                onReady={() =>
                    (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
                }
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = navigationRef.current.getCurrentRoute().name;

                    if (previousRouteName !== currentRouteName) {
                        dispatch(SetCurrentScreen(currentRouteName));
                    }
                }}
            >
                <Navigation/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}


const Navigation = () => {
    return(
        (
            <Stack.Navigator
                headerMode="float"
                initialRouteName="Tabs"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={MaterialBottomTabs} options={({})}/>
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
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={({ navigation, route }) => ({
                        headerShown: true,
                        headerLeft: () => (
                            <View style={primary().flexRow}>
                                <LeftHeaderComponent
                                    button={true}
                                    buttonStyle={{
                                        borderRadius: 30,
                                        padding: 6,
                                        backgroundColor: "rgb(240, 240, 240)"
                                    }}
                                    iconName="chevron-back"
                                    iconType="ionicon"
                                    iconColor="rgb(150,150,150)"
                                    iconSize={20}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                />
                                <LeftHeaderComponent
                                    title={route.params.data.user.firstName + " " + route.params.data.user.lastName}
                                    titleStyle={stackHeaderStyle().title}
                                />
                            </View>
                        ),
                        headerTitle: null,
                        headerRight: () => (
                            <View style={primary().flexRow}>
                                <RightHeaderComponent
                                    button={true}
                                    buttonStyle={{
                                        borderRadius: 30,
                                        padding: 6,
                                        backgroundColor: "rgb(240, 240, 240)"
                                    }}
                                    iconName="videocam"
                                    iconType="ionicon"
                                    iconColor="rgb(150,150,150)"
                                    iconSize={20}
                                    onPress={() => {
                                        HapticFeedBack('impactLight')
                                    }}
                                />
                                <RightHeaderComponent
                                    button={true}
                                    buttonStyle={{
                                        borderRadius: 30,
                                        padding: 6,
                                        backgroundColor: "rgb(240, 240, 240)"
                                    }}
                                    iconName="call"
                                    iconType="ionicon"
                                    iconColor="rgb(150,150,150)"
                                    iconSize={20}
                                    onPress={() => {
                                        HapticFeedBack('impactLight')
                                    }}
                                />
                            </View>
                        ),
                        headerStyle: [
                            stackHeaderStyle().headerBackground,
                            stackHeaderStyle().emptyShadowOffset
                        ]
                    })}
                />
            </Stack.Navigator>
        )
    )
}

export default Root;
