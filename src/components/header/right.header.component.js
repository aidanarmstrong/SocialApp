import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';
import {Icon} from 'react-native-elements';

const RightHeaderComponent = (
    {
        title,
        titleStyle,
        iconName,
        iconType,
        iconSize,
        iconColor,
        onPress,
        isButton,
    }
) => {
    return(
        <View style={styles.container}>
            {
                isButton ? (
                    <TouchableOpacity
                        activeOpacity={primary().activeOpacity}
                        onPress={onPress}
                    >
                        <Icon color={iconColor} name={iconName} type={iconType} size={iconSize} />
                    </TouchableOpacity>
                ): (
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
   container:{
       paddingRight: 15
   }
});

export default RightHeaderComponent;
