import React from 'react';
import {Text, View} from 'react-native';
import CustomSafeAreaView from '../components/assets/customSafeAreaView.component';

const NotificationsScreen = () => {
    return(
        <CustomSafeAreaView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Notifications Screen</Text>
            </View>
        </CustomSafeAreaView>
    )
}

export default NotificationsScreen;
