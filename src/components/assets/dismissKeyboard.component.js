import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

// dismisses keyboard must use <DismissKeyboard> first before any view.
const DismissKeyboard = ({children}) => {
   return(
       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
           {children}
       </TouchableWithoutFeedback>
   )
}

export default DismissKeyboard;
