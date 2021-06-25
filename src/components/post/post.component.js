import React from 'react';
import {StyleSheet, View} from 'react-native';
import {feedStyles} from '../../assets/styles/primary.styles';
import PostHeader from './header/header.post.component';
import BodyText from './body/text.post.component';
import PostFooter from './footer/footer.post.component';

const PostComponent = ({key, data, navigation}) =>{

    return (
        <View style={styles.card} key={key}>
            <PostHeader {...data.item}/>
            <BodyText postMessage={data.item.post.postMessage}/>
            <PostFooter data={data.item} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: feedStyles().cardBackgroundColor,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 4,
    },
    comments: {

    }
});

export default PostComponent;
