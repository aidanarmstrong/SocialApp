import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {isAndroid} from '../assets/styles/primary.styles';

const HeaderComponent = (props) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {
                props.headerLeft ? (
                    <View style={styles.headerLeftRight}>
                        {props.headerLeft}
                    </View>
                ): <View style={styles.headerLeftRight}/>
            }
            {
                props.headerCenter ? (
                    <View style={styles.headerCenter}>
                        {props.headerCenter}
                    </View>
                ): <View style={styles.headerCenter}/>
            }
            {
                props.headerRight ? (
                    <View style={styles.headerLeftRight}>
                        {props.headerRight}
                    </View>
                ): <View style={styles.headerLeftRight}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: 18,
        fontWeight: '500'
    },
    smallHeader: {
        fontSize: 12,
        color: '#6F706E'
    },
    headerCenter: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLeftRight:{
        justifyContent: 'center',
        width: isAndroid() ? 50 : 80,
        alignItems: 'center'
    }
})


export default HeaderComponent;
