import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';
import {Avatar, Icon} from 'react-native-elements';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import ProfileHeaderComponent from '../../profileHeader/profileHeader.component';

const PostHeader = (data) => {
    return(
        <View style={[primary().flexRow,{marginTop: 3}]}>
            <View style={{
                width: "18%",
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: 60
            }}>
                <TouchableOpacity
                    style={styles.profilePhoto}
                    activeOpacity={primary().activeOpacity}
                    onPress={() => {
                        HapticFeedBack('impactLight')
                    }}
                >
                    <Avatar
                        size="medium"
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        rounded
                        source={ProfilePicture}
                    />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={primary().flexRow}>
                    <ProfileHeaderComponent
                        username={data.user.username}
                        verified={data.user.verified}
                        style={{width: "70%"}}
                        content={
                            <View style={primary().flexRow}>
                                <View style={styles.timeStampContainer}>
                                    <Text style={primary().timestamp}>{data.post.timestamp}</Text>
                                </View>
                                <View style={styles.timeStampFollowingContainer}>
                                    <Icon name="user-check" type="feather" color={primary().timestamp.color} size={15}/>
                                </View>
                            </View>
                        }
                    />
                    <View style={{width: '21%', alignItems: 'flex-end'}}>
                        <TouchableOpacity
                            activeOpacity={primary().activeOpacity}
                            style={styles.otherButton}
                            onPress={() => alert('hi')}
                        >
                            <View>
                                <Icon name="dots-horizontal" type="material-community" color={primary().textColor} size={26}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        height: 60,
    },
    profilePhoto:{
        marginLeft: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    name: {
        fontWeight: '500',
        color: primary().textColor
    },
    timeStampContainer:{
        marginLeft: 0,
        marginRight: 5,
        justifyContent: 'center', alignItems: 'flex-start'
    },
    timeStampFollowingContainer:{
        justifyContent: 'center', alignItems: 'flex-start'
    },
    otherButton: {
        marginRight: 20,
    }
});

export default PostHeader;
