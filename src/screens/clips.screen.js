import React, {useCallback, useState} from 'react';
import {Dimensions, View, StyleSheet, TouchableOpacity, FlatList, RefreshControl, Text, ScrollView} from 'react-native';
import ViewPager from '@react-native-community/viewpager'
import VideoPlayerComponent from '../components/VideoPlayer/videoPlayer.component';
import {primary} from '../assets/styles/primary.styles';


const ClipScreen = () => {

    const [state, setState] = useState({
        activeIndex: 0,
    })


    const  videos = [
        {
            id: 1,
            video: require('../assets/videos/01.mp4'),
            paused: true,
        },
        {
            id: 2,
            video: require('../assets/videos/02.mp4'),
            paused: true,
        },
        {
            id: 3,
            video: require('../assets/videos/01.mp4'),
            paused: true,
        }
    ]


    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height} //your element width
                snapToAlignment={"center"}
                // onScroll={ (e) => {
                //     console.log(e.nativeEvent.contentInset);
                // }}
                renderItem={(data, index) => {
                    console.log(state.activeIndex);
                    return(
                        <View
                            key={index}
                            style={styles.fullScreen}
                        >
                            <VideoPlayerComponent
                                index={index}
                                activeIndex={state.activeIndex}
                                paused={true}
                                video={data.item.video}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary().backgroundColor
    },
    fullScreen: {
        marginBottom: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default ClipScreen
