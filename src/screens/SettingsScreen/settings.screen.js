import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';

const SettingsScreen = (props) => {
    return (
        <CustomSafeAreaView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings Screen</Text>
            </View>
        </CustomSafeAreaView>
    )
}

export default SettingsScreen;
