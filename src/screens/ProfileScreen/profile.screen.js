import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import ProfileHeaderComponent from '../../components/Profile/profileHeader.component';
import {bottomTabsStyles, feedStyles, isAndroid, primary, safeAreaViewStyles} from '../../assets/styles/primary.styles';
import {Icon} from 'react-native-elements';
import {HapticFeedBack} from '../../components/assets/hapticFeedback.component';
import PostComponent from '../../components/Post/post.component';


const ProfileScreen = ({navigation}) => {

    const userData = {
        id: 1,
        username: "aidanjarmstrong",
        name: "Aidan Armstrong",
        verified: true,
        timestamp: "",
        posts: 100,
        followers: "110.3M",
        following: "5037"
    }

    const postsData = [
        {
            id: 1,
            user: {
                id: 1,
                username: userData.username,
                verified: userData.verified
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
                numberOfComments: '0',
            }
        },
        {
            id: 2,
            user: {
                id: 1,
                username: userData.username,
                verified: userData.verified
            },
            post: {
                postMessage:  "I love this!" +
                    " 1",
                timestamp: "6 day ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "18",
            },
            comments: {
                numberOfComments: '0',
            }
        },
        {
            id: 3,
            user: {
                id: 1,
                username: userData.username,
                verified: userData.verified
            },
            post: {
                postMessage:  "first Post ever ",
                timestamp: "12 day ago",
                feedPhoto: false,
                feedVideo: false,
                liked: false,
                numberOfLikes: "14",
            },
            comments: {
                numberOfComments: '0',
            }
        }
    ];
    const videoData = [];

    const likedData = [];

    const [posts, setPosts] = useState(true);
    const [videos, setVideos] = useState(false);
    const [liked, setLiked] = useState(false);

    const [state, setState] = useState({
        refreshing: false,
    })

    const selectPosts = (prevState) => {
        HapticFeedBack('impactLight')
        setPosts(true);
        setVideos(false);
        setLiked(false);
    }

    const selectVideos = (prevState) => {
        HapticFeedBack('impactLight')
        setPosts(false);
        setVideos(true);
        setLiked(false);
    }

    const selectLiked = (prevState) => {
        HapticFeedBack('impactLight')
        setPosts(false);
        setVideos(false);
        setLiked(true);
    }

    const Header = () => (
        <View style={primary().flexRow}>
            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.iconSections}
                onPress={() => selectPosts()}
            >
                {
                    posts ? (
                        <Icon name="grid" type="ionicon" size={styles.iconSize} color={bottomTabsStyles().activeColor}/>
                    ): (
                        <Icon name="grid-outline" type="ionicon" size={styles.iconSize} color={primary().textColor}/>
                    )
                }
                <Text style={{color: primary().textColor}}>Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.iconSections}
                onPress={() => selectVideos()}
            >
                {
                    videos ? (
                        <Icon name="videocam" type="ionicon" size={styles.iconSize} color={bottomTabsStyles().activeColor}/>
                    ): (
                        <Icon name="videocam-outline" type="ionicon" size={styles.iconSize} color={primary().textColor}/>
                    )
                }
                <Text style={{color: primary().textColor}}>Clips</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.iconSections}
                onPress={() => selectLiked()}
            >
                {
                    liked ? (
                        <Icon name="md-heart" type="ionicon" size={styles.iconSize} color={bottomTabsStyles().activeColor}/>
                    ): (
                        <Icon name="md-heart-outline" type="ionicon" size={styles.iconSize} color={primary().textColor}/>
                    )
                }
                <Text style={{color: primary().textColor}}>Liked</Text>
            </TouchableOpacity>
        </View>
    )

    const onRefresh = () => {
        setState({refreshing: true});
        setTimeout(() => {
            setState({refreshing: false});
        }, 2000);
    }

    return(
        <View style={styles.container}>
           <ProfileHeaderComponent data={userData} navigation={navigation}/>

            <View style={styles.postContainer}>
                <View style={styles.iconContainer}>
                    <View style={{flex:1}}>
                       {
                           posts ? (
                               postsData.length > 1 ? (
                                   <FlatList
                                       data={postsData}
                                       showsVerticalScrollIndicator={false}
                                       showsHorizontalScrollIndicator={false}
                                       refreshControl={
                                           <RefreshControl
                                               refreshing={state.refreshing}
                                               onRefresh={() => onRefresh()}
                                               tintColor={primary().textColor}
                                           />
                                       }
                                       renderItem={ (data, key) => (
                                           <PostComponent
                                               data={data}
                                               key={key}
                                               navigation={navigation}
                                               style={{
                                                   flex: 1,
                                                   borderBottomColor: safeAreaViewStyles().backgroundColor,
                                                   borderBottomWidth: 5,
                                               }}
                                           />
                                       )}
                                       ListHeaderComponent={() => <Header/>}
                                       // ListFooterComponent={<View style={{height: 100}}/>}
                                   />
                               ): (
                                   <View>
                                       <Header/>
                                       <View style={{ height: 350, justifyContent: 'center', alignItems: 'center'}}>
                                           <Text style={{color: primary().textColor}}> You have no posts.</Text>
                                       </View>
                                   </View>
                               )
                           ): null
                       }

                       {
                           videos ? (
                               videoData.length > 0 ? (
                                   <Text>Videos </Text>
                               ):(
                                   <View>
                                       <Header/>
                                       <View style={{ height: 350, justifyContent: 'center', alignItems: 'center'}}>
                                           <Text style={{color: primary().textColor}}> You have no clips.</Text>
                                       </View>
                                   </View>
                               )
                           ): null
                       }

                       {
                           liked ? (
                               likedData.length > 0 ? (
                                   <Text>Liked post and clips</Text>
                               ): (
                                   <View>
                                       <Header/>
                                       <View style={{ height: 350, justifyContent: 'center', alignItems: 'center'}}>
                                           <Text style={{color: primary().textColor}}> You have not liked anything.</Text>
                                       </View>
                                   </View>
                               )
                           ): null
                       }

                   </View>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: safeAreaViewStyles().backgroundColor
    },
    postContainer: {
        marginTop: 1,
    },
    iconContainer: {
        backgroundColor: feedStyles().cardBackgroundColor,
        height: isAndroid() ? 415 : 460,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5
    },
    iconSections:{
        paddingTop: 8,
        paddingBottom: 8,
        width: "33.3%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSize: 22,
})

export default ProfileScreen;
