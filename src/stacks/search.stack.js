import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/search.screen';
import HeaderComponent from '../components/header.component';
import {Text} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
const Stack = createStackNavigator();

const SearchStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () =>
                        <HeaderComponent
                            navigation={navigation}
                            headerCenter={
                                <Text style={{color: primary().textColor}}>Search</Text>
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

export default SearchStack;
