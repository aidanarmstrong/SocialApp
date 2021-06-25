import React from 'react';
import {primary} from '../../../assets/styles/primary.styles';
import LikePostComponent from './likes/like.post.component';
import CommentsPostComponent from './comments/comments.post.component';
import SharePostComponent from './share/share.post.component';
import {View} from 'react-native';

const PostFooter = ({data, navigation}) =>{

    return (
        <View style={primary().flexRow}>
            <LikePostComponent liked={data.post.liked} likes={data.post.numberOfLikes}/>
            <CommentsPostComponent comments={data.comments} navigation={navigation}/>
            <SharePostComponent data={data} navigation={navigation}/>
        </View>
    )
}

export default PostFooter;
