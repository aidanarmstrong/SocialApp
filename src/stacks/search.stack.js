import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen/search.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
const Stack = createStackNavigator();
import CenterHeaderComponent from '../components/header/center.header.component';
import LeftHeaderComponent from '../components/header/left.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import TestScreen from '../screens/test.screen';

const SearchStack = () => {
    return(
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Search"
        >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Search",
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
            <Stack.Screen name="test" component={TestScreen}/>
        </Stack.Navigator>
    )
}

export default SearchStack;
