import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../assets/styles/primary.styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';


const LikePostComponent = (props) => {

    const [state, setState] = useState({
        liked: props.liked,
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
                width: '15%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.likeButton}
                onPress={() => selectLike()}
            >
                <View>
                    {
                        state.liked ? (
                            <Fontisto name="heart" color="#d43737" size={20}/>
                        ) : (
                            <Fontisto name="heart-alt" color={primary().textColor} size={20}/>
                        )
                    }
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    likeButton: {
        paddingBottom: 15
    }
});


export default LikePostComponent;
