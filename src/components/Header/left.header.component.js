import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';
import {Icon} from 'react-native-elements';

const LeftHeaderComponent = (
    {
        title, // string - text to be displayed
        titleStyle, // object of styles
        iconName, // string - name of icon
        iconType, // string - name of icon family
        iconSize, // integer - size of icon
        iconColor, // string - icon colour
        onPress, // function - passes function to onPress
        button, // boolean
        buttonStyle, // object of styles
        children, // children component
    }
) => {
    if(button){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={buttonStyle}
                    activeOpacity={primary().activeOpacity}
                    onPress={onPress}
                >
                    <Icon color={iconColor} name={iconName} type={iconType} size={iconSize} />
                </TouchableOpacity>
            </View>
        )
    }

    if(title){
        return (
            <View style={styles.container}>
                <Text style={titleStyle}>
                    {title}
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingLeft: 15
    }
});

export default LeftHeaderComponent;
