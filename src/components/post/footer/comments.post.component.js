import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../assets/styles/primary.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';

const CommentsPostComponent = () => {

    const [state, setState] = useState({
        selected: false
    });

    const selectComments = () => {
        HapticFeedBack('impactLight')
        setState(prevState => {
            return {
                ...prevState,
                selected: !prevState.selected
            }
        });
    }
    return (
        <View
            style={{
                width: '15%',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <TouchableOpacity
                style={styles.commentButton}
                activeOpacity={primary().activeOpacity}
                onPress={() => selectComments()}
            >
                <View>
                    {
                        !state.selected ?  (
                            <Ionicons name="md-chatbubble-ellipses-outline" color={primary().textColor} size={23}/>
                        ): (
                            <Ionicons name="md-chatbubble-ellipses" color={primary().textColor} size={23}/>
                        )
                    }
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    commentButton: {
        paddingBottom: 15
    }
});

export default CommentsPostComponent;
