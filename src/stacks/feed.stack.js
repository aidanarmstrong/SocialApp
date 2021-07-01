import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/home.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import Logo from '../assets/images/logo.png';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import RightHeaderComponent from '../components/Header/right.header.component';
import CenterHeaderComponent from '../components/Header/center.header.component';
import LeftHeaderComponent from '../components/Header/left.header.component';
import {TouchableOpacity, View} from 'react-native';
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
                           titleStyle={{
                               fontSize: 22,
                               fontWeight: '600',
                               marginLeft: 0,
                               color: primary().title.color
                           }}
                       />
                    ),
                    headerTitle: () => (
                       <CenterHeaderComponent
                           isImage={true}
                           image={Logo}
                       />
                    ),

                    headerRight: () => (
                        <View style={primary().flexRow}>
                            <RightHeaderComponent
                                button={true}
                                buttonStyle={{
                                    borderRadius: 30,
                                    padding: 4,
                                    backgroundColor: "rgba(24, 34, 51,0.6)"
                                }}
                                iconName="md-search"
                                iconType="ionicon"
                                iconColor="#fff"
                                iconSize={20}
                                onPress={() => {
                                    HapticFeedBack('impactLight')
                                    navigation.navigate('SearchStack')
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

export default FeedStack;
