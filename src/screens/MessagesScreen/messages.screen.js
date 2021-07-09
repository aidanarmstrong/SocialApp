import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';
import {primary} from '../../assets/styles/primary.styles';
import {Avatar} from 'react-native-elements';
import ProfilePicture from '../../assets/images/profile-picture.jpg';
import VerifiedComponent from '../../components/Verified/verified.component';
import verifiedUser from '../../assets/images/verified.png';

const MessagesScreen = () => {


   const MessageComponent = ({data}) => (
       <TouchableOpacity
           style={styles.messageContainer}
           activeOpacity={0.8}
       >
           <View style={[primary().flexRow, {width: 300}]}>
               <View style={styles.profilePicture}>
                   <Avatar
                       size="medium"
                       overlayContainerStyle={{backgroundColor: 'white'}}
                       rounded
                       source={ProfilePicture}
                   />
               </View>
               <View style={styles.message}>
                   <VerifiedComponent
                       username={data.user.username}
                       profileImage={verifiedUser}
                       verified={data.user.verified}
                       content={
                           <View style={{width: 280}}>
                               <View style={primary().flexRow}>
                                   <View style={{width: "80%"}}>
                                       <Text numberOfLines={1} style={styles.text}>{data.message}</Text>
                                   </View>
                                   <View style={{width: "20%", justifyContent: 'center', alignItems: 'flex-end'}}>
                                       <Text style={styles.date}>{data.timestamp}</Text>
                                   </View>
                               </View>
                           </View>
                       }
                   />
               </View>
           </View>
       </TouchableOpacity>
   );

    return(
        <CustomSafeAreaView>
            <View style={{backgroundColor: primary().backgroundColor, padding: 15, alignItems: 'center'}}>
                <View style={primary().flexRow}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.chip}
                    >
                        <Text>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.chip}
                    >
                        <Text>Archived</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={[
                    {
                        id: 1,
                        user: {
                            username: "ben.ginty",
                            verified: false,
                        },
                        message: "hi hi this is a test test, i hope you are well",
                        timestamp: "just now"
                    },
                    {
                        id: 2,
                        user: {
                            username: "neil.armstrong",
                            verified: true,
                        },
                        message: "ok",
                        timestamp: "15m ago"
                    },
                    {
                        id: 3,
                        user: {
                            username: "kate.armstrong",
                            verified: true,
                        },
                        message: "yeah ok",
                        timestamp: "34m ago"
                    },
                    {
                        id: 5,
                        user: {
                            username: "niallarmstrong",
                            verified: false,
                        },
                        message: "nb lad",
                        timestamp: "45m ago"
                    }
                ]}
                renderItem={(data, key) => <MessageComponent data={data.item} key={key}/>}
            />
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    chip: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "rgba(240, 240, 240, 0.5)",
        marginRight: 8,
        borderRadius: 15
    },
    messageContainer: {
        justifyContent: 'center',
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
        borderRadius: 20,
        backgroundColor: primary().backgroundColor
    },
    profilePicture: {
        padding: 5,
        paddingRight: 8,
    },
    message: {
        justifyContent: 'center',
    },
    username: {
        width: "50%",
        fontWeight: '600',
        color: primary().textColor
    },
    text:{
        paddingTop: 4,
        color: primary().textColor
    },
    date: {
        fontWeight: '500',
        fontSize: 12,
        color: primary().textColor
    }
})

export default MessagesScreen;
