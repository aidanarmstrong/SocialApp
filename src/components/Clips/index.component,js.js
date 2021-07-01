import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import Styles from './styles.component';
import Video from 'react-native-video';
import {Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import {primary} from '../../assets/styles/primary.styles';
import ProfilePicture from '../../assets/images/profile-picture.jpg';
import LinearGradient from 'react-native-linear-gradient'
import LikeClipComponent from './ActionButtons/like.component';
import CommentsClipComponent from './ActionButtons/comment.component';
import ShareClipComponent from './ActionButtons/share.component';

const ClipsComponent = React.forwardRef( (props,ref) => {

    const [data] = useState(props.data)
    const [paused, setPaused] = useState(true);
    const video = useRef(ref)
    const [pressed, setPressed] = useState(false);


    const playVideo = () => {
        if(video) {
            setPaused(false);
        }
    }

    const pauseVideo = (isVisible) => {
        if(video) {
            setPaused(true);
        }
    }

    const resetPrev = ()  => {
        if(video) {
            pauseVideo();
            setPressed(false);
        }
    }
    const handlePlaying = (isVisible) => {
        isVisible && !pressed ? playVideo() : !isVisible && paused ?  resetPrev() : pauseVideo();
    }

    return(
        <InViewPort onChange={handlePlaying}>
            <TouchableWithoutFeedback
                onPress={() => setPressed(!pressed)}
            >
                <View>
                    <Video
                        ref={ ref => {video.current = ref}}
                        style={Styles.fullScreen}
                        source={data.video}
                        paused={paused}
                        resizeMode="cover"
                        repeat
                    />
                    {
                        paused ? (
                            <View
                                style={{
                                    position: 'absolute',
                                    width: Dimensions.get('window').width,
                                    height: Dimensions.get('window').height,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon name="play" type="ionicon" color="rgba(255,255,255, 0.2)" size={68} />
                            </View>
                        ): null
                    }
                </View>
            </TouchableWithoutFeedback>


            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)' ]}
                style={{
                    position: 'absolute',
                    width: Dimensions.get('window').width,
                    bottom: 0,
                    padding: 10,
                }}
            >
                <View
                >
                    <View style={{marginBottom: 10}}>
                        <View style={[primary().flexRow]}>
                            <LikeClipComponent liked={data.likes.liked} likes={data.likes.numberOfLikes}/>
                            <CommentsClipComponent comments={data.comments} />
                            <ShareClipComponent data={data} navigation={props.navigation}/>
                        </View>
                    </View>

                    <View style={primary().flexRow}>
                        <View>
                            <View style={primary().flexRow}>
                                <View style={{justifyContent: 'center' ,paddingRight: 10}}>
                                    <Avatar
                                        size="medium"
                                        overlayContainerStyle={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                                        rounded
                                        source={ProfilePicture}
                                    />
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{color: '#fff', fontWeight: '500'}}>@{data.user.username}</Text>
                                    <Text style={{color: '#fff'}}>{data.description}</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>
            </LinearGradient>


        </InViewPort>
    )
});

export default ClipsComponent;
