import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home.screen';
import HeaderComponent from '../components/header.component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import MaterialBottomTabs from '../components/materialBottomTabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SettingsStack from './settings.stack';
import Logo from '../assets/images/logo.png';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
                    headerTitle: () =>
                        <HeaderComponent
                            navigation={navigation}
                            headerLeft={
                                <Text style={{fontSize: 22, fontWeight: '600', marginLeft: 15, color: primary().textColor}}>
                                    Feed
                                </Text>
                            }
                            headerCenter={
                                <View>
                                    <Image
                                        style={{width: 30, height: 30}}
                                        source={Logo}
                                    />
                                </View>
                            }
                            headerRight={
                                <TouchableOpacity
                                    activeOpacity={primary().activeOpacity}
                                    onPress={() => {
                                        HapticFeedBack('impactLight')
                                        navigation.navigate('SettingsStack')
                                    }}
                                >
                                    <MaterialIcons style={{color: primary().textColor}} name="admin-panel-settings" size={26} />
                                </TouchableOpacity>
                            }
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

export default FeedStack;
