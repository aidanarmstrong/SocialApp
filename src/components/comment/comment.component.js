import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';
import {Avatar} from 'react-native-elements';
import ProfilePicture from '../../assets/images/profile-picture.jpg';
import verifiedUser from '../../assets/images/verified.png';
import VerifiedComponent from '../Verified/verified.component';

const CommentComponent = ({data, key}) =>{

    return(
        <View style={styles.comment} key={key}>
            <View style={primary().flexRow}>
                <View style={styles.profilePhoto}>
                    <Avatar
                        size="small"
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        rounded
                        source={ProfilePicture}
                    />
                </View>
                <View style={primary().alignStart}>
                    <VerifiedComponent
                        username={data.user.username}
                        profileImage={verifiedUser}
                        verified={data.user.verified}
                        content={
                            <View style={[styles.timeStampContainer, primary().alignStart]}>
                                <Text style={primary().timestamp}>{data.timestamp}</Text>
                            </View>
                        }
                    />
                    <View style={{paddingTop: 5, paddingBottom: 5, maxWidth: 300}}>
                        <Text style={{color: primary().textColor}}>{data.comment}</Text>
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
        paddingRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    timeStampContainer:{
        marginRight: 5,
    },
    comment: {
        padding: 10,
        backgroundColor: primary().backgroundColor,
    }
});

export default CommentComponent;
