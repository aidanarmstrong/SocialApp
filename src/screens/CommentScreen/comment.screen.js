import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import CustomSafeAreaView from '../../components/assets/customSafeAreaView.component';
import {primary} from '../../assets/styles/primary.styles';
import CommentComponent from '../../components/Comment/comment.component';

const CommentScreen = (props) => {

    const [state, setState] = useState({
        comments: props.route.params.comments,
    })
    return(
        <CustomSafeAreaView>
            {
                state.comments ? (
                    <FlatList
                        data={state.comments}
                        renderItem={ (data, key) => (
                            <CommentComponent data={data.item} key={key}/>
                        )}
                    />
                ): (
                    <View style={styles.noComments}>
                        <Text style={styles.noCommentsTitle}> Be the first to comment on this post</Text>
                    </View>
                )
            }
        </CustomSafeAreaView>
    )
}

const styles = StyleSheet.create({
    noComments: {
        marginTop: 5,
        alignItems: 'center',
    },
    noCommentsTitle: {
        color: primary().textColor,
    }
});

export default CommentScreen;
