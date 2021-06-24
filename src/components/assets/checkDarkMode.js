import {Appearance} from 'react-native';

export const isDarkMode = () => {
    return Appearance.getColorScheme() === "dark";
};
