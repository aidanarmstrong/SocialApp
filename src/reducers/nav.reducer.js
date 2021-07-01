import React from 'react';
import {ActionType} from "../actions/types.actions";

const NavReducer = (state= "Home", action ) => {
    switch (action.type){
        case ActionType.SET_CURRENT_SCREEN:
            return action.payload;
        default:
            return state;
    }
}

export default NavReducer;
