import React from 'react';
import {primary} from '../../../assets/styles/primary.styles';
import LikePostComponent from './like.post.component';
import CommentsPostComponent from './comments.post.component';
import SharePostComponent from './share.post.component';
import {View} from 'react-native';

const PostFooter = (props) =>{
    return (
        <View style={primary().flexRow}>
            <LikePostComponent liked={props.item.liked}/>
            <CommentsPostComponent/>
            <SharePostComponent/>
        </View>
    )
}

export default PostFooter;
