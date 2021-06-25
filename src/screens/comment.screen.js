import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import CustomSafeAreaView from '../components/assets/customSafeAreaView.component';
import {primary} from '../assets/styles/primary.styles';
import ProfilePicture from '../assets/images/profile-picture.jpg';
import {Avatar} from 'react-native-elements';
import verifiedUser from '../assets/images/verified.png';
import Feather from 'react-native-vector-icons/Feather';
import CommentComponent from '../components/comment/comment.component';

const CommentScreen = (props) => {

    const [state, setState] = useState({
        comments: props.route.params.comments,
    })
    return(
        <CustomSafeAreaView>
            <FlatList
                data={state.comments}
                renderItem={ (data, key) => (
                    <CommentComponent data={data.item} key={key}/>
                )}
            />
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default CommentScreen;
