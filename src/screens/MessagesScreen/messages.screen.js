import React from 'react';
import {Text, View} from 'react-native';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';

const MessagesScreen = () => {
    return(
        <CustomSafeAreaView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Messages Screen</Text>
            </View>
        </CustomSafeAreaView>
    )
}

export default MessagesScreen;
