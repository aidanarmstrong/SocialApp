import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';
import {primary, safeAreaViewStyles} from '../../assets/styles/primary.styles';
import {IconButton} from 'react-native-paper';

const ChatScreen = (props) => {

    const data = [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nibh sit amet massa interdum iaculis. Sed pretium ac lorem a cursus.",
            read: true,
            liked: false,
            currentUser: false
        },
        {
            id: 2,
            message: "Vivamus gravida, velit quis fermentum semper, mi odio vestibulum neque, quis vestibulum quam turpis nec sapien.",
            read: false,
            liked: false,
            currentUser: true
        }
    ]

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    // const renderInputToolbar = () => {
    //     return (
    //         <InputToolbar
    //             containerStyle={{
    //                 flex: 1,
    //                 borderTopWidth: 0,
    //                 backgroundColor: safeAreaViewStyles().backgroundColor,
    //             }}
    //             placeholder="Send message"
    //             {...props}
    //         />
    //     )
    // }

    const renderBubble = (props) => {
        return (
            // Step 3: return the component
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: '#30ab5d',
                    },
                    left: {
                        backgroundColor: 'blue'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    },
                    left: {
                        color: '#fff'
                    }
                }}
            />
        );
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={primary().alignCenter}>
                    <IconButton icon='send' size={26} color='#30ab5d' />
                </View>
            </Send>
        );
    }

    const scrollToBottomComponent = () => {
        return (
            <View style={primary().alignCenter}>
                <IconButton icon='chevron-down' size={26} color='#6646ee' />
            </View>
        );
    }

    return(
        <CustomSafeAreaView>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                // renderInputToolbar={renderInputToolbar}
                renderBubble={renderBubble}
                renderAvatarOnTop
                multiline
                placeholder="Send message"
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                user={{
                    _id: 1,
                }}
            />
        </CustomSafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
       // flex:1,
       // justifyContent: 'center',
       // alignItems: 'center'
    },
    userMessage: {
        alignItems: 'flex-end',
        backgroundColor: '#30ab5d',
        maxWidth: 350,
        padding: 5
    }

});

export default ChatScreen;
