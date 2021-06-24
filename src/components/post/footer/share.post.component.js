import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../assets/styles/primary.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Overlay} from 'react-native-elements';

const SharePostComponent = () => {

    const [visible, setVisible] = useState(false);
    const selectShare = () => {
        setVisible(true);
        HapticFeedBack('impactLight')
    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return(
        <View
            style={{
                width: '70%',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <TouchableOpacity
                style={[styles.shareButton, {marginRight: 30}]}
                activeOpacity={primary().activeOpacity}
                onPress={() => selectShare()}
            >
                <View>
                    <Ionicons name="md-share-outline" color={primary().textColor} size={20}/>
                </View>
            </TouchableOpacity>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{backgroundColor: primary().backgroundColor}}>
                <View>

                </View>
            </Overlay>
        </View>
    )
}


const styles = StyleSheet.create({
    shareButton: {
        paddingBottom: 15
    }
});

export default SharePostComponent;
