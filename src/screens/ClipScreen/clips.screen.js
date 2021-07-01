import React, {useState} from 'react';
import {Dimensions, View, StyleSheet, FlatList} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';
import ClipsComponent from '../../components/Clips/index.component,js';
import {useSelector} from 'react-redux';


const ClipScreen = ({route}) => {

    const [state, setState] = useState({
        currentVisibleIndex: 0,
        viewabilityConfig: { viewAreaCoveragePercentThreshold: 70 }
    })

    const currentScreen = useSelector( (state) => state.currentScreenName);

    const  videos = [
        {
            id: 1,
            video: require('../../assets/videos/01.mp4'),
            description: "this is so cool",
            user: {
                id: 1,
                username: 'aidanjarmstrong'
            },
            comments: {
                numberOfComments: 344,
                comments: []
            },
            likes: {
                liked: false,
                numberOfLikes: 345
            }
        },
        {
            id: 2,
            video: require('../../assets/videos/02.mp4'),
            description: "yes haha",
            user: {
                id: 1,
                username: 'jack.783'
            },
            comments: {
                numberOfComments: 0,
                comments: []
            },
            likes: {
                liked: false,
                numberOfLikes: 1
            }
        },
        {
            id: 3,
            video: require('../../assets/videos/01.mp4'),
            description: "what did he say hahah",
            user: {
                id: 1,
                username: 'yloeb23'
            },
            comments: {
                numberOfComments: 2,
                comments: []
            },
            likes: {
                liked: false,
                numberOfLikes: 23
            }
        },
        {
            id: 4,
            video: require('../../assets/videos/02.mp4'),
            description: "what the hell is this lmao",
            user: {
                id: 1,
                username: 'howyadoing'
            },
            comments: {
                numberOfComments: 1,
                comments: []
            },
            likes: {
                liked: false,
                numberOfLikes: 24
            }
        },
        {
            id: 5,
            video: require('../../assets/videos/02.mp4'),
            description: "ok but really?",
            user: {
                id: 1,
                username: 'funny.madness'
            },
            comments: {
                numberOfComments: 13,
                comments: []
            },
            likes: {
                liked: false,
                numberOfLikes: 1234
            }
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={videos}
                decelerationRate={'fast'}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').width}
                snapToAlignment={"center"}
                viewabilityConfig={state.viewabilityConfig}
                disableIntervalMomentum
                renderItem={ ({ item }) => <ClipsComponent data={item} routeName={route.name} currentScreen={currentScreen}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary().backgroundColor
    },
})

export default ClipScreen
