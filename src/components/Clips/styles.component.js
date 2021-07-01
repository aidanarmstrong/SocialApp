import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    fullScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Styles;
