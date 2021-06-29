import React from 'react';
import {isDarkMode} from '../../components/assets/checkDarkMode';
import {Platform} from 'react-native';

export const isAndroid = () => {
    return Platform.OS === "android";
}

export const primary = () => {
    return {
        // changes background color of components
        backgroundColor: isDarkMode() ? "#343840" : "#fff",
        textColor: isDarkMode() ? "#fff" : "#182233",
        textWhite: "#fff",
        flexRow: {
            flexDirection: 'row'
        },
        title: {
            color: isDarkMode() ? "#fff" : "#486799"
        },
        timestamp: {
            fontSize: 12,
            color: isDarkMode() ? '#c2c0c0' : '#665a5a'
        },
        activeOpacity: 0.6,
        alignStart: { justifyContent: 'center', alignItems: 'flex-start'},
        alignCenter: { justifyContent: 'center', alignItems: 'center'},
        alignEnd: { justifyContent: 'center', alignItems: 'flex-end'},
        lightText: isDarkMode() ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)"
    };
};

export const bottomTabsStyles = () => {
    return{
        // changes the bottom tab navigator background color
        bottomTabsStyle: {
            backgroundColor: primary().backgroundColor,
        },
        activeColor: isDarkMode() ? "#fff" : "#486799",
        inactiveColor: isDarkMode() ? "#b0b0b0" : "#8d95a1",
        bottomIconSize: isAndroid() ? 20 : 24 ,
    }
}

export const stackHeaderStyle = () => {
    return{
        // changes the header background color
        headerBackground: {
            backgroundColor: primary().backgroundColor,
        },
        emptyShadowOffset: {
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
        },
        title: {
            fontSize: 20,
            fontWeight: '500',
            color: primary().textColor,
        }
    }
}

export const feedStyles = () => {
    return {
        cardBackgroundColor: primary().backgroundColor,
        seeMoreColor: isDarkMode() ? '#acacad' : '#4284ff',
    }
}

export const safeAreaViewStyles = () => {
    return {
        backgroundColor: isDarkMode() ? "#323131" : "rgb(237,241,244)",
    }
}

export const shareOptionsStyles = () =>{
    return{
        buttonColor: isDarkMode() ? "rgba(255,255,255,0.2)" : "#fff",
        overlayColor: "rgba(0,0,0,0.5)",
        bottomSheetColor: isDarkMode() ? "#3e3e42" : "#fff"
    }
}

export const postStyle = () => {
    return{
        actionsBackground: isDarkMode() ? "rgba(255,255, 255, 0.3)" : "rgab(0,0,0,0.5)",
    }
}

