import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../../assets/styles/primary.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HapticFeedBack} from '../../../assets/hapticFeedback.component';
import {isDarkMode} from '../../../assets/checkDarkMode';

const CommentsPostComponent = ({comments, navigation}) => {

    const selectComments = () => {
        HapticFeedBack('impactLight');
        navigation.navigate('Comments', comments);
    }

    const CheckDarkModeIcon = () => {
        if(isDarkMode()){
            return "md-chatbubble-ellipses"
        }

        return "md-chatbubble-ellipses-outline";
    }

    return (
        <View
            style={{
                width: '28%',
                justifyContent: 'center',
            }}
        >
            <TouchableOpacity
                style={styles.commentButton}
                activeOpacity={primary().activeOpacity}
                onPress={() => selectComments()}
            >
                <View style={primary().flexRow}>
                    <Ionicons name={CheckDarkModeIcon()} color={primary().textColor} size={23}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.comments}>{comments.numberOfComments}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    commentButton: {
        marginLeft: 5,
        paddingBottom: 15
    },
    comments: {
        marginLeft: 5,
        color: primary().textColor
    }
});

export default CommentsPostComponent;
