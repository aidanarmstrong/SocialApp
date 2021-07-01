import {ActionType} from "./types.actions";

export const SetCurrentScreen = (screen) => {
    return{
        type: ActionType.SET_CURRENT_SCREEN,
        payload: screen
    }
}
