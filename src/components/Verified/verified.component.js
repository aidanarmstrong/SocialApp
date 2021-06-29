import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VerifiedIcon from '../../assets/images/verified.png';
import {primary} from '../../assets/styles/primary.styles';

// This component check if the user is verified and displays any other content provided below
const VerifiedComponent = (
        {
            username,
            verified,
            style,
            fontSize,
            fontWeight,
            fontColor,
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
                            <Text
                                style={{
                                    fontSize: fontSize || 14,
                                    fontWeight: fontWeight || '500',
                                    color: fontColor || primary().textColor
                                }}
                            >{username}</Text>
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
        justifyContent: 'center',
        marginLeft: 3
    },
})
export default VerifiedComponent;
