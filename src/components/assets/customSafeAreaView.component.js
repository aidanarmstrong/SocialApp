import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {primary, safeAreaViewStyles} from '../../assets/styles/primary.styles';

const CustomSafeAreaView = (props) => {
    return (
        <SafeAreaView style={styles.background}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: safeAreaViewStyles().backgroundColor
    }
});

export default CustomSafeAreaView;
