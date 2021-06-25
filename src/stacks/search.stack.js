import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/search.screen';
import HeaderComponent from '../components/header.component';
import {Text, TouchableOpacity} from 'react-native';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
const Stack = createStackNavigator();
import {Icon, SearchBar} from 'react-native-elements';
import CenterHeaderComponent from '../components/header/center.header.component';

const SearchStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: () => (
                        <CenterHeaderComponent
                            title="Search"
                            titleStyle={stackHeaderStyle().title}
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

export default SearchStack;
