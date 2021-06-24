import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {feedStyles, primary} from '../../../assets/styles/primary.styles';
import {HapticFeedBack} from '../../assets/hapticFeedback.component';

const BodyText = (props) => {
    const [state] = useState({
        text: props.feedText
    });

    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [length] = useState(8)
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        HapticFeedBack('impactLight');
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >= length); //to check the text is more than 4 lines or not
    },[]);

    return(
        <View style={{marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 18}}>
            <Text
                style={styles.feedText}
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : length}
            >
                {state.text}
            </Text>
            {
                lengthMore ? (
                    <TouchableOpacity
                        activeOpacity={primary().activeOpacity}
                        onPress={toggleNumberOfLines}
                        style={{marginTop: 5 }}>
                        <Text style={styles.seeMore}>{ textShown ? 'See less' : 'See more'}</Text>
                    </TouchableOpacity>
                ): null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    seeMore: {
        color: feedStyles().seeMoreColor,
    },
    feedText: {
        fontSize: 15,
        lineHeight: 20,
        color: primary().textColor,
    }
});

export default BodyText;
