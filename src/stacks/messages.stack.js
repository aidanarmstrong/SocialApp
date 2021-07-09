import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen/messages.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import RightHeaderComponent from '../components/Header/right.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import LeftHeaderComponent from '../components/Header/left.header.component';
import {View} from 'react-native';
const Stack = createStackNavigator();

const MessagesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerLeft: () => (
                        <LeftHeaderComponent
                            title="Messages"
                            titleStyle={stackHeaderStyle().title}
                        />
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
                                iconName="md-search"
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
                                iconName="bell-ring"
                                iconType="material-community"
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
}

export default MessagesStack;
