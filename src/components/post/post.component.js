import React from 'react';
import {StyleSheet, View} from 'react-native';
import {feedStyles} from '../../assets/styles/primary.styles';
import PostHeader from './header/header.post.component';
import BodyText from './body/text.post.component';
import PostFooter from './footer/footer.post.component';

const PostComponent = ({key, data, navigation, style}) =>{

    if(style){
        return (
            <View style={style} key={key}>
                <PostHeader {...data.item}/>
                <BodyText postMessage={data.item.post.postMessage}/>
                <PostFooter data={data.item} navigation={navigation}/>
            </View>
        )
    }
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
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 4,
    },
});

export default PostComponent;
