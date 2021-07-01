import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {primary} from '../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';


const LikeClipComponent = (data) => {

    const [state, setState] = useState({
        liked: data.liked,
        likes: data.likes
    });

    const selectLike = () => {
        HapticFeedBack('impactLight')
        setState(prevState => {
            return {
                ...prevState,
                liked: !prevState.liked
            }
        });
    }

    return(
        <View
            style={{
                width: '33.3%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.likeButton}
                onPress={() => selectLike()}
            >
                <View style={primary().alignCenter}>
                    {
                        state.liked ? (
                            <Icon name="heart" type="fontisto" color="#d43737" size={23} />
                        ) : (
                            <Icon name="heart" type="fontisto" color="#fff" size={23} />
                        )
                    }
                </View>
            </TouchableOpacity>
            <View style={primary().alignCenter}>
                <Text style={styles.likes}>{state.likes}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    likeButton: {
        marginBottom: 5,
    },
    likes: {
        color: '#fff'
    }
});


export default LikeClipComponent;
