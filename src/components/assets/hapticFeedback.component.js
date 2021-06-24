import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export const HapticFeedBack = ({type, enableVibrateFallback, ignoreAndroidSystemSettings}) => {
    const options = {
        enableVibrateFallback: enableVibrateFallback ? enableVibrateFallback : true,
        ignoreAndroidSystemSettings:  ignoreAndroidSystemSettings ? ignoreAndroidSystemSettings : false
    };
    ReactNativeHapticFeedback.trigger(type, options)
}
