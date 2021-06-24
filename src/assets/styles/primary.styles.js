import React from 'react';
import {isDarkMode} from '../../components/assets/checkDarkMode';

export const primary = () => {
    return {
        // changes background color of components
        backgroundColor: isDarkMode() ? "#343840" : "#fff",
        textColor: isDarkMode() ? "#fff" : "#182233",
        textWhite: "#fff",
        flexRow: {
            flexDirection: 'row'
        },
        timestamp: {
            fontSize: 12,
            color: isDarkMode() ? '#c2c0c0' : '#665a5a'
        },
        activeOpacity: 0.6
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
        bottomIconSize: 26,
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
        backgroundColor: isDarkMode() ? "#323131" : "#d2cfcf",
    }
}
