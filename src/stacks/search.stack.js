import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen/search.screen';
import {primary, stackHeaderStyle} from '../assets/styles/primary.styles';
import CenterHeaderComponent from '../components/Header/center.header.component';
import LeftHeaderComponent from '../components/Header/left.header.component';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import TestScreen from '../screens/test.screen';
import {SearchBar} from 'react-native-elements';
import {View} from 'react-native';

const Stack = createStackNavigator();

const SearchStack = () => {

    const [state, setState] = useState({
        searchTerm: ''
    });
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
                    headerTitle: () => (
                        <View style={{width: 300, marginLeft: 30, marginBottom: 5}}>
                            <SearchBar
                                ref={search => state.search = search}
                                placeholder='Search... "friends", "celebrities"'
                                onChangeText={ (term) => setState({...state, searchTerm: term }) }
                                value={state.searchTerm}
                                lightTheme
                                searchIcon={false}
                                inputStyle={{color: primary().textColor}}
                                inputContainerStyle={{height: 35}}
                                round
                                autoFocus={true}
                                containerStyle={{backgroundColor: primary().backgroundColor, padding: 0, margin: 0, borderBottomWidth: 0, borderTopWidth: 0}}
                            />
                        </View>
                    ),
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
