import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary} from '../../../../assets/styles/primary.styles';
import { Icon } from 'react-native-elements'

const OptionsButton = ({
        title,
        icon,
        iconType,
        iconColor,
        iconSize,
        backgroundColor,
        textColor,
        activeOpacity,
        onPress,
    }) => {
    return (
        <View style={styles.shareContainer}>
            <View style={{marginTop: 5}}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        {
                            backgroundColor: backgroundColor || "#fff",
                        }
                    ]}
                    activeOpacity={activeOpacity || 0.4}
                    onPress={onPress}
                >
                    <View style={primary().flexRow}>
                        <View style={{width: '10%', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Icon
                                name={icon}
                                type={iconType}
                                color={iconColor || "#517fa4"}
                                size={iconSize || 26}
                            />
                        </View>
                        <View style={{width: '90%', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontWeight: '600',
                                    color: textColor || "#000",
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shareContainer: {
        flexDirection: 'column',
        marginLeft: 12,
        marginRight: 12
    },
    optionContainer: {
    },
    optionButton: {
        marginBottom: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
    }
});

export default OptionsButton;
