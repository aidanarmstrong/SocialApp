import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import {isAndroid, postStyle, primary, safeAreaViewStyles} from '../assets/styles/primary.styles';
import {HapticFeedBack} from '../components/assets/hapticFeedback.component';
import LeftHeaderComponent from '../components/header/left.header.component';
import RightHeaderComponent from '../components/header/right.header.component';
import {Icon} from 'react-native-elements';
import DismissKeyboard from '../components/assets/dismissKeyboard.component';

const PostScreen = ({navigation}) => {

    const [post, setPost] = useState('');

    return(
        <DismissKeyboard>
            <View style={{flex: 1, backgroundColor: primary().backgroundColor}}>
                <View style={styles.container}>
                    <View style={[primary().flexRow, {marginBottom: 5,}]}>
                        <View style={[{width: "50%"}, primary().alignStart]}>
                            <LeftHeaderComponent
                                button={true}
                                iconName="md-close"
                                iconType="ionicon"
                                iconColor={primary().lightText}
                                iconSize={26}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </View>
                        <View style={[{width: "50%"}, primary().alignEnd]}>
                            <RightHeaderComponent>
                                {
                                    post.length > 0 ? (

                                        <TouchableOpacity
                                            onPress={() => {
                                                HapticFeedBack('impactLight')
                                                navigation.goBack();
                                            }}
                                        >
                                            <View style={primary().flexRow}>
                                                <View style={primary().alignCenter}>
                                                    <Text
                                                        style={{
                                                            color: primary().textColor,
                                                            fontWeight: '600',
                                                            fontSize: 18
                                                        }}
                                                    >
                                                        Post
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ): (
                                        <View style={primary().alignCenter}>
                                            <Text
                                                style={{
                                                    color: primary().lightText,
                                                    fontWeight: '500',
                                                    fontSize: 18
                                                }}
                                            >
                                                Post
                                            </Text>
                                        </View>
                                    )
                                }
                            </RightHeaderComponent>
                        </View>
                    </View>
                </View>
                <View style={{margin: 15}}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(post) => {
                            setPost(post)
                        }}
                        placeholder="What's new?"
                        placeholderTextColor={primary().textColor}
                        multiline={true}
                    />
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 80,
                        backgroundColor: postStyle().actionsBackground,
                        justifyContent: 'flex-start',
                    }}
                >
                    <View style={[primary().flexRow, {marginTop: 20}]}>
                        <TouchableOpacity
                            style={[{width: "50%"}, primary().alignCenter]}
                            onPress={() => {
                                HapticFeedBack('impactLight');
                            }}
                        >
                            <Icon name="attachment" type="entypo" size={26} color={primary().lightText}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[{width: "50%"}, primary().alignCenter]}
                            onPress={() => {
                                HapticFeedBack('impactLight');
                            }}
                        >
                            <Icon name="emoji-happy" type="entypo" size={26} color={primary().lightText}/>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </DismissKeyboard>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        height: isAndroid() ? 40 : 80,
        justifyContent: 'flex-end',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    textInput : {
        fontSize: 18,
        color: primary().textColor,
        top: 0
    }
})
export default PostScreen;
