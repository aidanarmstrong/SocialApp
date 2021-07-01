import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../../assets/hapticFeedback.component';
import {Icon} from 'react-native-elements';
import {isDarkMode} from '../../../assets/checkDarkMode';


const LikePostComponent = (data) => {

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

    const CheckDarkModeIcon = () => {
        if(isDarkMode()){
            return "heart"
        }
        return "heart-alt";
    }

    return(
        <View
            style={{
                width: '28%',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <TouchableOpacity
                activeOpacity={primary().activeOpacity}
                style={styles.likeButton}
                onPress={() => selectLike()}
            >
                <View style={primary().flexRow}>
                    {
                        state.liked ? (
                            <Icon name="heart" type="fontisto" color="#d43737" size={20} />
                        ) : (
                            <Icon name={CheckDarkModeIcon()} type="fontisto" color={primary().textColor} size={20} />
                        )
                    }
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.likes}>{state.likes}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    likeButton: {
        marginLeft: 20,
        paddingBottom: 15
    },
    likes: {
        marginLeft: 5,
        color: primary().textColor
    }
});


export default LikePostComponent;
