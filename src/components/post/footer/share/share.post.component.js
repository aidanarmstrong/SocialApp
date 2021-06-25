import React, {useRef, useState} from 'react';
import {Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary, shareOptionsStyles} from '../../../../assets/styles/primary.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HapticFeedBack} from '../../../assets/hapticFeedback.component';
import BottomSheet from "react-native-gesture-bottom-sheet";
import OptionsButton from './options.button.share';

const SharePostComponent = ({data}) => {
    const bottomSheet = useRef();

    const selectShare = () => {
        bottomSheet.current.show();
        HapticFeedBack('impactLight')
    }

    const onShare = async (post) => {
        try {
            const result = await Share.share({
                message: post.postMessage,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <View
            style={{
                width: '47%',
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


            <BottomSheet
                ref={bottomSheet}
                hasDraggableIcon
                height={320}
                sheetBackgroundColor={shareOptionsStyles().bottomSheetColor}
                backgroundColor={shareOptionsStyles().overlayColor}
            >
                <View style={{
                    margin: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{fontWeight: '600', fontSize: 22, color: primary().textColor}}>Share</Text>
                </View>
                <OptionsButton
                    title="Save Post"
                    icon="save-alt"
                    iconColor={primary().textColor}
                    iconSize={21}
                    textColor={primary().textColor}
                    activeOpacity={primary().activeOpacity}
                    backgroundColor={shareOptionsStyles().buttonColor}
                    onPress={ () => {
                        HapticFeedBack('impactLight')
                        alert("save post to device")
                    }}
                />

                <OptionsButton
                    title="Send to friend"
                    icon="users"
                    iconType="feather"
                    iconColor={primary().textColor}
                    iconSize={20}
                    textColor={primary().textColor}
                    activeOpacity={primary().activeOpacity}
                    backgroundColor={shareOptionsStyles().buttonColor}
                    onPress={ () => {
                        HapticFeedBack('impactLight')
                        alert("Send to friend")
                    }}
                />
                <OptionsButton
                    title="Other"
                    icon="send"
                    iconType="feather"
                    iconColor={primary().textColor}
                    iconSize={20}
                    textColor={primary().textColor}
                    activeOpacity={primary().activeOpacity}
                    backgroundColor={shareOptionsStyles().buttonColor}
                    onPress={ async () => {
                        HapticFeedBack('impactLight')
                        await onShare(data.post)
                    }}
                />
            </BottomSheet>


        </View>
    )
}


const styles = StyleSheet.create({
    shareButton: {
        paddingBottom: 15
    },
    shareContainer: {
        flexDirection: 'column',
        margin: 10
    },
    optionContainer: {
    },
    optionButton: {
        marginBottom: 13,
        padding: 20,
        backgroundColor: shareOptionsStyles().buttonColor,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
    }
});

export default SharePostComponent;
