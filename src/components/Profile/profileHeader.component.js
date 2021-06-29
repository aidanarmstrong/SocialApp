import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {isAndroid, primary} from '../../assets/styles/primary.styles';
import RightHeaderComponent from '../header/right.header.component';
import {HapticFeedBack} from '../assets/hapticFeedback.component';
import {Avatar} from 'react-native-elements';
import ProfilePicture from '../../assets/images/profile-picture.jpg';
import ProfileBackground from '../../assets/images/profileBackground.jpeg';
import VerifiedComponent from '../Verified/verified.component';

const ProfileHeaderComponent = ({data, navigation}) => {
    return(
        <ImageBackground
            source={ProfileBackground}
            imageStyle={styles.imageStyle}
            style={styles.container}>
            <View style={primary().flexRow}>
                <View style={{width: "25%"}}/>
                <View style={[{width: "50%"}, primary().alignCenter]}>
                    <VerifiedComponent
                        username={data.username}
                        verified={data.verified}
                        fontWeight="600"
                        fontSize={18}
                        fontColor="#fff"
                    />
                </View>
                <View style={[{width: "25%"}, primary().alignEnd]}>
                    <RightHeaderComponent
                        button={true}
                        buttonStyle={{
                            borderRadius: 30,
                            padding: 4,
                            backgroundColor: "rgba(24, 34, 51,0.6)"
                        }}
                        iconName="dots-three-horizontal"
                        iconType="entypo"
                        iconColor="#fff"
                        iconSize={20}
                        style={0}
                        onPress={() => {
                            HapticFeedBack('impactLight')
                            navigation.navigate('SettingsStack')
                        }}
                    />
                </View>
            </View>


            <View style={{
                marginTop: 90,
                marginLeft: 15,
                marginRight: 15,
            }}>

                <View style={primary().flexRow}>
                    <View style={{width: "35%"}}>
                        <View style={styles.profilePhoto}>
                            <Avatar
                                size="large"
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                rounded
                                source={ProfilePicture}
                            />
                        </View>
                    </View>


                    <View style={{width: "65%", justifyContent: 'center', alignItems: 'flex-start'}}>
                        <View style={primary().flexRow}>
                            <View>
                                <Text style={styles.profileCount}>{data.posts}</Text>
                                <Text style={styles.profileTitle}>Posts</Text>
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.profileCount}>{data.followers}</Text>
                                <Text style={styles.profileTitle}>Followers</Text>
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.profileCount}>{data.following}</Text>
                                <Text style={styles.profileTitle}>Following</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        opacity:0.6,
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        resizeMode: "cover",
        height: isAndroid() ? 250 : 300,
        paddingTop: isAndroid() ? 10 : 60,
    },
    profilePhoto:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    profileTitle: {
        color: '#fff',
        marginTop: 3,
        fontSize: 13,
    },
    profileCount: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default ProfileHeaderComponent;
