import React, {useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';
import {Icon} from 'react-native-elements';

const VideoPlayerComponent = ({video, paused}) => {
    const [state, setState] = useState({
        paused: paused,
    })

    return(
        <TouchableOpacity
            activeOpacity={1}
            style={styles.fullScreen}
            onPress={() => {setState({paused: !state.paused})}}
        >
            {/*<Video*/}
            {/*    key={key}*/}
            {/*    source={video}*/}
            {/*    style={styles.fullScreen}*/}
            {/*    paused={state.paused}*/}
            {/*    // onLoad={this.onLoad}*/}
            {/*    // onBuffer={this.onBuffer}*/}
            {/*    repeat={true}*/}
            {/*    resizeMode='cover'*/}
            {/*/>*/}

            <Video
                style={styles.fullScreen}
                source={video}
                resizeMode="cover"
                paused={state.paused}
                repeat />
            {
                state.paused ? (
                    <View
                        style={[styles.fullScreen, primary().alignCenter]}
                    >
                        <Icon name="play" type="ionicon" color="rgba(255,255,255, 0.8)" size={68} />
                    </View>
                ): null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default VideoPlayerComponent;
