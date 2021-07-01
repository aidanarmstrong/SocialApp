import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View, RefreshControl, Text, TextInput, TouchableOpacity} from 'react-native';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';
import {primary} from '../../assets/styles/primary.styles';
import PostComponent from '../../components/Post/post.component';
import {Avatar, Divider, Icon} from 'react-native-elements';
import ProfilePicture from '../../assets/images/profile-picture.jpg';

const HomeScreen = ({navigation, route}) => {

    const [state, setState] = useState({
        refreshing: false,
    })

    const DATA  = [
        {
            id: 1,
            user: {
                username: "aidanjarmstrong",
                verified: true,
                following: true
            },
            post: {
                postMessage:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non tortor at nisi hendrerit placerat. Maecenas gravida sed est in cursus. Proin scelerisque odio vitae orci rutrum, vel ultrices diam faucibus. Nunc ac nulla tristique, malesuada magna ut, hendrerit quam. Pellentesque sodales fermentum nibh, sit amet pellentesque erat efficitur sit amet. Vivamus vitae commodo sem. Quisque iaculis sodales urna sed convallis. Praesent mattis tellus ut metus pellentesque elementum. Donec magna dolor, euismod vehicula ipsum vitae, pellentesque rhoncus tortor. Aenean pretium at turpis ut suscipit.\n" +
                    "\n" +
                    "In ac odio nec neque fermentum fringilla. Donec tortor purus, lobortis ut aliquet a, porttitor in nulla. Nunc sodales augue sollicitudin nisl semper lacinia. Nulla et rhoncus libero. Vivamus euismod in tortor ut aliquet. Maecenas maximus vulputate gravida. Etiam non lorem in risus mollis hendrerit. Cras massa est, eleifend et ipsum ut, tristique laoreet magna. Nam sollicitudin ipsum et laoreet placerat. Praesent eget nisi aliquam justo fermentum volutpat. Aenean velit tellus, faucibus et convallis sit amet, maximus id ligula. Donec scelerisque porta nunc vel elementum. Donec scelerisque malesuada facilisis."
                ,
                timestamp: "6 hours ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "54",
            },
            comments: {
                numberOfComments: '2',
                comments: [
                    {
                        id: "1",
                        user: {
                            username: "dillon.dolan",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "25 mins ago",
                        comment: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In arcu quam, semper sed pulvinar a, maximus eu massa."
                    },
                    {
                        id: "2",
                        user: {
                            username: "benlynch23",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "5 mins ago",
                        comment: "eubeuife eifbief ehiehfe eriuheir eruhufihier rhierubf."
                    }
                ]
            }
        },
        {
            id: 2,
            user: {
                username: "jack.bennet45",
                verified: false,
                following: true
            },
            post: {
                postMessage:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                timestamp: "2 hours ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "12",
            },
            comments: {
                numberOfComments: '1',
                comments: [
                    {
                        id: "1",
                        user: {
                            username: "neil_armstrong123",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "36 mins ago",
                        comment: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites."
                    },
                ]
            }
        },
        {
            id: 3,
            user: {
                username: "kate_armstrong",
                verified: false,
                following: true
            },
            post: {
                postMessage:  "Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
                timestamp: "23 hours ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "12.5K",
            },
            comments: {
                numberOfComments: '3',
                comments: [
                    {
                        id: "1",
                        user: {
                            username: "aidanjarmstrong",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "45 mins ago",
                        comment: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites."
                    },
                    {
                        id: "2",
                        user: {
                            username: "niall_armstrong",
                            follower: true,
                            verified: true,
                        },
                        timestamp: "36 mins ago",
                        comment: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites."
                    },
                    {
                        id: "3",
                        user: {
                            username: "tess_armstrong",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "23 mins ago",
                        comment: "great..."
                    },
                ]
            }
        },

        {
            id: 4,
            user: {
                username: "Gary Vee",
                verified: true,
                following: true
            },
            post: {
                postMessage:  "This is an awesome app!!! ",
                timestamp: "1 day ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "133.8K",
            },
            comments: {
                numberOfComments: '5',
                comments: [
                    {
                        id: "1",
                        user: {
                            username: "aidanjarmstrong",
                            follower: true,
                            verified: true,
                        },
                        timestamp: "22 hours ago",
                        comment: "Glad you like it gary!",
                    },
                    {
                        id: "2",
                        user: {
                            username: "jack_lopez12",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "12 hours ago",
                        comment: "Amazing!!"
                    },
                    {
                        id: "3",
                        user: {
                            username: "ben.garret",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "9 hours ago",
                        comment: "Awesome !"
                    },
                    {
                        id: "4",
                        user: {
                            username: "janette.brandy",
                            follower: true,
                            verified: false,
                        },
                        timestamp: "23 mins ago",
                        comment: "Great desig!"
                    },
                    {
                        id: "5",
                        user: {
                            username: "larrypage",
                            follower: true,
                            verified: true,
                        },
                        timestamp: "5 hours ago",
                        comment: "I would have to agree with you!"
                    },
                ]
            }
        },

    ]

    const onRefresh = () => {
        setState({refreshing: true});
        setTimeout(() => {
            setState({refreshing: false});
        }, 2000);
    }

    return(
        <CustomSafeAreaView>
            <FlatList
                data={DATA}
                refreshControl={
                    <RefreshControl
                        refreshing={state.refreshing}
                        onRefresh={() => onRefresh()}
                        tintColor={primary().textColor}
                    />
                }
                renderItem={ (data, key) => (
                    <PostComponent data={data} key={key} navigation={navigation}/>
                )}
                ListHeaderComponent={() =>(
                    <View style={{ paddingBottom: 1, backgroundColor: primary().backgroundColor}}>
                        <View style={primary().flexRow}>
                            <View style={[primary().alignEnd, {width: "15%"}]}>
                                <View style={styles.profilePhoto}>
                                    <Avatar
                                        size="small"
                                        overlayContainerStyle={{backgroundColor: 'white'}}
                                        rounded
                                        source={ProfilePicture}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    width: "80%",
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: "85%",
                                    }}
                                    activeOpacity={0.3}
                                    onPress={() => navigation.navigate('PostScreen')}
                                >
                                    <Text style={{color: primary().textColor}}>What's new?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginLeft: 20, marginRight: 20, marginTop: 0, marginBottom: 10}}>
                            <View style={[{marginTop: 10}, primary().flexRow]}>

                                <View style={{width: "50%"}}/>

                                <View style={[{width: "50%"}, primary().alignEnd]}>
                                   <View style={primary().flexRow}>
                                       <View style={[{marginRight: 15}, primary().alignCenter]}>
                                           <TouchableOpacity
                                               activeOpacity={primary().activeOpacity}
                                               onPress={() => navigation.navigate('PostScreen')}
                                           >
                                               <Icon name="attachment" type="entypo" size={20} color={primary().lightText}/>
                                           </TouchableOpacity>
                                       </View>
                                       <View style={[{marginRight: 15}, primary().alignCenter]}>
                                           <TouchableOpacity
                                               activeOpacity={primary().activeOpacity}
                                               onPress={() => navigation.navigate('PostScreen')}
                                           >
                                               <Icon name="emoji-happy" type="entypo" size={20} color={primary().lightText}/>
                                           </TouchableOpacity>
                                       </View>
                                       <View style={{marginRight: 8}}>
                                           <TouchableOpacity
                                               style={{
                                                   padding: 8,
                                                   paddingRight: 20,
                                                   paddingLeft: 20,
                                                   borderWidth: 1,
                                                   borderStyle: 'solid',
                                                   borderRadius: 20,
                                                   backgroundColor: 'rgb(72,103, 153)',
                                                   borderColor: primary().lightText,
                                               }}
                                               activeOpacity={primary().activeOpacity}
                                               onPress={() => navigation.navigate('PostScreen')}
                                           >
                                               <Text style={{color: "#fff"}}>Post</Text>
                                           </TouchableOpacity>
                                       </View>
                                   </View>
                                </View>

                            </View>
                        </View>
                    </View>
                )}
            />
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    profilePhoto:{
        marginRight: 10,
        padding: 10,
        paddingRight: 1,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
});

export default HomeScreen;
