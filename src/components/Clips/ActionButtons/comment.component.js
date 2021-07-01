import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';
import {primary} from '../../../assets/styles/primary.styles';

const CommentsClipComponent = ({comments, navigation}) => {

    const selectComments = () => {
        HapticFeedBack('impactLight');
        // navigation.navigate('Comments', comments);
    }

    return (
        <View
            style={{
                width: '33.3%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                style={styles.commentButton}
                activeOpacity={primary().activeOpacity}
                onPress={() => selectComments()}
            >
                <Ionicons name="md-chatbubble-ellipses" color="#fff" size={26}/>
            </TouchableOpacity>

            <View style={{justifyContent: 'center'}}>
                <Text style={styles.comments}>{comments.numberOfComments}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    commentButton: {
        marginBottom: 5,
    },
    comments: {
        color: '#fff'
    }
});

export default CommentsClipComponent;
