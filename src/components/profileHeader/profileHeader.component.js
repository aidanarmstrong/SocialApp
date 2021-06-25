import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VerifiedIcon from '../../assets/images/verified.png';
import {primary} from '../../assets/styles/primary.styles';
const ProfileHeaderComponent = (
        {
            username,
            verified,
            profileImage,
            iconSet,
            style,
            content

        }
    ) => {
    return (
        <View style={style}>
            <View style={primary().flexRow}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    <View style={primary().flexRow}>
                        <View>
                            <Text style={styles.username}>{username}</Text>
                        </View>
                        <View style={styles.verifiedContainer}>
                            {
                                verified ? (
                                    <View style={styles.verifiedContainer}>
                                        <Image source={VerifiedIcon} style={{width: 15, height: 15}}/>
                                    </View>
                                ): null
                            }
                        </View>
                    </View>
                </View>
            </View>
            <View>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    username: {
        fontWeight: '500',
        color: primary().textColor
    },
    verifiedContainer: {
        marginLeft: 3
    },
    iconContainer: {
        width: '21%',
        alignItems: 'flex-end'
    },
    icon:{
        marginRight: 20,
    }
})
export default ProfileHeaderComponent;
