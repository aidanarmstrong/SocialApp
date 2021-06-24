import React from 'react';
import {Text, View} from 'react-native';
import CustomSafeAreaView from '../components/assets/customSafeAreaView.component';

const TestScreen = () => {
    return (
        <CustomSafeAreaView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Test Screen</Text>
            </View>
        </CustomSafeAreaView>
    )
}

export default TestScreen;
