import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';
import {Avatar} from 'react-native-elements';
import ProfilePicture from '../../../assets/images/profile-picture.jpg';
import verifiedUser from '../../../assets/images/verified.png';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostHeader = (props) => {

    const [state, setState] = useState({
        verifiedUser: props.verifiedUser
    });

    return(
        <View style={primary().flexRow}>
            <View style={{
                width: "18%", justifyContent: 'center', alignItems: 'flex-start',
                height: 60
            }}>
                <TouchableOpacity style={styles.profilePhoto}
                                  activeOpacity={primary().activeOpacity}
                                  onPress={() => HapticFeedBack('impactLight')}
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
                    <View style={{
                        width: '70%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                        <View style={primary().flexRow}>
                            <View>
                                <Text style={styles.name}>{props.name}</Text>
                            </View>
                            {
                                state.verifiedUser ? (
                                    <View style={{marginLeft: 5}}>
                                        <Image source={verifiedUser} style={{width: 15, height: 15}}/>
                                    </View>
                                ): null
                            }
                        </View>
                    </View>

                    <View style={{width: '21%', alignItems: 'flex-end'}}>
                        <TouchableOpacity
                            activeOpacity={primary().activeOpacity}
                            style={styles.otherButton}
                            onPress={() => alert('hi')}
                        >
                            <View>
                                <MaterialCommunityIcons name="dots-horizontal" color={primary().textColor} size={26}/>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={primary().flexRow}>
                    <View style={styles.timeStampContainer}>
                        <Text style={primary().timestamp}>{props.timestamp}</Text>
                    </View>
                    <View style={styles.timeStampFollowingContainer}>
                        <Feather name="user-check" style={{color: primary().timestamp.color}} size={15}/>
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
        marginLeft: -3,
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
