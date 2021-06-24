import React from 'react';
import {StyleSheet, View} from 'react-native';
import {feedStyles} from '../../assets/styles/primary.styles';
import PostHeader from './header/header.post.component';
import BodyText from './body/text.post.component';
import PostFooter from './footer/footer.post.component';
import BottomSheet from 'reanimated-bottom-sheet';

const PostComponent = ({key, data}) =>{

    return (
        <View style={styles.card} key={key}>
            <PostHeader {...data.item}/>
            <BodyText feedText={data.item.feedText}/>
            <PostFooter {...data}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: feedStyles().cardBackgroundColor,
        marginBottom: 5,
        borderRadius: 4,
    },
});

export default PostComponent;
