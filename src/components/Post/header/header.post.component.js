import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary, shareOptionsStyles} from '../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';
import {Avatar, Icon, Overlay} from 'react-native-elements';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import VerifiedComponent from '../../Verified/verified.component';
import OptionsButton from '../footer/share/options.button.share';

const PostHeader = (data) => {

    const [overlay, setOverlay] = useState(false);
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
                    <VerifiedComponent
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
                            onPress={() => setOverlay(true)}
                        >
                            <View>
                                <Icon name="dots-horizontal" type="material-community" color={primary().textColor} size={26}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Overlay
                isVisible={overlay}
                onBackdropPress={() => setOverlay(false)}
                overlayStyle={{backgroundColor: primary().backgroundColor}}
                backdropStyle={{backgroundColor: "rgba(0,0,0,0.6)"}}
            >
                <View style={{
                    width: 350,
                    height: 300,
                    padding: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 14, color: primary().textColor}}>See something you don't want to?</Text>
                    <View style={{marginTop: 15}}>
                        <OptionsButton
                            title={"Unfollow " + data.user.username}
                            icon="account-remove-outline"
                            iconColor={primary().textColor}
                            iconSize={23}
                            iconType="material-community"
                            textColor={primary().textColor}
                            activeOpacity={primary().activeOpacity}
                            backgroundColor={shareOptionsStyles().buttonColor}
                            onPress={ () => {
                                HapticFeedBack('impactLight')
                                alert("Unfollowed user")
                            }}
                        />
                        <OptionsButton
                            title={"See less of " + data.user.username + " posts"}
                            icon="eye-with-line"
                            iconColor={primary().textColor}
                            iconSize={23}
                            iconType="entypo"
                            textColor={primary().textColor}
                            activeOpacity={primary().activeOpacity}
                            backgroundColor={shareOptionsStyles().buttonColor}
                            onPress={ () => {
                                HapticFeedBack('impactLight')
                                alert("See less of user")
                            }}
                        />
                        <OptionsButton
                            title={"Report " + data.user.username }
                            icon="report-problem"
                            iconColor={primary().textColor}
                            iconSize={23}
                            textColor={primary().textColor}
                            activeOpacity={primary().activeOpacity}
                            backgroundColor={shareOptionsStyles().buttonColor}
                            onPress={ () => {
                                HapticFeedBack('impactLight')
                                alert("Reported User")
                            }}
                        />
                    </View>
                </View>
            </Overlay>

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
